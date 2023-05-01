// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('');

  return parseInt(reversed) * Math.sign(n);
}




//The way I figured it out

// function reverseInt(n) {
//   return n >= 0 ? parseInt(n.toString().split('').reverse().join('')) : parseInt('-' + (Math.abs(n)).toString().split('').reverse().join(''));
// }

//better way with the -1
// function reverseInt(n) {
//   return n >= 0 ? parseInt(n.toString().split('').reverse().join('')) : -1 * parseInt((Math.abs(n)).toString().split('').reverse().join(''));
// }
module.exports = reverseInt;