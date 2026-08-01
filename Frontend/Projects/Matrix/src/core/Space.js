import { Layer } from './Layer.js';

export class Space {
  constructor() {
    this.layers = [];
  }

  createLayer(name, options = {}) {
    const layer = new Layer(name, options);
    this.layers.push(layer);
    return layer;
  }

  getLayer(name) {
    return this.layers.find((layer) => layer.name === name);
  }
}
