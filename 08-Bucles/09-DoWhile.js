'use strict'

let contador = 0
let premio = 8
let num
do {
    num = Number(prompt("Ingrese el Numero"))
    contador++
    if (num == premio) {
        break
    }
} while (contador != 3)
alert(num == premio ? "Win "+ contador + " intento" : "lose " + contador + " intento")
