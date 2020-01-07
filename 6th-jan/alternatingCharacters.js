function alternatingCharacters(ArrayOfStrings) {
  return ArrayOfStrings.map(string => {
    return alternatingCharacter(string);
  });
}

function alternatingCharacter(string) {
  noOfDelete = 0;
  return [...string].reduce(
    (totalNoOfDelete, currentValue, currentIndex, array) => {
      if (currentValue === array[currentIndex + 1]) {
        totalNoOfDelete++;
      }
      return totalNoOfDelete;
    },
    noOfDelete
  );
}

module.exports = alternatingCharacters;
