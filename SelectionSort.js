// O(n) time | 0(1) space
function findIndexOfSmallest(A) {
    const ARRAY_SIZE = A.length;
    let smallestIndex = 0;
    for (let i = 0; i < ARRAY_SIZE; i++) {
        if (A[i] < A[smallestIndex]) smallestIndex = i;
    }
    return smallestIndex;
}

// O(n^2) time | 0(n) space
function selectionSort(A) {
    const ARRAY_SIZE = A.length;
    const sortedArray = [];
    for (let i = 0; i < ARRAY_SIZE; i++) {
        const sI = findIndexOfSmallest(A);
        sortedArray.push(A.splice(sI, 1)[0]);
    }
    return sortedArray;
}

module.exports = {
    selectionSort,
}