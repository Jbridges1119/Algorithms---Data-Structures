// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  //setup our stopper value after head - we are only looking at the parent of root (think left to right)
  const node_arr = [root, 'stop'];
  const answer_arr = [];
  let counter = 0;

  while(node_arr.length > 1) {
    let node = node_arr.shift();

    //if we get to our stop value - have our row counter and add it into our answer_arr
    if (node == 'stop') {
      node_arr.push('stop');
      answer_arr.push(counter);
      counter = 0
    } else {
      node_arr.push(...node.children);
      counter++
    }
  }
  answer_arr.push(counter);
  return answer_arr;
}

//this is a cleaner way to format this function - allows us to remove duplicate code due to setting up our answer_arr during the while loop
function levelWidth2(root) {
  const node_arr = [root, 'stop'];
  const answer_arr = [0];

  while(node_arr.length > 1) {
    let node = node_arr.shift();

    if (node == 'stop') {
      node_arr.push('stop');
      answer_arr.push(0);
    } else {
      node_arr.push(...node.children);
      answer_arr[answer_arr.length - 1]++
    }
  }
  return answer_arr;
}

module.exports = levelWidth;