'use strict';

function isArray(val) {
  return {}.toString.call(val) == "[object Array]";
}

console.log("\nisArray");
console.log(isArray([1, 2, 3]));
console.log(isArray(5));

function isArray2(val) {
  return val instanceof Array;
}

console.log("\nisArray2");
console.log(isArray2([1, 2, 3]));
console.log(isArray2(5));

function range(a, b, step = 1) {
  var mas = []
  // condition for one argument
  if (typeof b == 'undefined') {
    b = a;
    a = 0;
  }
  for (var i = a; i < b; i += step) {
    mas.push(i);
  }
  return mas;
}

console.log("\nRange");
console.log(range(5));
console.log(range(1, 5));
console.log(range(1, 10, 2));

function compact(mas) {
  return mas.filter(function(x) {
    return !!(x);
  });
}

function compactCycly(mas) {
  var mas2 = [];
  mas.forEach(function(item) {
    if (Boolean(item).valueOf()) {
      mas2.push(item);
    }
  })
  return mas2;
}

console.log("\nCompact");
console.log(compact([1, 2, 3, 0]));
console.log(compact([{}, false, 1, 0]));

console.log("CompactCycly");
console.log(compactCycly([1, 2, 3, 0]));
console.log(compactCycly([{}, false, 1, 0, false]));
console.log(compactCycly([false, 0, 1, {}]));


function sum(mas) {
  return mas.reduce(function(prev, next) {
    return prev + next;
  })
}

function sumCycle(mas) {
  var sum = 0;
  mas.forEach(function(item) {
    sum += item;
  });
  return sum;
}

console.log("\nSum");
console.log(sum([1, 2, 3, 0]));

console.log("sumCycle");
console.log(sumCycle([1, 2, 3, 0]));

function unique(mas) {
  return mas.filter(function(value, index, array) {
    return array.indexOf(value) === index;
  });
}

console.log("\nUnique");
console.log(unique([1, 2, 3, 0, 1, 2]));

function last(mas) {
  return mas[mas.length - 1];
}

console.log("\nLast");
console.log(last([1, 2, 3, 0, 1, 2]));
console.log(last([1]));
console.log(last([]));

function excludeLast(mas, num = 1) {
  var res = mas.slice(0, num * -1);
  return res;
}
console.log("\nExcludeLast");
console.log(excludeLast([1, 2, 3, 0, 1, 2]));
console.log(excludeLast([1, 2, 3, 0, 1, 2], 3));
console.log(excludeLast([1, 2, 3, 0, 1, 2], 3));
