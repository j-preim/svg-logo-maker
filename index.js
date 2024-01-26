const inquirer = require("inquirer");
const fs = require("fs");
const shapes = require("./lib/shapes.js");

inquirer
  .prompt([
    {
      type: "input",
      message: "What text should the image display? (Up to three characters)",
      name: "textContent",
      validate: textContent => {
        if (textContent.length > 3){
          return "Your text cannot be longer than three characters"
        }
        return true;
      }
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
        {value: "Circle"},
        {value: "Triangle"},
        {value: "Square"},
        
      ],
      name: "shapeName",
    },
    {
      type: "input",
      message: "What color should the shape be?",
      name: "shapeColor",
    },
  ])
  .then((response) =>
    // console.log(shapes(response))
    fs.writeFile("logo.svg",
    shapes(response),
    (err) => err ? console.error(err) : console.log("Generated logo.svg"))
  )