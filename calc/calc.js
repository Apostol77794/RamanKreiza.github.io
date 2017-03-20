window.onload = function() {
    var btnRun = document.getElementById('btnRun');
    btnRun.onclick = function() {
        var x = parseFloat(document.getElementById('inpX').value);
        var y = parseFloat(document.getElementById('inpY').value);
        var spnResult = document.getElementById('spnResult');
        obj = document.getElementById('operation').value;
        switch (obj) {
            case "div":
                r = x / y | 0;
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
        }
        spnResult.innerHTML = r;
    }
}
