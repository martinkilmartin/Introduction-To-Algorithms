const {
  fibonacciLoop,
  fibonacciRecursive,
  fibonacciRecursiveMemoization,
} = require("./Fibonacci");
const { FIB_35 } = require("./TestConstants");

/*
    fibonacciLoop
*/
test("fibonacciLoop of 0", () => {
  expect(fibonacciLoop(0)).toStrictEqual(0);
});
test("fibonacciLoop of 1", () => {
  expect(fibonacciLoop(1)).toStrictEqual(1);
});

test("fibonacciLoop of 2", () => {
  expect(fibonacciLoop(2)).toStrictEqual(1);
});

test("fibonacciLoop of 3", () => {
  expect(fibonacciLoop(3)).toStrictEqual(2);
});

test("fibonacciLoop of 4", () => {
  expect(fibonacciLoop(4)).toStrictEqual(3);
});

test("fibonacciLoop of 5", () => {
  expect(fibonacciLoop(5)).toStrictEqual(5);
});

test("fibonacciLoop of 6", () => {
  expect(fibonacciLoop(6)).toStrictEqual(8);
});

test("fibonacciLoop of 7", () => {
  expect(fibonacciLoop(7)).toStrictEqual(13);
});

test("fibonacciLoop of 8", () => {
  expect(fibonacciLoop(8)).toStrictEqual(21);
});

test("fibonacciLoop of 9", () => {
  expect(fibonacciLoop(9)).toStrictEqual(34);
});

test("fibonacciLoop of 10", () => {
  expect(fibonacciLoop(10)).toStrictEqual(55);
});

test("fibonacciLoop of 11", () => {
  expect(fibonacciLoop(11)).toStrictEqual(89);
});

test("fibonacciLoop of 12", () => {
  expect(fibonacciLoop(12)).toStrictEqual(144);
});

test("fibonacciLoop of 35", () => {
  expect(fibonacciLoop(35)).toStrictEqual(FIB_35);
});

/*
    fibonacciRecursive
*/
test("fibonacciRecursive of 0", () => {
  expect(fibonacciRecursive(0)).toStrictEqual(0);
});
test("fibonacciRecursive of 1", () => {
  expect(fibonacciRecursive(1)).toStrictEqual(1);
});

test("fibonacciRecursive of 2", () => {
  expect(fibonacciRecursive(2)).toStrictEqual(1);
});

test("fibonacciRecursive of 3", () => {
  expect(fibonacciRecursive(3)).toStrictEqual(2);
});

test("fibonacciRecursive of 4", () => {
  expect(fibonacciRecursive(4)).toStrictEqual(3);
});

test("fibonacciRecursive of 5", () => {
  expect(fibonacciRecursive(5)).toStrictEqual(5);
});

test("fibonacciRecursive of 6", () => {
  expect(fibonacciRecursive(6)).toStrictEqual(8);
});

test("fibonacciRecursive of 7", () => {
  expect(fibonacciRecursive(7)).toStrictEqual(13);
});

test("fibonacciRecursive of 8", () => {
  expect(fibonacciRecursive(8)).toStrictEqual(21);
});

test("fibonacciRecursive of 9", () => {
  expect(fibonacciRecursive(9)).toStrictEqual(34);
});

test("fibonacciRecursive of 10", () => {
  expect(fibonacciRecursive(10)).toStrictEqual(55);
});

test("fibonacciRecursive of 11", () => {
  expect(fibonacciRecursive(11)).toStrictEqual(89);
});
test("fibonacciRecursive of 12", () => {
  expect(fibonacciRecursive(12)).toStrictEqual(144);
});

test("fibonacciRecursive of 35", () => {
  expect(fibonacciRecursive(35)).toStrictEqual(FIB_35);
});

/*
    fibonacciRecursiveMemoization
*/
test("fibonacciRecursiveMemoization of 0", () => {
  expect(fibonacciRecursiveMemoization(0, {})).toStrictEqual(0);
});
test("fibonacciRecursiveMemoization of 1", () => {
  expect(fibonacciRecursiveMemoization(1, {})).toStrictEqual(1);
});

test("fibonacciRecursiveMemoization of 2", () => {
  expect(fibonacciRecursiveMemoization(2, {})).toStrictEqual(1);
});

test("fibonacciRecursiveMemoization of 3", () => {
  expect(fibonacciRecursiveMemoization(3, {})).toStrictEqual(2);
});

test("fibonacciRecursiveMemoization of 4", () => {
  expect(fibonacciRecursiveMemoization(4, {})).toStrictEqual(3);
});

test("fibonacciRecursiveMemoization of 5", () => {
  expect(fibonacciRecursiveMemoization(5, {})).toStrictEqual(5);
});

test("fibonacciRecursiveMemoization of 6", () => {
  expect(fibonacciRecursiveMemoization(6, {})).toStrictEqual(8);
});

test("fibonacciRecursiveMemoization of 7", () => {
  expect(fibonacciRecursiveMemoization(7, {})).toStrictEqual(13);
});

test("fibonacciRecursiveMemoization of 8", () => {
  expect(fibonacciRecursiveMemoization(8, {})).toStrictEqual(21);
});

test("fibonacciRecursiveMemoization of 9", () => {
  expect(fibonacciRecursiveMemoization(9, {})).toStrictEqual(34);
});

test("fibonacciRecursiveMemoization of 10", () => {
  expect(fibonacciRecursiveMemoization(10, {})).toStrictEqual(55);
});

test("fibonacciRecursiveMemoization of 11", () => {
  expect(fibonacciRecursiveMemoization(11, {})).toStrictEqual(89);
});
test("fibonacciRecursiveMemoization of 12", () => {
  expect(fibonacciRecursiveMemoization(12, {})).toStrictEqual(144);
});

test("fibonacciRecursiveMemoization of 35", () => {
  expect(fibonacciRecursiveMemoization(35, {})).toStrictEqual(FIB_35);
});
