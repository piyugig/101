function flatten(arr) {
    arr = arr.reduce((acc, val) => acc.concat(val), []);
    return arr;
}

module.exports = flatten;