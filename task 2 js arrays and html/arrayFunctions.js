'use strict';

function isArray(array) {
  return Object.prototype.toString.call(array) == "[object Array]";
}

console.log("\nisArray");
console.log(isArray([1, 2, 3]));
console.log(isArray(5));

function isArray2(array) {
  return array instanceof Array;
}

console.log("\nisArray2");
console.log(isArray2([1, 2, 3]));
console.log(isArray2(5));

function range(a, b, step) {
  step = step > 0 ? step : 1;
  var newArray = []
  if (typeof b == 'undefined') {
    b = a;
    a = 0;
  }
  for (var i = a; i < b; i += step) {
    newArray.push(i);
  }
  return newArray;
}

console.log("\nRange");
console.log(range(5));
console.log(range(1, 5));
console.log(range(1, 10, 2));
console.log(range(10, 20, -2));

function compact(mas) {
  return mas.filter(function(x) {
    return x;
  });
}

function compactCycly(array) {
  var newArray = [];
  array.forEach(function(item) {
    if (item) {
      newArray.push(item);
    }
  })
  return newArray;
}

console.log("\nCompact");
console.log(compact([1, 2, 3, 0]));
console.log(compact([{}, false, 1, 0]));

console.log("CompactCycly");
console.log(compactCycly([1, 2, 3, 0]));
console.log(compactCycly([{}, false, 1, 0, false]));
console.log(compactCycly([false, 0, 1, {}]));


function sum(array) {
  return array.reduce(function(prev, next) {
    return prev + next;
  })
}

function sumCycle(array) {
  var sum = 0;
  array.forEach(function(item) {
    sum += item;
  });
  return sum;
}

console.log("\nSum");
console.log(sum([1, 2, 3, 0]));

console.log("sumCycle");
console.log(sumCycle([1, 2, 3, 0]));

function unique(array) {
  return array.filter(function(value, index, array) {
    return array.indexOf(value) === index;
  });
}

console.log("\nUnique");
console.log(unique([1, 2, 3, 0, 1, 2]));

function last(array) {
  return array[array.length - 1];
}

console.log("\nLast");
console.log(last([1, 2, 3, 0, 1, 2]));
console.log(last([1]));
console.log(last([]));

function excludeLast(mas, num) {
  num = (typeof num !== "undefined") ? num : 1;
  var res = mas.slice(0, num * -1);
  return res;
}
console.log("\nExcludeLast");
console.log(excludeLast([1, 2, 3, 0, 1, 2]));
console.log(excludeLast([1, 2, 3, 0, 1, 2], 3));
console.log(excludeLast([1, 2, 3, 0, 1, 2], 3));
