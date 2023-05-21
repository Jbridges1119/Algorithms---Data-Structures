// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    const go_right = value > this.data;
    //check if value should be placed left
    if (this.left == null && !go_right) {
      return this.left = new Node(value);
    }
    //check if value should be placed right
    if (this.right == null && go_right) {
      return this.right = new Node(value);
    }
    //check which direction and call insert on that side
    return go_right ? this.right.insert(value) : this.left.insert(value);
  }

  contains(value) {
    //check if our data is value and return whole opbject
    if (this.data === value) {
      return this;
    }
    //traverse right safely
    if (value > this.data && this.right !== null) {
      return this.right.contains(value);
    } 
    // traverse left safely
    if (value < this.data && this.left !== null) {
    return this.left.contains(value);
    }
    //value isn't in binary tree
    return null
  }
}

module.exports = Node;