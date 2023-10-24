class Shape {
  constructor() {
      this.attributes = {};
  }

  setAttribute(attributeName, attributeValue) {
      this.attributes[attributeName] = attributeValue;
  }

  generateShape() {
      // Implement the logic for generating the shape based on the attributes
      // You can access the attributes from this.attributes
      throw new Error('generateShape() must be implemented by the specific shape class.');
  }

  generateSVG() {
      throw new Error('generateSVG() must be implemented by the specific shape class.');
  }
}

class Circle extends Shape {
  constructor() {
      super();
  }

  generateSVG() {
      const { cx, cy, r, fill } = this.attributes;
      return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" />`;
  }
}

class Square extends Shape {
  constructor() {
      super();
  }

  generateSVG() {
      const { x, y, width, height, fill } = this.attributes;
      return `<rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${fill}" />`;
  }
}

class Triangle extends Shape {
  constructor() {
      super();
  }

  generateSVG() {
      const { points, fill } = this.attributes;
      return `<polygon points="${points}" fill="${fill}" />`;
  }
}

module.exports = { Shape, Circle, Square, Triangle };
