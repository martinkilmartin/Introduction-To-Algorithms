function insertionSortAsc(originalArray) {
  if (originalArray.length < 2) return originalArray;
  const array = [...originalArray];
  const arrLen = array.length;
  for (let i = 1; i < arrLen; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = key;
  }
  return array;
}

function insertionSortDesc(originalArray) {
  if (originalArray.length < 2) return originalArray;
  const array = [...originalArray];
  const arrLen = array.length;
  for (let i = arrLen - 2; i >= 0; i--) {
    let key = array[i];
    let j = i;
    while (j < arrLen && array[j + 1] > key) {
      array[j] = array[j + 1];
      j = j + 1;
    }
    array[j] = key;
  }
  return array;
}

module.exports = {
  insertionSortAsc,
  insertionSortDesc,
};
