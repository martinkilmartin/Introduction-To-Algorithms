const {
  parent,
  leftChild,
  rightChild,
  buildMaxHeap,
  heapSort,
} = require("./Heap");
const { ARRAY_TO_HEAP, MAX_HEAP } = require("./TestConstants");

test("buildMaxHeap", () => {
  expect(buildMaxHeap(ARRAY_TO_HEAP)).toStrictEqual(MAX_HEAP);
});

test("parent of 1", () => {
  expect(parent(1)).toStrictEqual(0);
});

test("leftChild of 1", () => {
  expect(leftChild(1)).toStrictEqual(2);
});

test("rightChild of 1", () => {
  expect(rightChild(1)).toStrictEqual(3);
});

test("parent of 2", () => {
  expect(parent(2)).toStrictEqual(1);
});

test("leftChild of 2", () => {
  expect(leftChild(2)).toStrictEqual(4);
});

test("rightChild of 2", () => {
  expect(rightChild(2)).toStrictEqual(5);
});

test("parent of 3", () => {
  expect(parent(3)).toStrictEqual(1);
});

test("leftChild of 3", () => {
  expect(leftChild(3)).toStrictEqual(6);
});

test("rightChild of 3", () => {
  expect(rightChild(3)).toStrictEqual(7);
});

test("parent of 4", () => {
  expect(parent(4)).toStrictEqual(2);
});

test("leftChild of 4", () => {
  expect(leftChild(4)).toStrictEqual(8);
});

test("rightChild of 4", () => {
  expect(rightChild(4)).toStrictEqual(9);
});

test("parent of 5", () => {
  expect(parent(5)).toStrictEqual(2);
});

test("leftChild of 5", () => {
  expect(leftChild(5)).toStrictEqual(10);
});

test("rightChild of 5", () => {
  expect(rightChild(5)).toStrictEqual(11);
});

test("parent of 6", () => {
  expect(parent(6)).toStrictEqual(3);
});

test("leftChild of 6", () => {
  expect(leftChild(6)).toStrictEqual(12);
});

test("rightChild of 6", () => {
  expect(rightChild(6)).toStrictEqual(13);
});

test("parent of 7", () => {
  expect(parent(7)).toStrictEqual(3);
});

test("leftChild of 7", () => {
  expect(leftChild(7)).toStrictEqual(14);
});

test("rightChild of 7", () => {
  expect(rightChild(7)).toStrictEqual(15);
});

test("parent of 8", () => {
  expect(parent(8)).toStrictEqual(4);
});

test("leftChild of 8", () => {
  expect(leftChild(8)).toStrictEqual(16);
});

test("rightChild of 8", () => {
  expect(rightChild(8)).toStrictEqual(17);
});

test("parent of 9", () => {
  expect(parent(9)).toStrictEqual(4);
});

test("leftChild of 9", () => {
  expect(leftChild(9)).toStrictEqual(18);
});

test("rightChild of 9", () => {
  expect(rightChild(9)).toStrictEqual(19);
});

test("parent of 10", () => {
  expect(parent(10)).toStrictEqual(5);
});

test("leftChild of 10", () => {
  expect(leftChild(10)).toStrictEqual(20);
});

test("rightChild of 10", () => {
  expect(rightChild(10)).toStrictEqual(21);
});

test("parent of 11", () => {
  expect(parent(11)).toStrictEqual(5);
});

test("leftChild of 11", () => {
  expect(leftChild(11)).toStrictEqual(22);
});

test("rightChild of 11", () => {
  expect(rightChild(11)).toStrictEqual(23);
});

test("parent of 12", () => {
  expect(parent(12)).toStrictEqual(6);
});

test("leftChild of 12", () => {
  expect(leftChild(12)).toStrictEqual(24);
});

test("rightChild of 12", () => {
  expect(rightChild(12)).toStrictEqual(25);
});

test("parent of 13", () => {
  expect(parent(13)).toStrictEqual(6);
});

test("leftChild of 13", () => {
  expect(leftChild(13)).toStrictEqual(26);
});

test("rightChild of 13", () => {
  expect(rightChild(13)).toStrictEqual(27);
});

test("parent of 14", () => {
  expect(parent(14)).toStrictEqual(7);
});

test("leftChild of 14", () => {
  expect(leftChild(14)).toStrictEqual(28);
});

test("rightChild of 14", () => {
  expect(rightChild(14)).toStrictEqual(29);
});

test("parent of 15", () => {
  expect(parent(15)).toStrictEqual(7);
});

test("leftChild of 15", () => {
  expect(leftChild(15)).toStrictEqual(30);
});

test("rightChild of 15", () => {
  expect(rightChild(15)).toStrictEqual(31);
});
