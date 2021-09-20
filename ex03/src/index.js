//
var myGlobalVariable = 10;

function function1() {
    notGlobalVariable = 5
}
//
function function2() {
    var result = "";
    if (typeof myGlobalVariable != "undefined") {
        result += "myGlobalVariable: " + myGlobalVariable;
    }
    if (typeof notGlobalVariable != "undefined") {
        result += " notGlobalVariable: " + notGlobalVariable;
    }
    console.log(result);
}

function1();
function2();