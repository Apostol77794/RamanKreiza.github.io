'use strict';

function isArray(val) {
    var toString = {}.toString;
    return toString.call(val) == "[object Array]";
}

console.log("\nisArray");
console.log(isArray([1, 2, 3]));
console.log(isArray(5));

function isArray2(val) {
    /*var something = [1, 2, 3];

    if (something.splice) {
      alert( 'массив!' );
    }*/

    var arr = new Array();
    return val instanceof Array;
}

console.log("\nisArray2");
console.log(isArray2([1, 2, 3]));
console.log(isArray2(5));

function range() {
    var mas = [];
    switch (arguments.length) {
        case 1:
            for (var i = 0; i < arguments[0]; i++) {
                mas.push(i);
            }
            break;
        case 2:
            for (var i = arguments[0]; i < arguments[1]; i++) {
                mas.push(i);
            }
            break;
        case 3:
            for (var i = arguments[0]; i < arguments[1]; i = i + arguments[2]) {
                mas.push(i);
            }
            break;
        default:
    }
    return mas;
}

console.log("\nRange");
console.log(range(5));
console.log(range(1, 5));
console.log(range(1, 10, 2));

function compact(mas) {
    return mas.filter(function(x) {
        return Boolean(x).valueOf() === true;
    });
}

function compactCycly(mas) {
    var mas2 = [];
    mas.forEach(function(item) {
        if (Boolean(item).valueOf() === true) {
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

function excludeLast(mas,
    num = 1) {
    mas.length -= num;
    return mas;
}
console.log("\nExcludeLast");
console.log(excludeLast([1, 2, 3, 0, 1, 2]));
console.log(excludeLast([1, 2, 3, 0, 1, 2], 3));
