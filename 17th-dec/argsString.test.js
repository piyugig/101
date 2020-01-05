const argsString = require('./argsString');

describe('argsString', () => {
    it('should return replacing {} with input array index', () => {
      expect(argsString('{} {}', ['Hello', 'World!'])).toEqual('Hello World!');
    });
});

describe('argsString', () => {
    it('should return replacing {} with input array index', () => {
      expect(argsString('How are you?', ['Hey', 'what'])).toEqual('How are you?');
    });
});