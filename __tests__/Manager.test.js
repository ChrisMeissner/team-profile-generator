const { test, expect } = require ("@jest/globals");
const Manager = require ("../lib/managerClass");

test('creates a manager object', () => {
  const manager = new Manager('name', 'id', 'email', 'officeNumber');

  expect(manager.name).toEqual('name');
  expect(manager.id).toEqual('id');
  expect(manager.email).toEqual('email');
  expect(manager.officeNumber).toEqual('officeNumber');
  expect(manager.getName()).toBe(expect.any(String));
  expect(manager.getId()).toBe(expect.any(Number));
  expect(manager.getEmail()).toBe(expect.any(String));
  expect(manager.getOfficeNumber()).toBe(expect.any(Number));
});