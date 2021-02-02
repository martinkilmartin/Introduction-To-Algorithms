const { maximumCrossingSubArray } = require("./MaximumCrossingSubArray");
const {
  MAX_SUB_ARRAY_SIMPLE,
  MAX_SUB_ARRAY_MEDIUM,
  MAX_SUB_ARRAY_MEDIUM_LEFT,
} = require("./TestConstants");

test("maximum crossing simple sub array", () => {
  expect(maximumCrossingSubArray(MAX_SUB_ARRAY_SIMPLE)).toStrictEqual({
    maxLeft: 3,
    maxRight: 6,
    sum: 6,
  });
});

test("maximum crossing medium sub array", () => {
  expect(maximumCrossingSubArray(MAX_SUB_ARRAY_MEDIUM)).toStrictEqual({
    maxLeft: 7,
    maxRight: 10,
    sum: 43,
  });
});

test("maximum crossing medium left sub array", () => {
  expect(maximumCrossingSubArray(MAX_SUB_ARRAY_MEDIUM_LEFT)).toStrictEqual({
    maxLeft: 3,
    maxRight: 6,
    sum: 43,
  });
});
