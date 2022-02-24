// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const mkdn = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = ['What is the title of your application?', 'What is a description of your application?', 'What are the installation instructions?', 'What are the usage directions?', 'Who contributed to this application?', 'What testing information would you like to list?', 'What is your contact information for questions regarding this application?'];

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
        name: 'usage',
      },
      {
        type: 'input',
        message: `${questions[4]}`,
        name: 'contrib',
      },
      {
        type: 'input',
        message: `${questions[5]}`,
        name: 'testing',
      },
      {
        type: 'input',
        message: `${questions[6]}`,
        name: 'contact',
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
