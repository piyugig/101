const without = require('./without');

test('Returns a new list without values in the first argument', () => {
  expect(without([1, 2], [1, 2, 1, 4, 5])).toStrictEqual([4, 5]);
});