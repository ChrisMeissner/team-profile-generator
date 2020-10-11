const Employee = require ("./employeeClass")

class Manager extends Employee {
  constructor(officeNumber) {
    this.officeNumber = officeNumber;
  }

  getRole() {
    console.log('Manager');
  }
};

module.exports = Manager;