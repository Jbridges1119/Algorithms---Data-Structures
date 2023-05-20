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
    this.head = new Node(data, this.head);
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
    return this.head = this.head ? this.head.next : this.head;
  }

  removeLast() {
    let node = this.head;
    let prev = node;

    //nothing in list - nothing to do
    if(!node) {
      return;
    }
    //sets head to null - only had 1 in list
    if (!node.next) {
      this.head = null
      return;
    }

    //counts back till we get last 
    while (node.next) {
      prev = node;
      node = node.next;
    }
    //sets previous last '.next' to null
    prev.next = null;
    return this.head;
  }

  insertLast(entry) {
    let node = this.getLast();
    //if there is no head then we set it - otherwise we insert to last
    node ? node.next = new Node(entry) : this.head = new Node(entry);
  }

  getAt(index) {
    let node = this.head;
    //loop through node - 
    //Each loop sets node to next index
    //if there is no next then index given is out of range and we return null
    //once iteration is finish we return node 
    for(let i = 0; i < index; i++) {
      if(node?.next) {
        node = node.next;
      } else {
        return null;
      }
    }
    return node;
  }

  removeAt(index) {
    //Work through step by step - Found this one difficult

    //Head pointed at null - then return
    if(!this.head) {
      return;
    }

    //Remove first in list - edge case due to no previous
    if (index === 0 ) {
      this.head = this.head.next;
      return;
    }

    //find previous
    const previous = this.getAt(index - 1);
    //if index is out of bounds we return - edge case
    if (!previous || !previous.next) {
      return;
    }

    //sets previous to point at the second up from it
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    //Edge cases - check if no head or index = 0 to insert in first location
    if(!this.head || index == 0) {
      this.insertFirst(data, this.head);
      return;
    }

    //Get previous index location or get last node if out of bounds
    let previous = this.getAt(index - 1) || this.getLast();
    previous.next = new Node(data, previous.next)

    // //-- if getLast didn't exist we would do below --
    // let next = this.getAt(index);
    // //if previous is out of bounds - roll back getAt function by 1 till it's not
    // if(!previous) {
    //   let i = 1
    //   while (!previous) {
    //     previous = this.getAt(index - 1 - i)
    //     i++
    //   }
    // }
    // //insert our data
    // previous.next = new Node(data, next)
  }

  
}

module.exports = { Node, LinkedList };