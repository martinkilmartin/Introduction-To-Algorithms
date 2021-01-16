const insertionSort = require("./InsertionSort")

let unsorted = [7, 4, 5, 2, 10, 1, -3, 945, 0]
let sorted = [-3, 0, 1, 2, 4, 5, 7, 10, 945]

test("insertion sorted", () => {
  expect(
    insertionSort(unsorted)
  ).toStrictEqual(sorted)
})
