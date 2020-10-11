const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("../team-profile-generator/src/generateMarkdown");

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your name.');
        return false;
      }
    }
  },
  {
    type: 'input',          
    name: 'id',
    message: 'What is your ID?',
    validate: idInput => {
      if (idInput) {
        return true;
      } else {
        console.log('Please enter your ID!');
        return false;
      }
    }
  },
  {
    type: 'input',          
    name: 'email',
    message: 'What is your email?',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter your email!');
        return false;
      }
    }
  },
  {
    type: 'list',          
    name: 'role',
    message: 'What is the name of your role?',
    choices:['Manager', 'Engineer', 'Intern']
  }
];


function writeToFile(fileName, data) {
  return fs.writeFile(path.join(process.cwd(), fileName), data, function(err){
    if (err) throw err
    console.log("finished")
  })
}


function init() {
  inquirer.prompt(questions).then(data => {
    console.log("generating team profile");
    writeToFile("index.html", generateMarkdown(data));
  }) 
} 

init();

