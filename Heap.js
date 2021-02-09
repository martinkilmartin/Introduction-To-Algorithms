function parent(i) {
  return i >> 1;
}

function leftChild(i) {
  return i << 1;
}

function rightChild(i) {
  return (i << 1) + 1;
}

function maxHeapify(A, i) {
  const HEAP_SIZE = A.length;
  let l = leftChild(i);
  let r = rightChild(i);
  let largest;
  if (l <= HEAP_SIZE && A[l] > A[i]) {
    largest = l;
  } else {
    largest = i;
  }
  if (r <= HEAP_SIZE && A[r] > A[largest]) {
    largest = r;
  }
  if (largest !== i) {
    let tmp = A[i];
    A[i] = A[largest];
    A[largest] = tmp;
    maxHeapify(A, largest);
  }
  return A;
}

function buildMaxHeap(A) {
  const HALF_HEAP_SIZE = A.length >> 1;
  for (let i = HALF_HEAP_SIZE; i >= 0; i--) {
    A = maxHeapify(A, i);
  }
  return A;
}

module.exports = {
  parent,
  leftChild,
  rightChild,
  maxHeapify,
  buildMaxHeap,
};
