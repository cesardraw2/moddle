import {
  forEach
} from 'lodash-es';

import Base from './base';


export default class Factory {

  constructor(model, properties) {
    this.model = model;
    this.properties = properties;
  }

  /**
   * Create a given type for the specified element descriptor.
   *
   * @param  {Object} descriptor
   *
   * @return {Function} the type constructor
   */
  createType(descriptor) {

    var model = this.model,
        props = this.properties;

    var name = descriptor.ns.name;

    /**
     * The new type constructor
     */
    class ModdleElement extends Base {

      constructor(attrs) {
        super();

        props.define(this, '$type', { value: name, enumerable: true });
        props.define(this, '$attrs', { value: {} });
        props.define(this, '$parent', { writable: true });

        forEach(attrs, (val, key) => {
          this.set(key, val);
        });
      }

    }

    var proto = ModdleElement.prototype;

    // initialize default values
    forEach(descriptor.properties, function(p) {
      if (!p.isMany && p.default !== undefined) {
        proto[p.name] = p.default;
      }
    });

    props.defineModel(proto, model);
    props.defineDescriptor(proto, descriptor);

    ModdleElement.hasType = proto.$instanceOf = this.model.hasType;

    // static links
    props.defineModel(ModdleElement, model);
    props.defineDescriptor(ModdleElement, descriptor);

    return ModdleElement;
  }

}