const { countToZero } = require("./RecursiveCountToZero");

test("count down to zero from 5", () => {
  expect(countToZero(5)).toStrictEqual(0);
});

test("count down console log", () => {
  console.log = jest.fn();
  countToZero(5);
  expect(console.log.mock.calls[0][0]).toStrictEqual(5);
  expect(console.log.mock.calls[1][0]).toStrictEqual(4);
  expect(console.log.mock.calls[2][0]).toStrictEqual(3);
  expect(console.log.mock.calls[3][0]).toStrictEqual(2);
  expect(console.log.mock.calls[4][0]).toStrictEqual(1);
  expect(console.log.mock.calls[5][0]).toStrictEqual(0);
});

test("count up to zero from -5", () => {
  expect(countToZero(-5)).toStrictEqual(0);
});

test("count up console log", () => {
  console.log = jest.fn();
  countToZero(-5);
  expect(console.log.mock.calls[0][0]).toStrictEqual(-5);
  expect(console.log.mock.calls[1][0]).toStrictEqual(-4);
  expect(console.log.mock.calls[2][0]).toStrictEqual(-3);
  expect(console.log.mock.calls[3][0]).toStrictEqual(-2);
  expect(console.log.mock.calls[4][0]).toStrictEqual(-1);
  expect(console.log.mock.calls[5][0]).toStrictEqual(0);
});

test("count to zero from '5'", () => {
  console.log = jest.fn();
  expect(countToZero("5")).toStrictEqual("NaN");
  expect(console.log.mock.calls[0]).toStrictEqual(undefined);
});
