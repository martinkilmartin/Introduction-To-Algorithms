const { selectionSort } = require("./SelectionSort");
const { UNSORTED_ARRAY, SORTED_ARRAY_ASC } = require("./TestConstants");

test("selection sort", () => {
  expect(
    selectionSort(UNSORTED_ARRAY, 0, UNSORTED_ARRAY.length - 1)
  ).toStrictEqual(SORTED_ARRAY_ASC);
});
