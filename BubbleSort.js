function bubbleSortAsc(originalArray) {
  if (originalArray.length < 2) return originalArray;
  const array = [...originalArray];
  return bubbleSortA(array);
}

function bubbleSortA(A) {
  const length = A.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = length; j >= i + 1; j--) {
      if (A[j] < A[j - 1]) {
        let tmp = A[j];
        A[j] = A[j - 1];
        A[j - 1] = tmp;
      }
    }
  }
  return A;
}

function bubbleSortDesc(originalArray) {
  if (originalArray.length < 2) return originalArray;
  const array = [...originalArray];
  return bubbleSortD(array);
}

function bubbleSortD(A) {
  const length = A.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = length; j >= i + 1; j--) {
      if (A[j] > A[j - 1]) {
        let tmp = A[j];
        A[j] = A[j - 1];
        A[j - 1] = tmp;
      }
    }
  }
  return A;
}

module.exports = {
  bubbleSortAsc,
  bubbleSortDesc,
};
