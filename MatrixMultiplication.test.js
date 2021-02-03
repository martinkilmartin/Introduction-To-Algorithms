const { squareMatrixMultiply } = require("./MatrixMultiplication");
const {
  MATRIX_A,
  MATRIX_B,
  MATRIX_3X3_A,
  MATRIX_3X3_B,
  MATRIX_4X4_A,
  MATRIX_4X4_B,
  MATRIX_A_X_B,
  MATRIX_B_X_A,
  MATRIX_3X3_A_X_B,
  MATRIX_4X4_A_X_B,
} = require("./TestConstants");

test("matrix multiplication A * B", () => {
  expect(squareMatrixMultiply(MATRIX_A, MATRIX_B)).toStrictEqual(MATRIX_A_X_B);
});

test("matrix multiplication B * A", () => {
  expect(squareMatrixMultiply(MATRIX_B, MATRIX_A)).toStrictEqual(MATRIX_B_X_A);
});

test("3 x 3 matrix multiplication A * B", () => {
  expect(squareMatrixMultiply(MATRIX_3X3_A, MATRIX_3X3_B)).toStrictEqual(
    MATRIX_3X3_A_X_B
  );
});

test("4 x 4 matrix multiplication A * B", () => {
  expect(squareMatrixMultiply(MATRIX_4X4_A, MATRIX_4X4_B)).toStrictEqual(
    MATRIX_4X4_A_X_B
  );
});
