const flatten = require('./flatten');

test('Flatten array depth 1', () => {
  expect(flatten([1, 2, [3, 4, [5, 6]]])).toStrictEqual([1, 2, 3, 4, [5, 6]]);
});