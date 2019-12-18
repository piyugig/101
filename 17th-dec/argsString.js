function argsString(inputString, replaceWithArray) {
    return inputString.replace(/{}/g, () => {
        replaceWith = replaceWithArray[0];
        replaceWithArray.shift();
        return replaceWith;
    });
}

module.exports = argsString;