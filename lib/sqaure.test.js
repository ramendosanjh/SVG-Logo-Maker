const { Square } = require('./lib/shapes'); // Import the Square class
const square = new Square('green', 40); // Create an instance of the Square

describe('Square Class', () => {
  test('Square should generate correct SVG for a given side length', () => {
    const expectedSVG = '<rect x="0" y="0" width="40" height="40" fill="green" />';
    const generatedSVG = square.generateSVG();

    expect(generatedSVG).toEqual(expectedSVG);
  });

});
