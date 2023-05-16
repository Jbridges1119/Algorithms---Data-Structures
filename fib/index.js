// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//my attempt
function fibOne(n, arr = [0, 1]) {
  const numOne = arr[arr.length - 1],
        numTwo = arr[arr.length - 2];

  if (arr.length <= n) {
    arr.push(numOne + numTwo);
    return fib(n, arr);
  }

  return arr[n];
}

function memoize(fn) {
  const cache = {};
  //don't know how many arguments this thing will receive
  return function(...args) {
    //if function has been called a second time return carched value
    if (cache[args]) {
      return cache[args];
    }
    //apply - apply() invokes function it's called on and takes an array as its second argument and passes the members of that array as arguments.
    const result = fn.aaply(this, args)
    cache[args] = result;

    return result;
  }
}

//slow recursive runtime
function fibTwo(n) {
  //ends when you have fib(1) (fib(1) = 1) - don't need fib(0) because it = 0
  if (n < 2) {
    return n;
  }
  //returns a total amaount of each fib(1)
  return fib(n - 1) + fib(n - 2)
}

const fibThree = memoize(fibTwo);

module.exports = fib;