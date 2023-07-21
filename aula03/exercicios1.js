// // 2. Imprimir números pares de 1 a 10.
import promptSync from "prompt-sync";
let prompt = promptSync();

export function exercicio1() {

    for (let par = 0; par <= 10; par += 2) {
        console.log(par);

    }
}