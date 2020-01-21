function counter() {
  let counter = 0;
  return () => {
    return ++counter;
  }
}

module.exports = counter;
