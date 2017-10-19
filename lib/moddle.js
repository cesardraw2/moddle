import {
  forEach,
  find
} from 'min-dash/lib/collection';

import {
  isString,
  isObject
} from 'min-dash/lib/lang';

import Factory from './factory';
import Registry from './registry';
import Properties from './properties';

import { parseName as parseNameNs } from './ns';


/**
 * @class Moddle
 *
 * A model that can be used to create elements of a specific type.
 *
 * @example
 *
 * var Moddle = require('moddle');
 *
 * var pkg = {
 *   name: 'mypackage',
 *   prefix: 'my',
 *   types: [
 *     { name: 'Root' }
 *   ]
 * };
 *
 * var moddle = new Moddle([pkg]);
 *
 * @param {Array<Package>} packages the packages to contain
 */
export default class Moddle {

  constructor(packages) {

    this.properties = new Properties(this);

    this.factory = new Factory(this, this.properties);
    this.registry = new Registry(packages, this.properties);

    this.typeCache = {};
  }


  /**
   * Create an instance of the specified type.
   *
   * @method Moddle#create
   *
   * @example
   *
   * var foo = moddle.create('my:Foo');
   * var bar = moddle.create('my:Bar', { id: 'BAR_1' });
   *
   * @param  {String|Object} descriptor the type descriptor or name know to the model
   * @param  {Object} attrs   a number of attributes to initialize the model instance with
   * @return {Object}         model instance
   */
  create(descriptor, attrs) {
    var Type = this.getType(descriptor);

    if (!Type) {
      throw new Error('unknown type <' + descriptor + '>');
    }

    return new Type(attrs);
  }


  /**
   * Returns the type representing a given descriptor
   *
   * @method Moddle#getType
   *
   * @example
   *
   * var Foo = moddle.getType('my:Foo');
   * var foo = new Foo({ 'id' : 'FOO_1' });
   *
   * @param  {String|Object} descriptor the type descriptor or name know to the model
   * @return {Object}         the type representing the descriptor
   */
  getType(descriptor) {

    var cache = this.typeCache;

    var name = isString(descriptor) ? descriptor : descriptor.ns.name;

    var type = cache[name];

    if (!type) {
      descriptor = this.registry.getEffectiveDescriptor(name);
      type = cache[name] = this.factory.createType(descriptor);
    }

    return type;
  }


  /**
   * Creates an any-element type to be used within model instances.
   *
   * This can be used to create custom elements that lie outside the meta-model.
   * The created element contains all the meta-data required to serialize it
   * as part of meta-model elements.
   *
   * @method Moddle#createAny
   *
   * @example
   *
   * var foo = moddle.createAny('vendor:Foo', 'http://vendor', {
   *   value: 'bar'
   * });
   *
   * var container = moddle.create('my:Container', 'http://my', {
   *   any: [ foo ]
   * });
   *
   * // go ahead and serialize the stuff
   *
   *
   * @param  {String} name  the name of the element
   * @param  {String} nsUri the namespace uri of the element
   * @param  {Object} [properties] a map of properties to initialize the instance with
   * @return {Object} the any type instance
   */
  createAny(name, nsUri, properties) {

    var nameNs = parseNameNs(name);

    var element = {
      $type: name
    };

    var descriptor = {
      name: name,
      isGeneric: true,
      ns: {
        prefix: nameNs.prefix,
        localName: nameNs.localName,
        uri: nsUri
      }
    };

    this.properties.defineDescriptor(element, descriptor);
    this.properties.defineModel(element, this);
    this.properties.define(element, '$parent', { enumerable: false, writable: true });

    forEach(properties, function(a, key) {
      if (isObject(a) && a.value !== undefined) {
        element[a.name] = a.value;
      } else {
        element[key] = a;
      }
    });

    return element;
  }


  /**
   * Returns a registered package by uri or prefix
   *
   * @return {Object} the package
   */
  getPackage(uriOrPrefix) {
    return this.registry.getPackage(uriOrPrefix);
  }

  /**
   * Returns a snapshot of all known packages
   *
   * @return {Object} the package
   */
  getPackages() {
    return this.registry.getPackages();
  }

  /**
   * Returns the descriptor for an element
   */
  getElementDescriptor(element) {
    return element.$descriptor;
  }

  /**
   * Returns true if the given descriptor or instance
   * represents the given type.
   *
   * May be applied to this, if element is omitted.
   */
  hasType(element, type) {
    if (type === undefined) {
      type = element;
      element = this;
    }

    var descriptor = element.$model.getElementDescriptor(element);

    return !!find(descriptor.allTypes, function(t) {
      return t.name === type;
    });
  }

  /**
   * Returns the descriptor of an elements named property
   */
  getPropertyDescriptor(element, property) {
    return this.getElementDescriptor(element).propertiesByName[property];
  }

  /**
   * Returns a mapped type's descriptor
   */
  getTypeDescriptor(type) {
    return this.registry.typeMap[type];
  }

}