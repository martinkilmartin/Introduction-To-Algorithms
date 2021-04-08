const { factorial } = require("./RecursiveFactorial");
const {
  FACT_0,
  FACT_1,
  FACT_2,
  FACT_3,
  FACT_4,
  FACT_5,
  FACT_6,
  FACT_7,
  FACT_8,
  FACT_9,
  FACT_10,
  FACT_11,
  FACT_12,
} = require("./TestConstants");

test("factorial 0", () => {
  expect(factorial(0)).toStrictEqual(FACT_0);
});

test("factorial 1", () => {
  expect(factorial(1)).toStrictEqual(FACT_1);
});

test("factorial 2", () => {
  expect(factorial(2)).toStrictEqual(FACT_2);
});

test("factorial 3", () => {
  expect(factorial(3)).toStrictEqual(FACT_3);
});

test("factorial 4", () => {
  expect(factorial(4)).toStrictEqual(FACT_4);
});

test("factorial 5", () => {
  expect(factorial(5)).toStrictEqual(FACT_5);
});

test("factorial 6", () => {
  expect(factorial(6)).toStrictEqual(FACT_6);
});

test("factorial 7", () => {
  expect(factorial(7)).toStrictEqual(FACT_7);
});

test("factorial 8", () => {
  expect(factorial(8)).toStrictEqual(FACT_8);
});

test("factorial 9", () => {
  expect(factorial(9)).toStrictEqual(FACT_9);
});

test("factorial 10", () => {
  expect(factorial(10)).toStrictEqual(FACT_10);
});

test("factorial 11", () => {
  expect(factorial(11)).toStrictEqual(FACT_11);
});

test("factorial 12", () => {
  expect(factorial(12)).toStrictEqual(FACT_12);
});
