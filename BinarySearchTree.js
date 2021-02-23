class BinarySearchTree {
  constructor(value, parent, left, right) {
    this.value = value;
    this.parent = parent;
    this.left = left;
    this.right = right;
  }
}

function inOrderTreeWalk(BST) {
  if (BST) {
    inOrderTreeWalk(BST.left);
    console.log(BST.value);
    inOrderTreeWalk(BST.right);
  }
}

function treeSearch(BST, k) {
  if (!BST || BST.value === k) {
    return BST;
  }
  if (key < BST.value) {
    return treeSearch(BST.left, k);
  } else {
    return treeSearch(BST.right, k);
  }
}

function iterativeTreeSearch(BST, k) {
  while (BST && k !== BST.key) {
    if (k < BST.key) {
      BST = BST.left;
    } else {
      BST = BST.right;
    }
  }
  return BST;
}

function treeMinimum(BST) {
    while (BST.left) {
        BST = BST.left;
    }
    return BST;
}

function treeMaximum(BST) {
    while (BST.right) {
        BST = BST.right;
    }
    return BST;
}

function treeSuccessor(BST) {
    if (BST.right) {
        return treeMinimum(BST.right);
    }
    let parent = BST.parent;
    while (parent && BST === parent.right) {
        BST = parent;
        parent = parent.parent;
    }
    return parent;
}

function treeInsert(BST, z) {
    let y;
    let x = BST;
    while (x) {
        y = x;
        if (z.value < x.value) {
            x = x.left;
        }
        else {
            x = x.right;
        }
    }
    z.parent = y;
    if (y === null) {
        BST = z;
    }
    else if (z.value < y.value) {
        y.left = z;
    }
    else {
        y.right = z;
    }
}

let bst = {};

treeInsert(bst, new BinarySearchTree(15, null, null, null));

console.log(bst);

treeInsert(bst, new BinarySearchTree(19, null, null, null));
treeInsert(bst, new BinarySearchTree(2, null, null, null));
treeInsert(bst, new BinarySearchTree(5, null, null, null));
treeInsert(bst, new BinarySearchTree(18, null, null, null));
treeInsert(bst, new BinarySearchTree(17, null, null, null));
treeInsert(bst, new BinarySearchTree(12, null, null, null));
treeInsert(bst, new BinarySearchTree(9, null, null, null));
treeInsert(bst, new BinarySearchTree(13, null, null, null));

console.log(bst);

console.log(inOrderTreeWalk(bst));
