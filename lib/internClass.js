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