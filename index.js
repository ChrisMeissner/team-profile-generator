const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateTemplate = require('./src/page-template');

const Employee = require ("./lib/employeeClass");
const Engineer = require ("./lib/engineerClass");
const Intern = require ("./lib/internClass");
const Manager = require ("./lib/managerClass");

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
    },
    {
      type: 'list'
      name: 'employeeAdd'
      message: "What would you like to do next?"
      choices: ['Add Engineer', 'Add Intern', 'Finish Profile']
      Validate: employeeAddInput => {
        if (employeeAddInput) {
          return
        }
      }

    }