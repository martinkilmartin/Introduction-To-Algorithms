const {
  createSinglyLinkedList,
  createDoublyLinkedList,
  printSinglyLinkedList,
  printDoublyLinkedList,
  insertList,
  searchList,
} = require("./LinkedList");
const {
  LINKED_LIST_ARRAY,
  SINGLY_LINKED_LIST_AS_STRING,
  APPENDED_SINGLY_LINKED_LIST_AS_STRING,
  DOUBLY_LINKED_LIST_AS_STRING,
  APPENDED_DOUBLY_LINKED_LIST_AS_STRING,
} = require("./TestConstants");

test("create singly linked list", () => {
  expect(
    printSinglyLinkedList(createSinglyLinkedList(LINKED_LIST_ARRAY))
  ).toStrictEqual(SINGLY_LINKED_LIST_AS_STRING);
});

test("create doubly linked list", () => {
  expect(
    printDoublyLinkedList(createDoublyLinkedList(LINKED_LIST_ARRAY))
  ).toStrictEqual(DOUBLY_LINKED_LIST_AS_STRING);
});

test("append singly linked list", () => {
  expect(
    printSinglyLinkedList(
      insertList(
        insertList(
          insertList(createSinglyLinkedList(LINKED_LIST_ARRAY), 77),
          88
        ),
        66
      )
    )
  ).toStrictEqual(APPENDED_SINGLY_LINKED_LIST_AS_STRING);
});

test("append doubly linked list", () => {
  expect(
    printDoublyLinkedList(
      insertList(
        insertList(
          insertList(createDoublyLinkedList(LINKED_LIST_ARRAY), 77),
          88
        ),
        66
      )
    )
  ).toStrictEqual(APPENDED_DOUBLY_LINKED_LIST_AS_STRING);
});

test("search singly linked list found", () => {
  expect(
    searchList(createSinglyLinkedList(LINKED_LIST_ARRAY), 1)
  ).toStrictEqual(true);
});

test("search doubly linked list found", () => {
  expect(
    searchList(createDoublyLinkedList(LINKED_LIST_ARRAY), 1)
  ).toStrictEqual(true);
});

test("search singly linked list not found", () => {
  expect(
    searchList(createSinglyLinkedList(LINKED_LIST_ARRAY), 5)
  ).toStrictEqual(false);
});

test("search doubly linked list not found", () => {
  expect(
    searchList(createDoublyLinkedList(LINKED_LIST_ARRAY), 5)
  ).toStrictEqual(false);
});

test("search singly linked list after insert", () => {
  expect(
    searchList(
      insertList(
        insertList(
          insertList(createSinglyLinkedList(LINKED_LIST_ARRAY), 77),
          88
        ),
        66
      ),
      88
    )
  ).toStrictEqual(true);
});

test("search doubly linked list after insert", () => {
  expect(
    searchList(
      insertList(
        insertList(
          insertList(createDoublyLinkedList(LINKED_LIST_ARRAY), 77),
          88
        ),
        66
      ),
      88
    )
  ).toStrictEqual(true);
});
