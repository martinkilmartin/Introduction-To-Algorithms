const { bubbleSortAsc, bubbleSortDesc } = require("./BubbleSort");
const {
  UNSORTED_ARRAY,
  SORTED_ARRAY_ASC,
  SORTED_ARRAY_DESC,
} = require("./TestConstants");

test("bubble sort ascending", () => {
  expect(bubbleSortAsc(UNSORTED_ARRAY)).toStrictEqual(SORTED_ARRAY_ASC);
});

test("bubble sort descending", () => {
  expect(bubbleSortDesc(UNSORTED_ARRAY)).toStrictEqual(SORTED_ARRAY_DESC);
});
