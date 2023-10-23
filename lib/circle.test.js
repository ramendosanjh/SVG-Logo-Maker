const { Circle } = require('./lib/shapes'); // Import the Circle class
const circle = new Circle('blue', 30); // Create an instance of the Circle

describe('Circle Class', () => {
  test('Circle should generate correct SVG for a given radius', () => {
    const expectedSVG = '<circle cx="50" cy="50" r="30" fill="blue" />';
    const generatedSVG = circle.generateSVG();

    expect(generatedSVG).toEqual(expectedSVG);
  });

});
