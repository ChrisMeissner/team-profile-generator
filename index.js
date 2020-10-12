const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateTemplate = require('./src/page-template');

const Employee = require ("./lib/employeeClass");
const Engineer = require ("./lib/engineerClass");
const Intern = require ("./lib/internClass");
const Manager = require ("./lib/managerClass");

const allTeam = [];
const allIds = [];

const profileTeam = () => {
  inquirer.promptManager([
    {
      type: 'input',
      name: 'manName',
      message: "Hello Manager! Please enter your name?",
      validate: manNameInput => {
        if (manNameInput) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'manIdNumber',
      message: "What is your employee ID number?",
      validate: manIdNumberInput => {
        if (manIdNumberInput) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'manEmail',
      message: "What is your email address?",
      validate: manEmailInput => {
        if (manEmailInput) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'manOfficeNumber',
      message: "What is your office number?",
      validate: manOfficeNumberInput => {
        if (manOfficeNumberInput) {
          return true;
        } else {
          return false;
        }
      }
    }
  ])

  .then(data => {
    const manager = new Manager(data.manName, data.manIdNumber, data.manEmail, data.manOfficeNumber)
    allTeam.push(manager)
    allIds.push(data.id)
    profileTeam();
  })


    {
      type: 'list',
      name: 'employeeAdd',
      message: "What would you like to do next?",
      choices: ['Add Engineer', 'Add Intern', 'Finish Profile']
      validate: employeeAddInput => {
        if (employeeAddInput) {
          return true;
        } else {
          return false;
        }
      }
    },
  ])
  
  .then((answers) => {
    console.log(answers)
    if(answers.choice === 'Add Engineer') {
      promptEngineer();
    } else if(answers.choice === 'Add Intern') {
      promptIntern();
    } else if(answers.choice === 'Finish Profile') {
      writePage();
      console.log("Go to 'team.html' to see your updated team profile.");
    }
  });
};

const promptEngineer = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'enName',
      message: "What is the engineer's name? (required)"
      validate: enNameInput => {
        if(enNameInput) {
          return true;
        } else {
          console.log("You must enter a name for this engineer.");
          return false;
        }
      }
    },
    {
      type: 'number',
      name: 'enIdNumber',
      message: "What is this engineer's ID number? (required)"
      validate: enIdInput => {
        if(enIdInput) {
          return true;
        } else {
          console.log("You must enter an ID number for this engineer.")
        }
      }

    },
    {
      type: 'input',
      name: 'enEmail'
      message: "Please enter the engineer's email address. (required)
      validate: enEmailInput => {
        if (enEmailInput) {
          return true;
        } else {
          console.log("You must enter an email for this Engineer.")
        }
      }
    },
    {
      type: 'input',
      name: 'enGithub',
      message: "Please enter the engineer's Github username."
      validate: enGithubInput => {
        if(enGithubInput) {
          return true;
        } else {
          console.log("You must enter a Github username for this engineer.")
        }
      }
    }
  ])
  .then(data => {
    const engineer = new Engineer(data.enName, data.enIdNumber, data.enEmail, data.enGithub)
  })

  console.log('')
}