// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  //we have a max value and our node is greater than max 
  if (max !== null && node.data > max) {
    return false;
  }
  //we have a min value and our node is less than min
  if (min !== null && node.data < min) {
    return false;
  }

  //we verify node exists on left/right AND if the data is valid (min < data < max)
  //we are setting our min and max when we call our recursive function
  //We walk through the tree left side first becasue it's the first if statement
  //this is a depth search
  //only called when 'node exists' AND if validate returns FALSE
  if (node.left && !validate(node.left, min, node.data)){
    return false;
  }
  if (node.right && !validate(node.right, max, node.data)) {
    return false;
  }

  return true;
}

module.exports = validate;