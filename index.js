// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Readme contect that will display on README.md 
const generateReadme = (answers) =>

`# ${answers.title}💎
![GitHub license](https://img.shields.io/badge/license-${answers.license}-yellow.svg) 

## Description${answers.description}

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation 🖥️
*Steps required to install project and get the development environment established:*
${answers.installation}

## Usage
*Instructions and examples for use:* 
[Click Here](${answers.usage}), for the instruction's video on how to use this application.


## License
Built under the ${answers.license} licence. 

## Contributing
${answers.contributing}

## Tests
${answers.test}

## Questions
If you have any questions or want to make a contribution please reach out to me here: 

* [GitHub:](https://github.com/${answers.github}/).  
* Email: ${answers.email}.`
;

// Create an array of questions for user input
inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a description of your application/project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'If applicable, please provide the steps required to install your application.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide the contribution guidelines for the future contribuitor?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use. Include screenshots or video as needed',
        name: 'usage',
    },
    {
        type: "input",
        message: "How did you test this application?",
        name: "test",
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
    {
        type: 'list',
        message: 'Choose a license for your application/project.',
        choices: ['GPL','LGPL','ISC','MIT','POSTGRESQL','NCSA','UNLICENSE','ZLIB'],
        name: 'license'
    },
])


.then((answer) => {
    const readmeContect = generateReadme(answer);

    fs.writeFile('README.md', readmeContect, (err) =>
    err ? console.log(err) : console.log('You successfully created README.md!')
    );
  });



// // TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();
