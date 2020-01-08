//Not applicable for negative integers
function minima(firstK, input) {
  result = [];
  input.map(value => {
    setTimeout(() => {
      result.push(value);
    }, value);
  });
  process.nextTick(() => {
    console.log(result);
  });
}

module.exports = minima;
//TODO using exact tick
// process.nextTick(() => {
//   console.log(process.hrtime());
// });

minima(2, [5, 3, 4, 6, 10, 1]);
