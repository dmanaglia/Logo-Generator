const { Triangle, Square, Circle } = require('./shapes');

class SVG{
    setText(text, textColor){
        if(text.length > 3){
            throw new Error('Text must not exceed 3 characters.');
        }

        this.text = text;
        this.textColor = textColor;
    }

    setShape(shape){
        this.shape = shape;
    }

    render(){
        if(this.shape && this.text){
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape.render()}<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
        } else if(this.text){
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
        }else {
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`;
        }
    }
}

module.exports = SVG;