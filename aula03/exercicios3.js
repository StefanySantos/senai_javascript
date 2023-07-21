// FOR
// // 3. Faça um programa que imprima os números ímpares de 0 a 50;

import promptSync from "prompt-sync";
let prompt = promptSync();

export function exercicio3() {

    for (let impares = 1; impares < 50; impares += 2) {
        console.log(impares);

    }
}