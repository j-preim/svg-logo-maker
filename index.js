// Add the required components
const inquirer = require("inquirer");
const fs = require("fs");
const shapes = require("./lib/shapes.js");

// Create the inquirer prompts for the user to answer
inquirer
  .prompt([
    {
      type: "input",
      message: "What text should the image display? (Up to three characters)",
      name: "textContent",
      validate: (textContent) => {
        if (textContent.length > 3) {
          return "Your text cannot be longer than three characters";
        }
        return true;
      },
    },
    {
      type: "input",
      message: "What color should the text be?",
      name: "textColor",
    },
    {
      type: "list",
      message: "What shape would you like to create?",
      choices: [
        { value: "Circle" },
        { value: "Triangle" },
        { value: "Square" },
      ],
      name: "shapeName",
    },
    {
      type: "input",
      message: "What color should the shape be?",
      name: "shapeColor",
    },
  ])

  // Process the user's responses and determine the correct shape object
  .then((response) => {
    let newShape;
    if (response.shapeName === "Circle") {
      newShape = new shapes.Circle(response.shapeName, response.shapeColor, response.textContent, response.textColor);
    }
    if (response.shapeName === "Triangle") {
      newShape = new shapes.Triangle(response.shapeName, response.shapeColor, response.textContent, response.textColor);
    }
    if (response.shapeName === "Square") {
      newShape = new shapes.Square(response.shapeName, response.shapeColor, response.textContent, response.textColor);
    }

    // Write the rendered logo contents to a new file
    fs.writeFile("logo.svg", newShape.render(), (err) =>
      err ? console.error(err) : console.log("Generated logo.svg")
    );
  });
