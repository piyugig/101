const sumFibs = require('./sumFibs');

test('Sum odd fibs', () => {
  expect(sumFibs(10)).toBe(10);
});