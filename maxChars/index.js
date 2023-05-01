// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let letterCount = {};
  let mostUsed = '';
  let count = 0;

  for (let letter of str) {
      letterCount[letter] = letterCount[letter] ?  letterCount[letter] + 1 :  letterCount[letter] = 1;
  }
  
  for (let char in letterCount) {
    if (count < letterCount[char]) {
      mostUsed = char;
      count = letterCount[char];
    }  
  }
  return mostUsed
}

module.exports = maxChar;