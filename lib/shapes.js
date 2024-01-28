class Shape {
  constructor(shapeName, shapeColor, textContent, textColor) {
    
    this.shapeName = shapeName;
    this.shapeColor = shapeColor;
    this.textContent = textContent;
    this.textColor = textColor;
    this.textYPosition = 125;
  }

  render() {
  
  return `
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  
    ${this.shapeHtml} fill="${this.shapeColor}" />
  
    <text x="150" y="${this.textYPosition}" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>
  
  </svg>
  `
  }
}

class Circle extends Shape {
  constructor(shapeName, shapeColor, textContent, textColor) {
    super("circle", shapeColor, textContent, textColor);
    this.shapeHtml = '<circle cx="150" cy="100" r="80"'
  }
}

class Triangle extends Shape {
  constructor(shapeName, shapeColor, textContent, textColor) {
    super("triangle", shapeColor, textContent, textColor);
    this.shapeHtml = '<polygon points="150, 18 244, 182 56, 182"'
    this.textYPosition = 160;
  }
}

class Square extends Shape {
  constructor(shapeName, shapeColor, textContent, textColor) {
    super("square", shapeColor, textContent, textColor);
    this.shapeHtml = '<rect x="75" y="25" width="150" height="150"'
  }
}

module.exports = {Circle, Triangle, Square};