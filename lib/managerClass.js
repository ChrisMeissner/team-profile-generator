const Employee = require ("./employeeClass")

class Manager extends Employee {
  constructor(name, email, id officeNumber) {
    this.officeNumber = officeNumber;
  }

  getRole() {
    return 'Manager';
  }
};

module.exports = Manager;