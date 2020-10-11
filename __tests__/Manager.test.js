const Manager = require('../index.js');

test('creates a manager object', () => {
  const manager = new Manager('name');

  expect(manager.name).toBe('name');
  expect(manager.id).toBe('id');
  expect(manager.email).toBe('email');
  expect(manager.officeNumber).toBe('officeNumber');
});