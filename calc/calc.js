(function calc() {
    var x = parseFloat(document.calcForm.inpX.value);
    var y = parseFloat(document.calcForm.inpY.value);
    var spnResult = document.getElementById('spnResult');
    var obj = document.calcForm.operation.value;
    var r;
    switch (obj) {
        case "div":
            var a = x / y;
            r = parseInt(a);
            break;
        case "+":
            r = x + y;
            break;
        case "-":
            r = x - y;
            break;
        case "*":
            r = x * y;
            break;
        case "/":
            r = x / y;
            break;
        default:
            break;
    }
    spnResult.innerHTML = r;
})();
