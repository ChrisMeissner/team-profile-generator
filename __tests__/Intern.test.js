const { test, expect } = require ("@jest/globals");
const Intern = require("../lib/internClass");

test('creates an intern object', () => {
  const intern = new Intern('name', 'id', 'email', 'school');
  
  expect(intern.name).toEqual('name');
  expect(intern.id).toEqual('id');
  expect(intern.email).toEqual('email');
  expect(intern.school).toEqual('school');
  expect(intern.getName()).toBe(expect.any(String));
  expect(intern.getId()).toBe(expect.any(Number));
  expect(intern.getEmail()).toBe(expect.any(String));
  expect(intern.getSchool()).toBe(expect.any(String));
});