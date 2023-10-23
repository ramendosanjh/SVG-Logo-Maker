const { Triangle } = require('./lib/shapes'); // Import the Triangle class
const triangle = new Triangle('red', 50); // Create an instance of the Triangle

describe('Triangle Class', () => {
  test('Triangle should generate correct SVG for a given side length', () => {
    const expectedSVG = '<polygon points="0,43.30127018922193 50,43.30127018922193 25,0" fill="red" />';
    const generatedSVG = triangle.generateSVG();

    expect(generatedSVG).toEqual(expectedSVG);
  });

});
