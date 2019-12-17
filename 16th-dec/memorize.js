function expensiveOperation() {
    console.log('expensiveOperation function is called!');
    return 22;
  }
  
const memoize = (fn) => {
    let cache = {};
    return () => {
        if (fn in cache) {
            return cache[fn];
        }
        else {
            let result = fn();
            cache[fn] = result;
            return result;
        }
    }
}
  const memoized = memoize(expensiveOperation); // <- memoize function
  console.log(memoized());
  console.log(memoized());