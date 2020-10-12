//create constants for test/expect & add requi
const { test, expect } = require ("jest"); 
const Employee = require("../lib/employeeClass");

test('creates an employee object', () => {
  const employee = new Employee('name', 'id', 'email');

  expect(employee.getName()).toBe('name');
  expect(employee.getId()).toBe('id');
  expect(employee.getEmail()).toBe('email')
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});