function simpleIterable() {
  return {
    [Symbol.iterator]() {
      let returnValue = 1;
      const iterator = {
        next() {
          while(returnValue<=5) {
            return {
              value: returnValue++,
              done: false
            };  
          }
          return {
            value: undefined,
            done: true
          };
        }
      };
      return iterator;
    }
  }
}

module.exports = simpleIterable;