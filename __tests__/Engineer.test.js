const { test, expect } = require ("@jest/globals");
const Engineer = require('../lib/engineerClass');

test('creates an engineer object', () => {
  const engineer = new Engineer('name');

  expect(engineer.name).toBe('name');
  expect(engineer.id).toBe('id');
  expect(engineer.email).toBe('email');
  expect(engineer.github).toBe('github');
  expect(engineer.getName()).toEqual(expect.any(String));
  expect(engineer.getId()).toEqual(expect.any(Number));
  expect(engineer.getEmail()).toEqual(expect.any(String));
});