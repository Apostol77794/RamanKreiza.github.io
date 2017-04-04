function iterSearch(array, number) {
  var left = 0,
    right = array.length,
    mid;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (number <= array[mid]) {
      right = mid
    } else {
      left = mid + 1;
    }
  }
  if (array[left] === number) {
    return left;
  } else {
    return -1;
  }
}

console.log('iterSearch([1,2,3,4,5,15,25,30], 4) -> ' + iterSearch([1, 2, 3, 4, 5, 15, 25, 30], 4));
console.log('iterSearch([1,2,3,4,5,15,25,30], 1) -> ' + iterSearch([1, 2, 3, 4, 5, 15, 25, 30], 1));
console.log('iterSearch([1,2,3,4,5,15,25,30], 30) -> ' + iterSearch([1, 2, 3, 4, 5, 15, 25, 30], 30));
console.log('iterSearch([1], 30) -> ' + iterSearch([1], 30));
console.log('iterSearch([1], 1) -> ' + iterSearch([1], 1));
console.log('iterSearch([1,2], 1) -> ' + iterSearch([1, 2], 1));
console.log('iterSearch([], 1) -> ' + iterSearch([], 1));
console.log('iterSearch([2, 5, 2], 1) -> ' + iterSearch([2, 5, 2], 1));
console.log('iterSearch([2, 5, 2], 5) -> ' + iterSearch([2, 5, 2], 5));
console.log('iterSearch([2, 5, 2], 2) -> ' + iterSearch([2, 5, 2], 2));

function recSearchWrap(array, number) {
  return recSearch(array, number, 0, array.length);
}

function recSearch(array, number, left, right) {
  var mid;
  if (left < right) {
    mid = Math.floor((left + right) / 2);
    if (number <= array[mid]) {
      right = mid
    } else {
      left = mid + 1;
    }
    return recSearch(array, number, left, right);
  }
  if (array[left] === number) {
    return left;
  } else {
    return -1;
  }
}

console.log('\nrecSearchWrap([1,2,3,4,5,15,25,30], 4) -> ' + recSearchWrap([1, 2, 3, 4, 5, 15, 25, 30], 4));
console.log('recSearchWrap([1,2,3,4,5,15,25,30], 1) -> ' + recSearchWrap([1, 2, 3, 4, 5, 15, 25, 30], 1));
console.log('recSearchWrap([1,2,3,4,5,15,25,30], 30) -> ' + recSearchWrap([1, 2, 3, 4, 5, 15, 25, 30], 30));
console.log('recSearchWrap([1], 30) -> ' + recSearchWrap([1], 30));
console.log('recSearchWrap([1], 1) -> ' + recSearchWrap([1], 1));
console.log('recSearchWrap([1,2], 1) -> ' + recSearchWrap([1, 2], 1));
console.log('recSearchWrap([], 1) -> ' + recSearchWrap([], 1));
console.log('recSearchWrap([2, 5, 2], 1) -> ' + recSearchWrap([2, 5, 2], 1));
console.log('recSearchWrap([2, 5, 2], 5) -> ' + recSearchWrap([2, 5, 2], 5));
console.log('recSearchWrap([2, 5, 2], 2) -> ' + recSearchWrap([2, 5, 2], 2));
