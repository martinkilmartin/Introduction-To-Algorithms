const {
  inOrderWalk,
  nullTree,
  search,
  iterativeSearch,
  minimum,
  maximum,
  successor,
  insert,
  treeDelete,
} = require("./BinarySearchTree");

let bst = nullTree();

beforeAll(() => {
  insert(bst, 15);
  insert(bst, 19);
  insert(bst, 2);
  insert(bst, 1);
  insert(bst, 18);
  insert(bst, 17);
  insert(bst, 12);
  insert(bst, 9);
  insert(bst, 13);
});

test("search found", () => {
  expect(search(bst.root, 17).value).toStrictEqual(17);
});

test("search not found", () => {
  expect(search(bst.root, 16)).toStrictEqual(null);
});

test("iterative search found", () => {
  expect(iterativeSearch(bst.root, 9).value).toStrictEqual(9);
});

test("iterative search not found", () => {
  expect(iterativeSearch(bst.root, 6)).toStrictEqual(null);
});

test("minimum", () => {
  expect(minimum(bst.root).value).toStrictEqual(1);
});

test("maximum", () => {
  expect(maximum(bst.root).value).toStrictEqual(19);
});

test("successor", () => {
  expect(successor(bst.root).value).toStrictEqual(17);
});

test("delete", () => {
  expect(search(bst.root, 199)).toStrictEqual(null);
  insert(bst, 199);
  expect(search(bst.root, 199).value).toStrictEqual(199);
  treeDelete(bst.root, search(bst.root, 199));
  expect(search(bst.root, 199)).toStrictEqual(null);
});
