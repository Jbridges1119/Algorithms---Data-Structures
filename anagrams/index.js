// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const wordOne = stringA.replace(/[^a-zA-Z]+/g, "").toLowerCase();
  const wordTwo = stringB.replace(/[^a-zA-Z]+/g, "").toLowerCase();
  const wordObjOne = {};
  const wordObjTwo = {};

  if (wordOne.length !== wordTwo.length) {
    return false;
  }

  for (let char of wordOne) {
    wordObjOne[char] ? wordObjOne[char]++ : wordObjOne[char] = 1;
  }

  for (let char of wordTwo) {
    wordObjTwo[char] ? wordObjTwo[char]++ : wordObjTwo[char] = 1;
  }
  
  for (let letterCount in wordObjOne) {
    if (wordObjOne[letterCount] !== wordObjTwo[letterCount]) {
      return false;
    }
  }
  return true;
}

function anagramsBetter(stringA, stringB) {
  const charMapA = buildCharMap(stringA);
  const charMapB = buildCharMap(stringB);

  //check length with Onject.keys
  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false;
  }

  for (let letterCount in wordObjOne) {
    if (wordObjOne[letterCount] !== wordObjTwo[letterCount]) {
      return false;
    }
  }
  return true;
}
//helper funtion
const buildCharMap = (str) => {
  const charMap = {};

  for (let char of str.replace(/[^a-zA-Z]+/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

//his second way - probably the way to rememeber
function anagramsTwo(stringA, stringB) {
  return sortString(stringA) === sortString(stringB);
}
//helper funtion
const sortString = (str) => {
  //sort the string to alphabetical order
  return str.replace(/[^a-zA-Z]+/g, "").toLowerCase().split('').sort().join('');

}

module.exports = anagrams;