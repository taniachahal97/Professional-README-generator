// TODO: Include packages needed for this application
const fs = require('fs');

const inquirer = require('inquirer');

const markdown = require('./utils/markdown');

// TODO: Create an array of questions for user input
const questions = [];

inquirer.prompt([
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'GitHub'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'Email'

    },

    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title'
    },

    {
        type: 'input',
        message: 'Please write a short description of your project?',
        name:'Description'
    },

    {
        type: 'input',
        message: 'What kind of license should your project have?',
        name: 'License'
    },

    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'Dependancies'
    },

    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'Tests'
    },

    {
        type: 'input',
        message: 'What does the user need to know about using the repository?',
        name: 'repository'
    },

    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repository?',
        name: 'contribution'

    },
])
.then(function(result){
    console.log('Generating README.md.....');
    writeToFile('README.md', result);
    //fs.writeFile('userAnswers.text', JSON.stringify(result), (err) => err ? console.error(err) : console.log('success!')
    

});

// TODO: Create a function to write README file
function writeToFile(fileName, data){

    var readmeContent = markdown.generateMarkdown(data);
    var file = fileName

    //writing content to README file

    fs.writeFile(file, readmeContent, (err) => err ? console.error(err) : console.log('success!'))

}

// TODO: Create a function to initialize app
function init() {
    //console.log("Hello");
    
}

// Function call to initialize app
init();
