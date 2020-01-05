function without(valuesToRemove, removeFrom) {
    return removeFrom.filter(function(number) {
        return valuesToRemove.indexOf(number) < 0;
    });
}

module.exports = without;