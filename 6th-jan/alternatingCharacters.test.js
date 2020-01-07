const alternatingCharacters = require('./alternatingCharacters');

test('Return Minimum number of deletions to make the alternating string', () => {
    expect(alternatingCharacters(['AAAA', 'BBBBB', 'ABABABAB', 'BABABA', 'AAABBB'])).toEqual([3, 4, 0, 0, 4]);
    expect(alternatingCharacters(['ABBABBAA'])).toEqual([3]);
});