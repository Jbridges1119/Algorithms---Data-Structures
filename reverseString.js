const reverseOne = (str) => {
  return str.split('').reverse().join('');
}
const reverseTwo = (str) => {
  let rev = '';

  for (let char of str) {
    rev = char + rev;
  }
  return rev;
}
const reverseThree = (str) => {
  return str.split('').reduce((rev, char) => char + rev, '');
}