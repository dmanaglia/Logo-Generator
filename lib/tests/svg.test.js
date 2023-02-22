const SVG = require("../svg");
const { Square, Triangle, Circle } = require("../shapes");

describe("Circle", () => {
  test("should include a circle shape", () => {
    const expectedSvg =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="dodgerblue"/><text x="150" y="118" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>';
    const svg = new SVG();
    svg.setText("SVG", "#333");
    const circle = new Circle();
    circle.setColor("dodgerblue");
    svg.setShape(circle);
    expect(svg.render()).toEqual(expectedSvg);
  });
});

describe("Triangle", () => {
  test("should include a Triangle shape", () => {
    const expectedSvg =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="dodgerblue"/><text x="150" y="140" font-size="50" text-anchor="middle" fill="#333">SVG</text></svg>';
    const svg = new SVG();
    svg.setText("SVG", "#333");
    const triangle = new Triangle();
    triangle.setColor("dodgerblue");
    svg.setShape(triangle);
    expect(svg.render()).toEqual(expectedSvg);
  });
});

describe("Square", () => {
  test("should include a square shape", () => {
    const expectedSvg =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="dodgerblue"/><text x="150" y="118" font-size="50" text-anchor="middle" fill="#333">SVG</text></svg>';
    const svg = new SVG();
    svg.setText("SVG", "#333");
    const square = new Square();
    square.setColor("dodgerblue");
    svg.setShape(square);
    expect(svg.render()).toEqual(expectedSvg);
  });
});