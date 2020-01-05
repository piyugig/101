function sumFibs(num) {
    var sum = fib0 = 0;
    var fib1 = fib = 1;
    while (fib <= num) {
        if (fib % 2) {
            sum += fib1;
        }
        fib = fib0 + fib1;
        fib1 += fib0;
        fib0 = fib1 - fib0;
    }

    return sum;
}

module.exports = sumFibs;
