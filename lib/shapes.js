class Shape {
    constructor(color) {
      this.color = color;
    }
  
    // This method should be implemented by specific shape classes to generate the shape's SVG code.
    generateSVG() {
      throw new Error('generateSVG() must be implemented by the specific shape class.');
    }
  }
  
  class Circle extends Shape {
    constructor(color, radius) {
      super(color);
      this.radius = radius;
    }
  
    generateSVG() {
      // Generate SVG code for a circle with the specified properties (color, radius).
      return `<circle cx="50" cy="50" r="${this.radius}" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    constructor(color, sideLength) {
      super(color);
      this.sideLength = sideLength;
    }
  
    generateSVG() {
      // Generate SVG code for a square with the specified properties (color, side length).
      return `<rect x="0" y="0" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shape {
    constructor(color, sideLength) {
      super(color);
      this.sideLength = sideLength;
    }
  
    generateSVG() {
      // Generate SVG code for an equilateral triangle with the specified properties (color, side length).
      const height = (Math.sqrt(3) / 2) * this.sideLength;
      return `<polygon points="0,${height} ${this.sideLength}, ${height} ${this.sideLength / 2},0" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Shape, Circle, Square, Triangle };
  