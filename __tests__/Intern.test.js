const { test, expect } = require ("@jest/globals");
const Intern = require("../lib/internClass");

test('creates an intern object', () => {
  const intern = new Intern('name', 'id', 'email', 'school');
  
  expect(intern.name).toBe('name');
  expect(intern.id).toBe('id');
  expect(intern.email).toBe('email');
  expect(intern.school).toBe('school');
  expect(intern.getName()).toEqual(expect.any(String));
  expect(intern.getId()).toEqual(expect.any(Number));
  expect(intern.getEmail()).toEqual(expect.any(String));
  expect(intern.getSchool()).toEqual(expect.any(String));
});