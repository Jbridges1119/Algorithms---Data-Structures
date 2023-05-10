// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  str_arr = str.toLowerCase().split('');
  vowels = ["a","e","i","o","u"];
  vowel_count = 0;

  str_arr.forEach(letter => {
    vowels.includes(letter) ? vowel_count++ : null;
  })

  return vowel_count;
}

function vowels(str) {
  vowels = "aeiou";
  vowel_count = 0;

  for (let letter of str.toLowerCase()){
    vowels.includes(letter) ? vowel_count++ : null;
  }

  return vowel_count;
}

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
module.exports = vowels;