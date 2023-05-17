// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  //think of this kind of like an object {data: value, next: previous heads}
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    //this.head can be passed in to Node() because 'this.head' becomes a nested object that branches down through previous 'this.head'(s).
    //eg. {data: value, next: {data: difValue, next: {...} }}
    this.head = new Node(data, this.head)
  }

  size() {
    let counter = 0,
        node = this.head;
    //was getting errors with this.head.next because one test was null. needs to be this.head?.next
    //dont need it in the while statment because we don't execute the loop when null.
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    console.log(this.head)
    return this.head;
  }

  getLast() {
    let node = this.head;
    //we are iterating only if there is a .next - otherwise we return the last node
    while (node?.next) {
      node = node.next;
    }
    return node;
  }

  clear() {
    return this.head = null;
  }

  removeFirst() {
    return this.head = this.head ? this.head.next : this.head
  }

  removeLast() {

  }
}

module.exports = { Node, LinkedList };