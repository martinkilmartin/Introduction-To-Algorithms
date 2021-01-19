function maximumCrossingSubArray(originalArray) {
  const array = [...originalArray]
  return findMaxSubArray(array, 0, array.length)
}

function findMaxSubArray(A, low, high) {
  if (low === high) {
    return {
      maxLeft: low,
      maxRight: high,
      sum: A[low],
    }
  } else {
    let mid = Math.floor((low + high) / 2)
    let leftResult = findMaxSubArray(A, low, mid)
    let rightResult = findMaxSubArray(A, mid + 1, high)
    let crossResult = findMaxCrossingSubArray(A, low, mid, high)
    if (
      leftResult.sum >= rightResult.sum &&
      leftResult.sum >= crossResult.sum
    ) {
      return leftResult
    } else if (
      rightResult.sum >= leftResult.sum &&
      rightResult.sum >= crossResult.sum
    ) {
      return rightResult
    } else {
      return crossResult
    }
  }
}

function findMaxCrossingSubArray(A, low, mid, high) {
  let leftSum = Number.NEGATIVE_INFINITY
  let rightSum = Number.NEGATIVE_INFINITY
  let result = {
    maxLeft: 0,
    maxRight: 0,
    sum: 0,
  }
  let sum = 0
  for (let i = mid; i >= low; i--) {
    sum = sum + A[i]
    if (sum > leftSum) {
      leftSum = sum
      result.maxLeft = i
    }
  }
  sum = 0
  for (let j = mid + 1; j <= high; j++) {
    sum = sum + A[j]
    if (sum > rightSum) {
      rightSum = sum
      result.maxRight = j
    }
  }
  result.sum = leftSum + rightSum
  return result
}

module.exports = {
  maximumCrossingSubArray,
}
