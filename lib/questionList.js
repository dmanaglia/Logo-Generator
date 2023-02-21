const questions = [
    {
        type: "text",
        message: "Enter text for your logo. (Must not be more than 3 characters.)",
        name: 'logoTxt'
    },
    {
        type: "text",
        message: "Enter a text color",
        name: 'txtColor'
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
        name: 'shapeColor'
    },
];

module.exports = questions;