function isArray(val) {
    var toString = {}.toString;
    return toString.call(val) == "[object Array]";
}

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

console.log(isArray2([1, 2, 3]));
console.log(isArray2(5));

function range(num) {

}

function range(start, end) {

}

function range(start,
    end,
    multiplier) {

}

function compact(mas) {

}

function compactCycle(mas) {

}

function sum(mas) {

}

function sumCycle(mas) {

}

function unique(mas) {

}

function excludeLast(mas,
    num = 1) {

}

function functionName() {

}
