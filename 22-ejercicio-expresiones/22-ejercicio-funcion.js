'use strict'

let birthday = (a, b) => a - b
let result = birthday(2024, prompt())
alert(result)

let showtable = function (num) {
    let table = []
    for (let i = 1; i <= 11; i++) {
        let multiply1 = num * i
        table.push(" " + num + " x " + i + " = " + multiply1+ " ")
    }
    return table
}
alert(showtable(prompt()))

let calculogrados = (celcius) => 9 / 5 * celcius + 32
let resulta = calculogrados(prompt())
alert(resulta)