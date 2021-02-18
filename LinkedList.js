class SinglyLinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class DoublyLinkedListNode extends SinglyLinkedListNode {
  constructor(value, next, prev) {
    super(value, next);
    this.prev = prev;
  }
}

function createSinglyLinkedList(listValues) {
    const LIST_LENGTH = listValues.length;
    if (LIST_LENGTH === 0) return null;
    const HEAD_NODE = new SinglyLinkedListNode(listValues[0], null);
    if (LIST_LENGTH === 1) return HEAD_NODE;
    HEAD_NODE.next =  new SinglyLinkedListNode(listValues[1], null);
    let pointer = HEAD_NODE.next;
    for (let i = 2; i < LIST_LENGTH; i++) {
        pointer.next = new SinglyLinkedListNode(listValues[i], null);
        pointer = pointer.next;
    }
    return HEAD_NODE;
}

function createDoublyLinkedList(listValues) {
    const LIST_LENGTH = listValues.length;
    if (LIST_LENGTH === 0) return null;
    const HEAD_NODE = new DoublyLinkedListNode(listValues[0], null, null);
    if (LIST_LENGTH === 1) return HEAD_NODE;
    HEAD_NODE.next =  new DoublyLinkedListNode(listValues[1], null, HEAD_NODE);
    let pointer = HEAD_NODE.next;
    for (let i = 2; i < LIST_LENGTH; i++) {
        pointer.next = new DoublyLinkedListNode(listValues[i], null, pointer);
        pointer = pointer.next;
    }
    return HEAD_NODE;
}

function printSinglyLinkedList(HEAD) {
    let pointer = HEAD;
    let stringBuilder = '(HEAD)';
    while (pointer) {
        stringBuilder += '->' + pointer.value;
        pointer = pointer.next;
    }
    stringBuilder += '~TAIL~';
    return stringBuilder;
}

function printDoublyLinkedList(HEAD) {
    let pointer = HEAD;
    let stringBuilder = '(HEAD)';
    while (pointer) {
        stringBuilder += `--{${pointer.prev ? pointer.prev.value: null}<-[${pointer.value}]->${pointer.next ? pointer.next.value : null}}--`;
        pointer = pointer.next;
    }
    stringBuilder += '~TAIL~';
    return stringBuilder;
}

function searchList(HEAD, k) {
  let pointer = HEAD;
  while (pointer !== null) {
      if (pointer.value === k) {
          return true;
      }
    pointer = pointer.next;
  }
  return false;
}

function insertList(HEAD, x) {
    if (HEAD.hasOwnProperty('prev')) {
        return insertDoublyLinkedList(HEAD, x);
    }
    return new SinglyLinkedListNode(x, HEAD);
}

function insertDoublyLinkedList(HEAD, x) {
    const NEW_HEAD = new DoublyLinkedListNode(x, HEAD, null);
    HEAD.prev = NEW_HEAD;
    return NEW_HEAD;
}

module.exports = {
    createSinglyLinkedList,
    createDoublyLinkedList,
    printSinglyLinkedList,
    printDoublyLinkedList,
    searchList,
    insertList,
}