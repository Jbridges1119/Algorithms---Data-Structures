// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'
//   pyramid(5)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       ' ####### '
function pyramid(n) {
  let row_array = " ".repeat(n == 2 ? n + 1 : n + n - 1).split(""),
      middle = Math.floor(row_array.length / 2),
      step = "#";

  for (let i = 0; i <= middle; i++) {
    row_array[middle - i] = step;
    row_array[middle + i] = step;

    console.log(row_array.join(""));
  }
  
}

function pyramidRec(n, pyra = "", step = 0) {
  let count = n == 2 ? n + 1 : n + n - 1;

  if (step == 0) {
    pyra = " ".repeat(count).split('');
  }

  let middle = Math.floor(pyra.length / 2);

  if (step > middle) {
    return;
  }

  pyra[middle + step] = "#";
  pyra[middle - step] = "#";
  step++;
  console.log(pyra.join(""));
  
  pyramidRec(n, pyra, step);
}

module.exports = pyramidRec;