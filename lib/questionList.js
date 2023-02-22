const isColor = require('is-color');

const questions = [
    {
        type: "text",
        message: "Enter text for your logo. (Must not be more than 3 characters.)",
        name: 'logoTxt',
        validate: function(input){
            if(input.length > 3){
                return 'Text cannot exceed 3 characters';
            } else if(!input) {
                return 'Text needs at least one character';
            } else {
                return true;
            }
        }
    },
    {
        type: "text",
        message: "Enter a text color",
        name: 'txtColor',
        validate: function(input){
            if(!isColor(input.toLowerCase())){
                return 'Enter a valid color';
            } else {
                return true;
            }
        }
    },
    {
        type: "list",
        message: "Select a shape for the logo",
        name: 'shape',
        choices: ['Triangle', 'Square', 'Circle']
    },
    {
        type: "text",
        message: "Enter a shape color",
        name: 'shapeColor',
        validate: function(input){
            if(!isColor(input.toLowerCase())){
                return 'Enter a valid color';
            } else {
                return true;
            }
        }
    },
];

module.exports = questions;