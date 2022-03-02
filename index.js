// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const mkdn = require('./utils/generateMarkdown.js');


// Array of questions for user input
const questions = ['What is the title of your application?', 'What is a description of your application?', 'What command should be run to install all necessary dependencies?', 'What command should be run to test the application?', 'How to contribute? "To contibute please..."', 'What does the user need to know to use the appplication/repo?', 'What is your email?', 'What is your GitHub username?'];

// Function to write README file to output folder - log to ensure we see success or error
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data , (err) =>
    err ? console.error(err) : console.log('Success!'))
}

// Function to initialize app & prompt user
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
        default: 'npm i',
      },
      {
        type: 'input',
        message: `${questions[3]}`,
        name: 'test',
        default: 'npm test',
      },
      {
        type: 'input',
        message: `${questions[4]}`,
        name: 'contrib',
        default: 'contact me at the email below.'
      },
      {
        type: 'input',
        message: `${questions[5]}`,
        name: 'usage',
        default: 'npm start',
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
      {
        type: 'list',
        message: 'Which License would you like to apply?',
        name: 'license',
        choices: ['Apache', 'Academic', 'GNU', 'ISC', 'MIT', 'Mozilla', 'Open'],
      }
    ])
    // promise to send response into and back from other js file
    .then(function (response) {
        let retMarkDown = mkdn.generateMarkdown(response);
        writeToFile('./outputs/README.md', retMarkDown);
    })
}

// Function call to initialize app
init();
