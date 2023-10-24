const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require('./lib/shapes');

// Create an array of questions for user input
const promptUserForLogoDetails = async () => {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters for the text:",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter the text color (color keyword or hexadecimal number): #ffffffff ",
    },
    {
      type: "list",
      name: "shape",
      message: "Select a shape:",
      choices: ["Circle", "Triangle", "Square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter the shape color (color keyword or hexadecimal number):",
    },
  ]);

  return answers;
};

const generateSVGCode = (shape, text, textColor, shapeColor) => {
  let svgCode;

  // Create an instance of the selected shape class based on user input
  let shapeInstance;
  switch (shape) {
    case "Circle":
      shapeInstance = new Circle(shapeColor);
      break;
    case "Triangle":
      shapeInstance = new Triangle(shapeColor);
      break;
    case "Square":
      shapeInstance = new Square(shapeColor);
      break;
    default:
      throw new Error("Invalid shape selected.");
  }

  // Generate the SVG code for the shape with the specified text and text color
  svgCode = shapeInstance.generateSVG(text, textColor);

  return `<?xml version="1.0" encoding="UTF-8"?>
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${svgCode}
    </svg>`;
};

const saveSVGToFile = (svg) => {
  fs.writeFileSync("logo.svg", svg);
  console.log("Generated logo.svg");
};

const main = async () => {
  try {
    const { text, textColor, shape, shapeColor } = await promptUserForLogoDetails();
    const svgCode = generateSVGCode(shape, text, textColor, shapeColor);
    saveSVGToFile(svgCode);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

main();
