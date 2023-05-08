// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function ssteps(n) {
  let steps = " ".repeat(n).split("");
  let step_symbol = "#";

  for (let i = 0; i < n; i++) {
    steps[i] = step_symbol;
    
    console.log(steps.join(""));
  }
}

function steps(n, row_num = 0, steps = '') {
  if (row_num == n) {
    return;
  }

  if (steps.length == n) {
    console.log(steps);
    row_num++
    return steps(n, row_num);

  } 
  if (steps.length <= row_num) {
    steps += "#";
  } else {
    steps += " ";
  } 
  
  return steps(n, row_num, steps);
}

module.exports = steps;