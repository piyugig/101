function arrayAddition(firstInput) {
    sanatize(firstInput);
    return function(secondInput) {
        sanatize(secondInput);
        if (firstInput.length > secondInput.length) {
            let temp = firstInput;
            firstInput = secondInput;
            secondInput = temp;
        }
        firstInput.map((x, index) => {
            secondInput[index] += x;
            return x;
        });
        return secondInput;
    }
}

function sanatize(integerArray) {
    if (integerArray.length <= 0 || !Array.isArray(integerArray)) {
        throw Error();
    }
    integerArray.map((integerValue) => {
        if(Number.isInteger(integerValue)) {
            return integerValue;
        } else {
            throw Error();
        }
    });
}

module.exports = arrayAddition;