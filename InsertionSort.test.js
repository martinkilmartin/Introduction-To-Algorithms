const { insertionSortAsc, insertionSortDesc } = require("./InsertionSort");
const {
  UNSORTED_ARRAY,
  SORTED_ARRAY_ASC,
  SORTED_ARRAY_DESC,
} = require("./TestConstants");

test("insertion sort ascending", () => {
  expect(insertionSortAsc(UNSORTED_ARRAY)).toStrictEqual(SORTED_ARRAY_ASC);
});

test("insertion sort descending", () => {
  expect(insertionSortDesc(UNSORTED_ARRAY)).toStrictEqual(SORTED_ARRAY_DESC);
});
