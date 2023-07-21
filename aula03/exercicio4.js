import promptSync from "prompt-sync";
let prompt = promptSync();

export function exercicio4() {
   
 let numero = parseInt(prompt("Digite um número: "));

 for(let contador = 0; contador <= 10 ; contador++) {
     console.log ((numero*contador));
 }
}