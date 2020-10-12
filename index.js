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

const output_dir = path.resolve(__dirname, "output");
const output_path = path.join(output_dir, 'teamprofile.html');

const promptManager = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'manName',
      message: "Hello Manager! Please enter your name? (required)",
      validate: manNameInput => {
        if (manNameInput) {
          return true;
        } else {
          console.log("You must enter your name.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'manIdNumber',
      message: "What is your Employee ID Number? (required)",
      validate: manIdNumberInput => {
        if (manIdNumberInput) {
          return true;
        } else {
          console.log("You must enter your Employee ID Number.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'manEmail',
      message: "What is your email address? (required)",
      validate: manEmailInput => {
        if (manEmailInput) {
          return true;
        } else {
          console.log("You must enter your email adress.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'manOfficeNumber',
      message: "What is your office number? (required)",
      validate: manOfficeNumberInput => {
        if (manOfficeNumberInput) {
          return true;
        } else {
          console.log("You must enter your office number.");
          return false;
        }
      }
    }
  ])
  
  .then(data => {
    const manager = new Manager(data.manName, data.manIdNumber, data.manEmail, data.manOfficeNumber);
    allTeam.push(manager);
    allIds.push(data.id);
    promptWhatNext();
  })
}

const promptWhatNext = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'employeeAdd',
      message: "What would you like to do next?",
      choices: ['Add Engineer', 'Add Intern', 'Finish Profile'],
      validate: employeeAddInput => {
        if(employeeAddInput == 'Add Engineer') {
          promptEngineer();
        } else if(employeeAddInput == 'Add Intern') {
          promptIntern();
        } else {
          writePage();
        }
      }
    }
  ])
};


const promptEngineer = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'enName',
      message: "What is the Engineer's name? (required)",
      validate: enNameInput => {
        if(enNameInput) {
          return true;
        } else {
          console.log("You must enter a name for this Engineer.");
          return false;
        }
      }
    },
    {
      type: 'number',
      name: 'enIdNumber',
      message: "What is this Engineer's ID number? (required)",
      validate: enIdInput => {
        if(enIdInput) {
          return true;
        } else {
          console.log("You must enter an ID number for this Engineer.");
        }
      }

    },
    {
      type: 'input',
      name: 'enEmail',
      message: "Please enter the Engineer's email address. (required)",
      validate: enEmailInput => {
        if (enEmailInput) {
          return true;
        } else {
          console.log("You must enter an email for this Engineer.");
        }
      }
    },
    {
      type: 'input',
      name: 'enGithub',
      message: "Please enter the Engineer's Github username.",
      validate: enGithubInput => {
        if(enGithubInput) {
          return true;
        } else {
          console.log("You must enter a Github username for this Engineer.");
        }
      }
    }
  ])

  .then(data => {
    const engineer = new Engineer(data.enName, data.enIdNumber, data.enEmail, data.enGithub);
    allTeam.push(engineer);
    allIds.push(data.enIdNumber);
    promptWhatNext();
  })
};

const promptIntern = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'inName',
      message: "What is the Intern's name? (required)",
      validate: inNameInput => {
        if(inNameInput) {
          return true;
        } else {
          console.log("You must enter a name for this Intern.");
          return false;
        }
      }
    },
    {
      type: 'number',
      name: 'inIdNumber',
      message: "What is this Intern's ID number? (required)",
      validate: inIdInput => {
        if(inIdInput) {
          return true;
        } else {
          console.log("You must enter an ID number for this Intern.");
        }
      }

    },
    {
      type: 'input',
      name: 'inEmail',
      message: "Please enter the Interns's email address. (required)",
      validate: inEmailInput => {
        if (inEmailInput) {
          return true;
        } else {
          console.log("You must enter an email for this Intern.");
        }
      }
    },
    {
      type: 'input',
      name: 'inSchool',
      message: "Please enter the Intern's school name.",
      validate: inSchoolInput => {
        if(inSchoolInput) {
          return true;
        } else {
          console.log("You must enter a school name for the Intern.");
        }
      }
    }
  ])

  .then(data => {
    const intern = new Intern(data.inName, data.inIdNumber, data.inEmail, data.inSchoolInput);
    allTeam.push(intern);
    allIds.push(data.inIdNumber);
    promptWhatNext();
  })
};

function writePage() {
  if(!fs.existsSync(output_dir)) {fs.mkdir(output_dir)}
  fs.writeFileSync(output_path, generateTemplate(allTeam), 'UTF-8')
}

function init() {
  promptManager();
}

init();