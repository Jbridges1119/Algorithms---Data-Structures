// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  //set slow at start and fast (n) forward;
  let slow = list.getFirst();
  let fast = list.getAt(n);

  //if fast.next is null then we know slow is n away from end.
  //this accounts for out-of-range because if fast.next is null right away then slow is the most away from the end it can be.
  while (fast.next) {
    //move both up one and re-check with while loop.
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

//alternate method of setting fast (n) forward from slow
function fromLast2(list, n) {
    let slow = list.getFirst();
    let fast = list.getAt(n);
  
    //most fast (n) times forward to start checks
    while (n > 0) {
      fast = fast.next;
      n--;
    }

    while (fast.next) {
      slow = slow.next;
      fast = fast.next;
    }
  
    return slow;
}

module.exports = fromLast;