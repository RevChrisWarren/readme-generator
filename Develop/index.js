// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
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
        type: 'checkbox',
        name: 'license',
        message: 'Please select a license for your product 9or press enter for none).',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla PL 2.0', 'Apache 2.0', 'MIT', 'Boost SL 1.0', 'The Unlicense']
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
