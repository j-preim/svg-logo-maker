// Constructor Shape is imported.
const shapes = require("../shapes.js");

// Instantiate test shapes
const newCircle = new shapes.Circle("circle", "black", "HEY", "yellow");
const newTriangle = new shapes.Triangle("triangle", "red", "JCP", "blue");
const newSquare = new shapes.Square("square", "gray", "AWE", "green");

// Create tests
test("Test a circle", () => {
  expect(newCircle.render()).toEqual(
    `
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  
    <circle cx="150" cy="100" r="80" fill="black" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">HEY</text>
  
  </svg>
  `
  );
});

test("Test a triangle", () => {
  expect(newTriangle.render()).toEqual(
    `
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  
    <polygon points="150, 18 244, 182 56, 182" fill="red" />
  
    <text x="150" y="160" font-size="60" text-anchor="middle" fill="blue">JCP</text>
  
  </svg>
  `
  );
});

test("Test a square", () => {
  expect(newSquare.render()).toEqual(
    `
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  
    <rect x="75" y="25" width="150" height="150" fill="gray" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="green">AWE</text>
  
  </svg>
  `
  );
});
