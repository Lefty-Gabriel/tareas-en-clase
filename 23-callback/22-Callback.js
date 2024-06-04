'use strict'

/*/ declaracion de una funcion
function validatefield(visible, show, hide){
if (visible){
show
}else{
hide();
}
}

//expresion de funcion 
let showfield = function(){
    alert ("visible field")
}

//funcion flecha 
let hidefield=() => alert ("hidden field");

validatefield (false, showfield, hidefield) //callback function
*/
/////////////////////////////////////////////////////////////////////

function add (a,b){
    alert (a+b)
}

function minus (a,b){
    alert(a-b)
}


function calculate(suma, resta){
    let calc= prompt("suma o resta ")
    let num1= prompt("primer valor: ")
    let num2= prompt("segundo valor: ")
    if(calc== "suma"){
        suma(num1, num2)
    }
    else if (calc== "resta") {
        resta(num1, num2)
    }
}


calculate(add, minus) 