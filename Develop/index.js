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
        message: 'How can the user install the repository on their local machine?',
        name: 'install'

    },
    {
        type: 'input',
        message: 'What does the user need to know about using the application?',
        name: 'usage'

    },
    
    {
        type: 'input',
        message: 'Please write a short description of your project?',
        name:'Description'
    },

    {
        type: 'list',
        name: 'License',
        message: 'What kind of license should your project have?',
        choices: ["MIT","Apche License 2.0", "GNU General Public License v3.0"],
    },

    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'Dependancies'
    },

    {
        type: 'input',
        message: 'What command should be used to run the tests for the application?',
        name: 'Tests'
    },

    {
        type: 'input',
        message: 'What does the user need to know about using the repository?',
        name: 'repository'
    },

    {
        type: 'input',
        message: 'What does the user make contributions to the project?',
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
