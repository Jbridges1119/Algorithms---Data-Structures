// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data))
  }

  remove(data) {
    this.children = this.children.filter(node => node.data !== data)
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  // output examples below
  traverseBF(callback) {
    //put all into array
    const node_arr = [this.root];

    console.log("root: ", this.root)

    while (node_arr.length) {
      console.log("array: ", node_arr)

      //remove parent and assign to node
      const node = node_arr.shift();

      //use spreader to remove [] and push into our list of nodes
      node_arr.push(...node.children)

      //run our callback on the seperated node - starting with head(parent)
      callback(node)
    }
  }

  traverseDF(callback) {
    const node_arr = [this.root];

    while (node_arr.length) {
      //pull out first node in arr to run callback on
      const node = node_arr.shift();

      //place the nodes children at the front of the list (starts left to right)
      node_arr.unshift(...node.children);

      callback(node);
    }

  }
}

// root:  Node {
//   data: 'a',
//   children: [
//     Node { data: 'b', children: [Array] },
//     Node { data: 'c', children: [] }
//   ]
// }

// array:  [ Node { data: 'a', children: [ [Node], [Node] ] } ]
// array:  [
//   Node { data: 'b', children: [ [Node] ] },
//   Node { data: 'c', children: [] }
// ]
// array:  [ Node { data: 'c', children: [] }, Node { data: 'd', children: [] } ]
// array:  [ Node { data: 'd', children: [] } ]

module.exports = { Tree, Node };