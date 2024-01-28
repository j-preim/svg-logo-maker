const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Triangle, Square} = require("./lib/shapes.js");

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

  .then((response) => {
    let newShape;
    if (response.shapeName === "Circle") {
      newShape = new Circle(response.shapeName, response.shapeColor, response.textContent, response.textColor);
    }
    if (response.shapeName === "Triangle") {
      newShape = new Triangle(response.shapeName, response.shapeColor, response.textContent, response.textColor);
    }
    if (response.shapeName === "Square") {
      newShape = new Square(response.shapeName, response.shapeColor, response.textContent, response.textColor);
    }

    fs.writeFile("logo.svg", newShape.render(), (err) =>
      err ? console.error(err) : console.log("Generated logo.svg")
    );
  });
