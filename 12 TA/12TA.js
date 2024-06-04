'Use strict'
function hablar() {
    alert("Hola");
}

function add(a, b) {
    let resultado = a + b
    alert("Primer valor: " + a + " y segundo valor: " + b + " es " + resultado);
}

function generatenumber() {
    return Math.random()
}
let randomnumber = generatenumber()
alert(randomnumber)

function sumar(a, b) {
    let resultado = a += b
    return resultado
}
let valorA = 5
let valorB = 3
let summation = multiplicar(valorA, valorB);
alert("The result of: ", valorA, "plus", valorB, "is", summation)
