const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require("path")
// TODO: Create an array of questions for user input
const promptQuestions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please enter your project's title!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: "Please add a description of your project. (Required)",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("Please add a description of your project!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installinst',
        message: 'Please include instructions for installing your project.',

    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide information about the usage of your project.'

    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please include guidelines for those wanting to contribute to your project.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide information about testing of your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your product 9or press enter for none).',
        choices: [{
            name:'GNU AGPLv3',
            value:'GNU_APLv3'},
            {
            name: 'Boost SL 1.0',
            value: 'Boost_SL_1.0'},
            {
            name: 'Mozilla PL 2.0',
            value: 'Mozilla_PL_2.0'},
            {
            name: 'Apache 2.0',
            value: 'Apache_2.0'},
            {
            name: 'MIT',
            value: 'MIT'},
            {
            name: 'The Unlicense',
            value: 'The_Unlicense'},
            {
            name: 'None',
            value: "None"} 
             ]
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter yout GitHub username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your e-mail address.'
    }
]);
};
function writeToFile(fileName, data) {
    console.log(data)
     fs.writeFileSync(path.join(process.cwd(), fileName), data,(err) => {
         if (err) throw err;

     });
}

function init() {
    promptQuestions().then(inquirerResponses =>{
        console.log('Generating README...');
        writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
    })
}

 init();
