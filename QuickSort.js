function quickSort(A, p, r) {
  if (p < r) {
    q = partition(A, p, r);
    quickSort(A, p, q - 1);
    quickSort(A, q + 1, r);
  }
  return A;
}

function partition(A, p, r) {
  let x = A[r];
  let i = p - 1;
  for (let j = p; j < r; j++) {
    if (A[j] <= x) {
      i = i + 1;
      let tmp = A[i];
      A[i] = A[j];
      A[j] = tmp;
    }
  }
  let tmp = A[i + 1];
  A[i + 1] = A[r];
  A[r] = tmp;
  return i + 1;
}

module.exports = {
  quickSort,
};
