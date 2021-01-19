const { mergeSortAsc, mergeSortDesc } = require("./MergeSort")
const { UNSORTED_ARRAY, SORTED_ARRAY_ASC, SORTED_ARRAY_DESC } = require("./TestConstants")

test("merge sort ascending", () => {
  expect(mergeSortAsc(UNSORTED_ARRAY)).toStrictEqual(SORTED_ARRAY_ASC)
})

test("merge sort descending", () => {
  expect(mergeSortDesc(UNSORTED_ARRAY)).toStrictEqual(SORTED_ARRAY_DESC)
})
