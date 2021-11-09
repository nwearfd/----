function add() {
    var first = document.getElementById("Num1").value;
    var second = document.getElementById("Num2").value;
    
    console.log(first);
    console.log(second);

    var addTot = first + second;
    console.log(addTot);
    document.getElementById("result").innerHTML = parseInt(first) + parseInt(second);
}
function subtract() {
    var first = document.getElementById("Num1").value;
    var second = document.getElementById("Num2").value;
    
    console.log(first);
    console.log(second);

    var subtTot = first - second;
    console.log(subtTot);
    document.getElementById("result").innerHTML = parseInt(first) - parseInt(second);
    
}

function multi() {
    var first = document.getElementById("Num1").value;
    var second = document.getElementById("Num2").value;
    
    console.log(first);
    console.log(second);

    var multiTot = first * second;
    console.log(multiTot);
    document.getElementById("result").innerHTML = parseInt(first) * parseInt(second);
    
}

function divide() {
    var first = document.getElementById("Num1").value;
    var second = document.getElementById("Num2").value;
    
    console.log(first);
    console.log(second);

    var divTot = first / second;
    console.log(divTot);
    document.getElementById("result").innerHTML = parseInt(first) / parseInt(second);
    
}