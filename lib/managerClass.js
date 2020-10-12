const Employee = require ("./employeeClass")

class Manager extends Employee {
  constructor(name, email, id, officeNumber) {
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return 'Manager';
  }
};

module.exports = Manager;