const convertIntToRoman = require('./convertIntToRoman');

test('convert 10 to roman should give X', () => {
  expect(convertIntToRoman(10)).toBe('X');
});