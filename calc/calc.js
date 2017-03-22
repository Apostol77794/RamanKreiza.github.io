    function calc() {
        var x = parseFloat(document.form.inpX.value);
        var y = parseFloat(document.form.inpY.value);
        var spnResult = document.getElementById('spnResult');
        var obj = document.form.operation.value;
        var r;
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
                break;
        }
        spnResult.innerHTML = r;
    }
