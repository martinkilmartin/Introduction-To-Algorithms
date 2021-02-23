class BinarySearchTree {
  constructor(root) {
    this.root = root;
  }
}
class BinarySearchTreeNode {
  constructor(value, parent, left, right) {
    this.value = value;
    this.parent = parent;
    this.left = left;
    this.right = right;
  }
}

function nullTree() {
  return new BinarySearchTree(null);
}

function inOrderWalk(n) {
  if (n) {
    inOrderWalk(n.left);
    console.log(n.value);
    inOrderWalk(n.right);
  }
}

function search(node, k) {
  const T = node;
  if (!T || T.value === k) {
    return T;
  }
  if (k < T.value) {
    return search(T.left, k);
  } else {
    return search(T.right, k);
  }
}

function iterativeSearch(node, k) {
  let t = node;
  while (t && k !== t.value) {
    if (k < t.value) {
      t = t.left;
    } else {
      t = t.right;
    }
  }
  return t;
}

function minimum(node) {
  let t = node;
  while (t.left) {
    t = t.left;
  }
  return t;
}

function maximum(node) {
  let t = node;
  while (t.right) {
    t = t.right;
  }
  return t;
}

function successor(node) {
  let t = node;
  if (t.right) {
    return minimum(t.right);
  }
  let parent = t.parent;
  while (parent && t === parent.right) {
    t = parent;
    parent = parent.parent;
  }
  return parent;
}

function insert(BST, value) {
  const N = new BinarySearchTreeNode(value, null, null, null);
  let y;
  let x = BST.root;
  while (x) {
    y = x;
    if (value < x.value) {
      x = x.left;
    } else {
      x = x.right;
    }
  }
  if (y === null || y === undefined) {
    BST.root = N;
  } else {
    N.parent = y;
    if (value < y.value) {
      y.left = N;
    } else {
      y.right = N;
    }
  }
}

function transplant(BST, u, v) {
  if (u.parent === null) {
    BST.root = v;
  } else if (u === u.parent.left) {
    u.parent.left = v;
  } else {
    u.parent.right = v;
  }
  if (v) {
    v.parent = u.parent;
  }
}

function treeDelete(BST, n) {
  if (n.left === null) {
    transplant(BST, n, n.right);
  } else if (n.right === null) {
    transplant(BST, n, n.right);
  } else {
    y = minimum(BST.root);
    if (y.parent !== n) {
      transplant(BST, y, y.right);
      y.right = n.right;
      y.right.parent = y;
    }
    transplant(BST, n, y);
    y.left = n.left;
    y.left.parent = y;
  }
}

module.exports = {
  nullTree,
  inOrderWalk,
  search,
  iterativeSearch,
  minimum,
  maximum,
  successor,
  insert,
  treeDelete,
};
