// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
  //remember the both start on same point but fast moves 2 forward
  let slow_index = 0
  let fast_index = 2

  while (list.getAt(fast_index - 1) || list.getAt(fast_index)) {
    list.getAt(fast_index) && slow_index++;
    fast_index += 2;
  }
  return list.getAt(slow_index)
}

function midpoint2(list) {
  //start both at first node
  let slow = list.getFirst();
  let fast = list.getFirst();

  //if both 2 ahead of fast exist ? adjust both variables : done with loop -return slow value
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow
}


module.exports = midpoint;