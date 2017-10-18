import {
  assign,
  forEach
} from 'lodash-es';

import DescriptorBuilder from './descriptor-builder';

import { parseName as parseNameNs } from './ns';
import { isBuiltIn as isBuiltInType } from './types';


export default class Registry {

  constructor(packages, properties) {
    this.packageMap = {};
    this.typeMap = {};

    this.packages = [];

    this.properties = properties;

    forEach(packages, this.registerPackage.bind(this));
  }

  getPackage(uriOrPrefix) {
    return this.packageMap[uriOrPrefix];
  }

  getPackages() {
    return this.packages;
  }

  registerPackage(pkg) {

    // copy package
    pkg = assign({}, pkg);

    // register types
    forEach(pkg.types, (descriptor) => {
      this.registerType(descriptor, pkg);
    });

    this.packageMap[pkg.uri] = this.packageMap[pkg.prefix] = pkg;
    this.packages.push(pkg);
  }

  /**
   * Register a type from a specific package with us
   */
  registerType(type, pkg) {

    type = assign({}, type, {
      superClass: (type.superClass || []).slice(),
      extends: (type.extends || []).slice(),
      properties: (type.properties || []).slice(),
      meta: assign(({}, type.meta || {}))
    });

    var ns = parseNameNs(type.name, pkg.prefix),
        name = ns.name,
        propertiesByName = {};

    // parse properties
    forEach(type.properties, function(p) {

      // namespace property names
      var propertyNs = parseNameNs(p.name, ns.prefix),
          propertyName = propertyNs.name;

      // namespace property types
      if (!isBuiltInType(p.type)) {
        p.type = parseNameNs(p.type, propertyNs.prefix).name;
      }

      assign(p, {
        ns: propertyNs,
        name: propertyName
      });

      propertiesByName[propertyName] = p;
    });

    // update ns + name
    assign(type, {
      ns: ns,
      name: name,
      propertiesByName: propertiesByName
    });

    forEach(type.extends, (extendsName) => {
      var extended = this.typeMap[extendsName];

      extended.traits = extended.traits || [];
      extended.traits.push(name);
    });

    // link to package
    this.definePackage(type, pkg);

    // register
    this.typeMap[name] = type;
  }


  /**
   * Traverse the type hierarchy from bottom to top,
   * calling iterator with (type, inherited) for all elements in
   * the inheritance chain.
   *
   * @param {Object} nsName
   * @param {Function} iterator
   * @param {Boolean} [trait=false]
   */
  mapTypes(nsName, iterator, trait) {

    var type = isBuiltInType(nsName.name) ? { name: nsName.name } : this.typeMap[nsName.name];

    /**
     * Traverse the selected trait.
     *
     * @param {String} cls
     */
    var traverseTrait = (cls) => {
      return traverseSuper(cls, true);
    };

    /**
     * Traverse the selected super type or trait
     *
     * @param {String} cls
     * @param {Boolean} [trait=false]
     */
    var traverseSuper = (cls, trait) => {
      var parentNs = parseNameNs(cls, isBuiltInType(cls) ? '' : nsName.prefix);

      this.mapTypes(parentNs, iterator, trait);
    };

    if (!type) {
      throw new Error('unknown type <' + nsName.name + '>');
    }

    forEach(type.superClass, trait ? traverseTrait : traverseSuper);

    // call iterator with (type, inherited=!trait)
    iterator(type, !trait);

    forEach(type.traits, traverseTrait);
  }


  /**
   * Returns the effective descriptor for a type.
   *
   * @param  {String} type the namespaced name (ns:localName) of the type
   *
   * @return {Descriptor} the resulting effective descriptor
   */
  getEffectiveDescriptor(name) {

    var nsName = parseNameNs(name);

    var builder = new DescriptorBuilder(nsName);

    this.mapTypes(nsName, builder.addTrait.bind(builder));

    var descriptor = builder.build();

    // define package link
    this.definePackage(descriptor, descriptor.allTypes[descriptor.allTypes.length - 1].$pkg);

    return descriptor;
  }


  definePackage(target, pkg) {
    this.properties.define(target, '$pkg', { value: pkg });
  }
}
