function sum(a, b) {
    var res = a + b;
    return res;
};
console.log("SUM");
console.log(sum(2, 5));
console.log(sum(-2, 5));
console.log(sum(true, 5));
console.log(sum(false, 5));
try {
    console.log(sum(udefined, 5));
} catch (e) {
    console.log("error");
};
console.log(sum(NaN, 5));
console.log(sum('2', 5));
console.log(sum('2', '5'));

function minus(a, b) {
    var res = a - b;
    return res;
};
console.log("MINUS");
console.log(minus(2, 5));
console.log(minus(-2, 5));
console.log(minus(true, 5));
console.log(minus(false, 5));
try {
    console.log(minus(udefined, 5));
} catch (e) {
    console.log("error");
};
console.log(minus(NaN, 5));
console.log(minus('2', 5));
console.log(minus('2', '5'));

function multiply(a, b) {
    var res = a * b;
    return res;
};
console.log("MULTIPLY");
console.log(multiply(2, 5));
console.log(multiply(-2, 5));
console.log(multiply(true, 5));
console.log(multiply(false, 5));
try {
    console.log(multiply(udefined, 5));
} catch (e) {
    console.log("error");
};
console.log(multiply(NaN, 5));
console.log(multiply('2', 5));
console.log(multiply('2', '5'));

function div(a, b) {
    var res = a / b;
    return res;
};
console.log("DIV");
console.log(div(2, 5));
console.log(div(-2, 5));
console.log(div(true, 5));
console.log(div(false, 5));
try {
    console.log(div(udefined, 5));
} catch (e) {
    console.log("error");
};
console.log(div(NaN, 5));
console.log(div('2', 5));
console.log(div('2', '5'));

function div(a, b) {
    var res = a / b;
    return parseInt(res);
};
console.log("DIV");
console.log(div(2, 5));
console.log(div(-2, 5));
console.log(div(5, 5));
console.log(div(5, 2));
console.log(div(true, 5));
console.log(div(false, 5));
try {
    console.log(div(udefined, 5));
} catch (e) {
    console.log("error");
};
console.log(div(NaN, 5));
console.log(div('2', 5));
console.log(div('2', '5'));
