const { test, expect } = require ("@jest/globals");
const Manager = require ("../lib/managerClass");

test('creates a manager object', () => {
  const manager = new Manager('name', 'id', 'email', 'officeNumber');

  expect(manager.name).toBe('name');
  expect(manager.id).toBe('id');
  expect(manager.email).toBe('email');
  expect(manager.officeNumber).toBe('officeNumber');
  expect(manager.getName()).toEqual(expect.any(String));
  expect(manager.getId()).toEqual(expect.any(Number));
  expect(manager.getEmail()).toEqual(expect.any(String));
  expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});