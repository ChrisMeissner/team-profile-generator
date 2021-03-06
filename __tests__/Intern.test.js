const { test, expect } = require("@jest/globals");
const Intern = require("../lib/internClass");

test('creates an intern object', () => {
  const intern = new Intern('name', 1, 'email', 'school');
  
  expect(intern.getName()).toBe('name');
  expect(intern.getId()).toBe(1);
  expect(intern.getEmail()).toBe('email');
  expect(intern.getSchool()).toBe('school');
  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});