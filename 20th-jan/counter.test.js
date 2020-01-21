const counter = require('./counter');

describe('counter', () => {
  it('Counter', () => {
    const newCounter = counter();
    expect(newCounter()).toBe(1);
    expect(newCounter()).toBe(2);
    expect(newCounter()).toBe(3);
  });
});
