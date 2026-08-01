export class Matrix2 {
  constructor(a = 1, b = 0, c = 0, d = 1) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
  }

  static identity() {
    return new Matrix2();
  }

  static rotation(angle) {
    const cosine = Math.cos(angle);
    const sine = Math.sin(angle);
    return new Matrix2(cosine, sine, -sine, cosine);
  }

  multiplyVector(vector) {
    return {
      x: vector.x * this.a + vector.y * this.c,
      y: vector.x * this.b + vector.y * this.d,
    };
  }

  multiply(matrix) {
    return new Matrix2(
      this.a * matrix.a + this.c * matrix.b,
      this.b * matrix.a + this.d * matrix.b,
      this.a * matrix.c + this.c * matrix.d,
      this.b * matrix.c + this.d * matrix.d,
    );
  }
}
