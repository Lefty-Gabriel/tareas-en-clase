'use strict'

function showmessage(){
    alert("Gabriel")
}
showmessage()


function showmessagename(name){
    alert("Gabriel" + name)
}
showmessagename(" Fercho")

function generatetext(){
    return "Hello Gabriel"
}alert(generatetext())

function getAddition(a, b) {
    return a + b
}

let a = Number(prompt("Primer Valor: "))
let b = Number(prompt("Segundo Valor : "))

alert(getAddition(a,b))
