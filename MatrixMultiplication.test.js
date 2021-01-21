const { squareMatrixMultiply } = require("./MatrixMultiplication")
const { MATRIX_A, MATRIX_B, MATRIX_A_X_B, MATRIX_B_X_A } = require("./TestConstants")

test("matrix multiplication A * B", () => {
  expect(squareMatrixMultiply(MATRIX_A, MATRIX_B)).toStrictEqual(MATRIX_A_X_B)
})

test("matrix multiplication B * A", () => {
  expect(squareMatrixMultiply(MATRIX_B, MATRIX_A)).toStrictEqual(MATRIX_B_X_A)
})
