const Employee = require('../index.js');

test('creates an employee object', () => {
  const employee = new Employee('name');

  expect(employee.name).toBe('name');
  expect(employee.id).toBe('id');
  expect(employee.email).toBe('email');
});