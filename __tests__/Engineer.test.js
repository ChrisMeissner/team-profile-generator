const { test, expect } = require ("@jest/globals");
const Engineer = require("../lib/engineerClass");

test('creates an engineer object', () => {
  const engineer = new Engineer('name', 1, 'email', 'github');

  expect(engineer.getName()).toBe('name');
  expect(engineer.getId()).toBe(1);
  expect(engineer.getEmail()).toBe('email');
  expect(engineer.getGithub()).toBe('github');
  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
});