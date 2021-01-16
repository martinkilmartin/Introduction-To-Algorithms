const { insertionSortAsc, insertionSortDesc } = require("./InsertionSort")

let unsorted = [7, 4, 5, 2, 10, 1, -3, 945, 0]
let sortedAsc = [-3, 0, 1, 2, 4, 5, 7, 10, 945]
let sortedDesc = [945, 10, 7, 5, 4, 2, 1, 0, -3]

test("insertion sort ascending", () => {
  expect(
    insertionSortAsc(unsorted)
  ).toStrictEqual(sortedAsc)
})

test("insertion sort descending", () => {
  expect(
    insertionSortDesc(unsorted)
  ).toStrictEqual(sortedDesc)
})