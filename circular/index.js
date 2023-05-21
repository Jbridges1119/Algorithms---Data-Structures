// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  //everything performs the same as midpoint except we compare on each iteration.
  //if they are the same then it's circular
  //if we get null for any fast values then it ends
  let slow = list.getFirst();
  let fast = list.getFirst();
   
  //check for nulls (ends) - returns false
  while (fast.next && fast.next.next) {
    //move slow up 1; move fast up two
    slow = slow.next;
    fast = fast.next.next;
    //check for same values (circular) - returns true
    if (slow == fast) {
      return true;
    }
  }

  return false;
}

module.exports = circular;