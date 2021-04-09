// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// create writeFile function using promises instead of a callback function

const generateMarkdown = require("./generateMarkdown.js");
const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
  promptUser()
    // .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
    .then((answers) => writeFileAsync("README.md", generateMarkdown(answers)))
    .then(() => console.log("Successfully wrote to index.html"))
    .catch((err) => console.error(err));
};

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project title?",
    },
    {
      type: "input",
      name: "Table of Contents",
      message: "enter your table of contents",
    },
    {
      type: "input",
      name: "Description",
      message: "What is the project description?",
    },
    {
      type: "input",
      name: "Installation",
      message: "how is the installation done?",
    },
    {
      type: "input",
      name: "Usage",
      message: "What will this be used for?",
    },
    {
      type: "input",
      name: "contribution",
      message: "Who contributed to this project?",
    },
    {
      type: "input",
      name: "test",
      message: "How to run your test?",
    },
    {
      type: "input",
      name: "license",
      message: "Which license the application is cover under?",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email",
    },
  ]);
};
init();
