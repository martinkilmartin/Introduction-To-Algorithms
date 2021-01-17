const { bubbleSortAsc, bubbleSortDesc } = require("./BubbleSort")
const { unsorted, sortedAsc, sortedDesc } = require("./TestConstants")

test("bubble sort ascending", () => {
  expect(bubbleSortAsc(unsorted)).toStrictEqual(sortedAsc)
})

test("bubble sort descending", () => {
  expect(bubbleSortDesc(unsorted)).toStrictEqual(sortedDesc)
})
