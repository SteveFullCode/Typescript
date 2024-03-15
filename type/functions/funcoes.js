"use strict";
function login(username) {
    let message = "Bem vindo: " + username;
    console.log(message);
    return true;
}
const retornoFuncao = login("steve");
console.log(retornoFuncao);
//================================================================================================================
let n1 = 10;
//let n2: string = "25"
let n2 = 10;
//function soma(valor1: number, valor2: number): number {
//let soma = valor1 + valor2;
//return soma;
//}
//console.log(soma(n1, n2));
function soma(valor1, valor2) {
    let soma = valor1 + valor2;
    if (soma > 20) {
        return "Maior que 20";
    }
    if ((soma = soma)) {
        return `Soma e ${soma}`;
    }
    else {
        return "Menor que 20";
    }
}
console.log(soma(n1, n2));
