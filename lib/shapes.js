class Shape {
  constructor(textContent, textColor, shapeName, shapeColor) {
    this.textContent = textContent;
    this.textColor = textColor;
    this.shapeName = shapeName;
    this.shapeColor = shapeColor;
    this.textYPosition = 125;
  }

  render() {
    return console.log(this.shapeName);
  }
}

class Circle extends Shape {
  constructor(textContent, textColor, shapeName, shapeColor) {
    super(textContent, textColor, shapeName, shapeColor);
    this.shapeHtml = '<circle cx="150" cy="100" r="80"'
  }
}

class Triangle extends Shape {
  constructor(textContent, textColor, shapeName, shapeColor) {
    super(textContent, textColor, shapeName, shapeColor);
    this.shapeHtml = '<polygon points="150, 18 244, 182 56, 182"'
    this.textYPosition = 160;
  }
}

class Square extends Shape {
  constructor(textContent, textColor, shapeName, shapeColor) {
    super(textContent, textColor, shapeName, shapeColor);
    this.shapeHtml = '<rect x="75" y="25" width="150" height="150"'
  }
}

function renderShape(response) {
  const newShape = new Circle(response.textContent, response.textColor, response.shapeName, response.shapeColor);

return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${newShape.shapeHtml} fill="${newShape.shapeColor}" />

  <text x="150" y="${newShape.textYPosition}" font-size="60" text-anchor="middle" fill="${newShape.textColor}">${newShape.textContent}</text>

</svg>
`
}

module.exports = renderShape;