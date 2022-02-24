// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const mkdn = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = ['What is the title of your application?', 'What is a description of your application?', 'What command should be run to install all necessary dependencies?', 'What command should be run to test the application?', 'How to contribute? "To contibute please..."', 'What does the user need to know to use the appplication/repo?', 'What is your email?', 'What is your GitHub username?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data , (err) =>
    err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
      {
        type: 'input',
        message: `${questions[0]}`,
        name: 'title',
      },
      {
        type: 'input',
        message: `${questions[1]}`,
        name: 'description',
      },
      {
        type: 'input',
        message: `${questions[2]}`,
        name: 'install',
      },
      {
        type: 'input',
        message: `${questions[3]}`,
        name: 'test',
      },
      {
        type: 'input',
        message: `${questions[4]}`,
        name: 'contrib',
      },
      {
        type: 'input',
        message: `${questions[5]}`,
        name: 'usage',
      },
      {
        type: 'input',
        message: `${questions[6]}`,
        name: 'email',
      },
      {
        type: 'input',
        message: `${questions[7]}`,
        name: 'github',
      },
    ])
    .then(function (response) {
        console.log(response);
        const userInput = response;
        let retMarkDown = mkdn.generateMarkdown(userInput);
        writeToFile('README.md', retMarkDown);
    })
}

// Function call to initialize app
init();
