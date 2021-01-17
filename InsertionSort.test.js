const { insertionSortAsc, insertionSortDesc } = require("./InsertionSort")
const { unsorted, sortedAsc, sortedDesc } = require("./TestConstants")

test("insertion sort ascending", () => {
  expect(insertionSortAsc(unsorted)).toStrictEqual(sortedAsc)
})

test("insertion sort descending", () => {
  expect(insertionSortDesc(unsorted)).toStrictEqual(sortedDesc)
})
