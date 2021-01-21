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

module.exports = {
    squareMatrixMultiply,
}
  