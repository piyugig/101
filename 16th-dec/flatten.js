function flatten(arr) {
    arr = arr.reduce((acc, val) => acc.concat(val), []);
    return arr;
}

console.log(flatten([1, 2, [3, 4, [5, 6]]]));