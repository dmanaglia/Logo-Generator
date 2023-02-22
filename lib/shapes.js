const isColor = require('is-color');

class Triangle{
    setColor(color){
        if(!isColor(color.toLowerCase())){
            throw new Error('You must enter a valid color.')
        }
        this.color = color;
    }
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

class Square{
    setColor(color){
        if(!isColor(color.toLowerCase())){
            throw new Error('You must enter a valid color.')
        }
        this.color = color;
    }

    render(){
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`
    }
}

class Circle{
    setColor(color){
        if(!isColor(color.toLowerCase())){
            throw new Error('You must enter a valid color.')
        }
        this.color = color;
    }

    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

module.exports = {
    Triangle, 
    Square,
    Circle
}