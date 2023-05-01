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
  debugger;
  return str.split('').reduce((rev, char) => char + rev, '');
}

//node inspect reverseString.js  - - Runs file in dubugger mode
//enter REPL into debug> 
//can now look at variables by typing them in
//"c" will cycle through debugger break points