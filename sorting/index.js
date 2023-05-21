// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let x = 0; x < arr.length; x++) {
      if (arr[x] > arr[x + 1]) {
        let tempValue = arr[x + 1];
        arr[x + 1 ] = arr[x];
        arr[x] = tempValue;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;

    for (let x = i+1; x < arr.length; x++) {
      if (arr[x] < arr[indexOfMin]) {
        indexOfMin = x;
      }
    }
    if (indexOfMin !== i) {
      let tempValue = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = tempValue;
    }
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  } 

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  //left coming first is meaningless because it will be empty if right still has values
  return [...results, ...left, ...right];

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };