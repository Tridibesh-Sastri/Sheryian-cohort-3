import { Matrix2 } from './Matrix2.js';
import { Vector2 } from './Vector2.js';

export class Transform {
  constructor() {
    this.position = new Vector2();
    this.rotation = 0;
    this.scale = new Vector2(1, 1);
  }

  getRotationMatrix() {
    return Matrix2.rotation(this.rotation);
  }

  applyTo(vector) {
    const scaled = new Vector2(vector.x * this.scale.x, vector.y * this.scale.y);
    const rotated = this.getRotationMatrix().multiplyVector(scaled);
    return new Vector2(rotated.x + this.position.x, rotated.y + this.position.y);
  }
}
