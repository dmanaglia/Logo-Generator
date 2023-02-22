const isColor = require('is-color');
const { Triangle, Square } = require('./shapes');

class SVG{
    setText(text, textColor){
        if(text.length > 3){
            throw new Error('Text must not exceed 3 characters.');
        }
        if(!isColor(textColor.toLowerCase())){
            throw new Error('You must enter a valid color.')
        }
        this.text = text;
        this.textColor = textColor;
    }

    setShape(shape){
        this.shape = shape;
    }

    render(){
        if(this.shape instanceof Triangle){
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape.render()}<text x="150" y="140" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
        } else if(this.shape instanceof Square){
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape.render()}<text x="150" y="125" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
        } else{
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape.render()}<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
        }
    }
}

module.exports = SVG;