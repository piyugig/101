class Cycled {

  constructor(cyclicNumber) {
    this.cyclicNumber = cyclicNumber;
    this.state = 0;
  }

  current() {
    return this[Symbol.iterator]().current().value;
  }

  next() {
    return this[Symbol.iterator]().next().value;
  }

  [Symbol.iterator]() {
    let state = 0;
    let currentInput = this.cyclicNumber;
    const iterator = {
      next() {
        state = state % currentInput.length;
        return {
          value: currentInput[state++],
          done: false
        }
      },
      current() {
        console.log(state);
        return {
          value: currentInput[state],
          done: false
        }
      }
    }
    return iterator;
  }
}

const cycle = new Cycled([1, 2, 3]);
console.log(cycle.next());
console.log(cycle.next());
console.log(cycle.next());
console.log(cycle.next());
console.log(cycle.next());
console.log(cycle.next());
console.log(cycle.current());