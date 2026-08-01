import { Vector2 } from '../math/Vector2.js';

export class Camera {
  constructor() {
    this.position = new Vector2();
    this.zoom = 1;
  }

  pan(x, y) {
    this.position.x += x;
    this.position.y += y;
    return this;
  }

  setZoom(value) {
    this.zoom = Math.max(0.1, value);
    return this;
  }
}
