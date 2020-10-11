class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    console.log(this.name);
  }

  getId() {
    console.log('ID: ' + this.id);
  }

  getEmail() {
    console.log('Email: ' + this.email);
  }
};

class Manager extends Employee {
  constructor(officeNumber) {
    this.officeNumber = officeNumber;
  }

  getRole(Mangager) {
    console.log('Manager');
  }
};

class Engineer extends Employee {
  constructor(github) {
    this.github = github;
  }

  getGithub() {
    console.log('Github: ' + this.github);
  }

  getRole(Engineer) {
  console.log('Engineer');
  }
};

class Intern extends Employee {
  constructor(school) {
    this.school = school;
  }
    
  getSchool() {
    console.log('School: ' + this.school);
  }

  getRole(Intern) {
    console.log('Intern');
  }
};

module.exports = function() {};