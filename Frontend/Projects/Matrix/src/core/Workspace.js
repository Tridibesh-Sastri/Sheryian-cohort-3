import { Camera } from './Camera.js';
import { Renderer } from './Renderer.js';
import { Space } from './Space.js';

export class Workspace {
  constructor(canvas) {
    this.space = new Space();
    this.camera = new Camera();
    this.renderer = new Renderer(canvas);
  }

  resize(width, height) {
    this.renderer.resize(width, height);
  }

  createLayer(name, options = {}) {
    return this.space.createLayer(name, options);
  }

  render() {
    this.renderer.clear();
  }
}
