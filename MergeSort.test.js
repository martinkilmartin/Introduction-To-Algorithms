const { mergeSortAsc, mergeSortDesc } = require("./MergeSort")
const { unsorted, sortedAsc, sortedDesc } = require("./TestConstants")

test("merge sort ascending", () => {
  expect(mergeSortAsc(unsorted)).toStrictEqual(sortedAsc)
})

test("merge sort descending", () => {
  expect(mergeSortDesc(unsorted)).toStrictEqual(sortedDesc)
})
