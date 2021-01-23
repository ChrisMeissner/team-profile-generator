const { test, expect } = require ("@jest/globals");
const Manager = require ("../lib/managerClass");

test('creates a manager object', () => {
  const manager = new Manager('name', 1, 'email', 111);

  expect(manager.getName()).toBe('name');
  expect(manager.getId()).toBe(1);
  expect(manager.getEmail()).toBe('email');
  expect(manager.getOfficeNumber()).toBe(111);
  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(Number));
});