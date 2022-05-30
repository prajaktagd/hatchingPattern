class RGB {
  constructor(red, green, blue) {
    this.red = red;
    this.green = green;
    this.blue = blue;
  }

  toHex() {
    return [this.red, this.green, this.blue].map(
      (pigment) => pigment.toString(16).padStart(2, 0)
    ).join('');
  }

  toRGB() {
    return `rgb(${this.red},${this.green},${this.blue})`;
  }
}

exports.RGB = RGB;
