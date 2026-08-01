export class Layer {
  constructor(name, options = {}) {
    this.name = name;
    this.visible = options.visible ?? true;
    this.items = [];
  }

  add(item) {
    this.items.push(item);
    return this;
  }

  clear() {
    this.items.length = 0;
  }
}
