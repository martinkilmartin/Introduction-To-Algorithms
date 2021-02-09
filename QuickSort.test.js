const { quickSort } = require("./QuickSort");
const {
  UNSORTED_ARRAY,
  SORTED_ARRAY_ASC,
} = require("./TestConstants");

test("quick sort", () => {
  expect(quickSort(UNSORTED_ARRAY, 0, UNSORTED_ARRAY.length - 1)).toStrictEqual(SORTED_ARRAY_ASC);
});
