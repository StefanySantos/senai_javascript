// 9. Faça um programa que receba um número do usuário e mostre no console a contagem regressiva até 0.

import promptSync from "prompt-sync";
let prompt = promptSync();

export function exercicio5() {
    let numeros = parseInt(prompt('digite um numero '))
    while (numeros < 0) {
        console.log(numeros)
        numeros--;

    }

}