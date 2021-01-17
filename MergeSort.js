function mergeSortAsc(originalArray) {
  if (originalArray.length < 2) return originalArray
  const array = [...originalArray]
  return mergeSortA(array)
}

function mergeSortA(A) {
  if (A.length === 1) return A
  let length = A.length
  let halfWay = Math.floor(A.length / 2)
  let LA = A.slice(0, halfWay)
  let RA = A.slice(halfWay, length)
  LA = mergeSortA(LA)
  RA = mergeSortA(RA)
  return mergeAsc(LA, RA)
}

function mergeAsc(LA, RA) {
  const merged = []
  while (LA.length > 0 && RA.length > 0) {
    if (LA[0] > RA[0]) {
      merged.push(RA[0])
      RA.shift()
    } else {
      merged.push(LA[0])
      LA.shift()
    }
  }

  while (LA.length > 0) {
    merged.push(LA[0])
    LA.shift()
  }
  while (RA.length > 0) {
    merged.push(RA[0])
    RA.shift()
  }
  return merged
}

function mergeSortDesc(originalArray) {
  if (originalArray.length < 2) return originalArray
  const array = [...originalArray]
  return mergeSortD(array)
}

function mergeSortD(A) {
  if (A.length === 1) return A
  let length = A.length
  let halfWay = Math.floor(A.length / 2)
  let LA = A.slice(0, halfWay)
  let RA = A.slice(halfWay, length)
  LA = mergeSortD(LA)
  RA = mergeSortD(RA)
  return mergeDesc(LA, RA)
}

function mergeDesc(LA, RA) {
  const merged = []
  while (LA.length > 0 && RA.length > 0) {
    if (LA[0] < RA[0]) {
      merged.push(RA[0])
      RA.shift()
    } else {
      merged.push(LA[0])
      LA.shift()
    }
  }
  while (LA.length > 0) {
    merged.push(LA[0])
    LA.shift()
  }
  while (RA.length > 0) {
    merged.push(RA[0])
    RA.shift()
  }
  return merged
}

module.exports = {
  mergeSortAsc,
  mergeSortDesc,
}
