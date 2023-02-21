const inquire = require('inquirer');
const fs = require('fs');
const generateSVG = require('./lib/generateSVG');
const questions = require('./lib/questionList');

function writeToFile(data) {
    fs.writeFile('logo.svg', generateSVG(data), err => err ? console.error(err) : console.log('Generated logo.svg'))
}

function init() {
    inquire.prompt(questions).then((response) => writeToFile(response))
}

init();
