
export default class Base {

  get(name) {
    return this.$model.properties.get(this, name);
  }

  set(name, value) {
    this.$model.properties.set(this, name, value);
  }

}
