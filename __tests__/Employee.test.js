const { test, expect } = require ("@jest/globals"); 
const Employee = require("../lib/employeeClass");

test('creates an employee object', () => {
  const employee = new Employee('name', 1, 'email');

  expect(employee.getName()).toBe('name');
  expect(employee.getId()).toBe(1);
  expect(employee.getEmail()).toBe('email')
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});