function squareMatrixMultiply(A, B) {
  const matrixA = [...A]
  const matrixB = [...B]
  const matrixC = []
  const rowCount = matrixA.length
  for (let i = 0; i < rowCount; i++) {
    matrixC.push([])
    for (let j = 0; j < rowCount; j++) {
      matrixC[i][j] = 0
      for (let k = 0; k < rowCount; k++) {
        matrixC[i][j] = matrixC[i][j] + matrixA[i][k] * matrixB[k][j]
      }
    }
  }
  return matrixC
}

function squareMatrixMultiplyRecursive(A, B) {
  const matrixA = [...A]
  const matrixB = [...B]
  const matrixC = []
  const rowCount = matrixA.length
  if (rowCount === 1) {
    matrixC.push([])
    matrixC[0][0] = matrixA[0] * matrixB[0]
  } else {
    matrixC.push([])
    matrixC[0][0] =
      parseInt(
        squareMatrixMultiplyRecursive([matrixA[0][0]], [matrixB[0][0]])
      ) +
      parseInt(squareMatrixMultiplyRecursive([matrixA[0][1]], [matrixB[1][0]]))
    matrixC[0][1] =
      parseInt(
        squareMatrixMultiplyRecursive([matrixA[0][0]], [matrixB[0][1]])
      ) +
      parseInt(squareMatrixMultiplyRecursive([matrixA[0][1]], [matrixB[1][1]]))
    matrixC.push([])
    matrixC[1][0] =
      parseInt(
        squareMatrixMultiplyRecursive([matrixA[1][0]], [matrixB[0][0]])
      ) +
      parseInt(squareMatrixMultiplyRecursive([matrixA[1][1]], [matrixB[1][0]]))
    matrixC[1][1] =
      parseInt(
        squareMatrixMultiplyRecursive([matrixA[1][0]], [matrixB[0][1]])
      ) +
      parseInt(squareMatrixMultiplyRecursive([matrixA[1][1]], [matrixB[1][1]]))
  }
  return matrixC
}

module.exports = {
  squareMatrixMultiply,
  squareMatrixMultiplyRecursive,
}
