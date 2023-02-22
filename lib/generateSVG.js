const SVG = require('./svg')
const { Triangle, Square, Circle } = require('./shapes');

function generateSVG(data){
    const svg = new SVG();
    svg.setText(data.logoTxt, data.txtColor);
    let shape;
    switch(data.shape){
        case 'Triangle':
            shape = new Triangle();
            break;
        case 'Square':
            shape = new Square();
            break;
        case 'Circle':
            shape = new Circle();
            break;
    }
    shape.setColor(data.shapeColor);
    svg.setShape(shape);
    return svg.render();
}

module.exports = generateSVG;