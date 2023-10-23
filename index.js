// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");

const shapeChoices = ["Circle", "Triangle", "Square"];

// Create an array of questions for user input
const promptUserForLogoDetails = async () => {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Enter 3 letters for the text:",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter colour for text:",
    },
    {
      type: "list",
      name: "shape",
      message: "Select a shape:",
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter color for shape:",
    },
  ]);

  return answers;
};

const generateSVGCode = (shape, text, textColor, shapeColor) => {
  let svgCode;

  switch (shape) {
    case "Circle":
      svgCode = new Circle(shapeColor).generateSVG(text, textColor);
      break;
    case "Triangle":
      svgCode = new Triangle(shapeColor).generateSVG(text, textColor);
      break;
    case "Square":
      svgCode = new Square(shapeColor).generateSVG(text, textColor);
      break;
    default:
      throw new Error("Invalid shape selected.");
  }

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
    const { text, textColor, shape, shapeColor } =
      await promptUserForLogoDetails();
    const svgCode = generateSVGCode(shape, text, textColor, shapeColor);
    saveSVGToFile(svgCode);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

main();
