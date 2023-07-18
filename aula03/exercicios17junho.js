let prompt = require('prompt-sync')();

// FOR
// 1. Imprimir números de 1 a 10 utilizando o loop for

// for (let numeros = 0; numeros <= 10; numeros++) {
//     console.log(numeros)

// }



// // 2. Imprimir números pares de 1 a 10.
// for (let par = 0; par <=10 ; par += 2) {
//     console.log(par);

// }


// // 3. Faça um programa que imprima os números ímpares de 0 a 50;
// for (let impares = 1; impares < 50; impares +=2) {
//     console.log(impares);

// }



// 4. Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.
// let numero = parseInt (prompt("digite um número que deseja saber a tabuada: "));
 
// let tabuada;

// for (let contador = 1 ; contador <= 10; contador++) {
   
//    tabuada = (numero * contador);

//    console.log(  + numero +"x" + contador + "=" + tabuada);
   
// }




// 5. Imprimir os primeiros 10 números da sequência de Fibonacci.
// let num1 = 0;
// let num2 = 1;
// let auxiliar;

//  for (var i = 0; i <= 10; i++)
//  {
//     auxiliar = num1;
//     num1 = num2;
//     num2 = num1 + auxiliar;

//     console.log(num2);
    
    
//  }




// 6. Imprimir números pares de 0 a 20 utilizando o loop while
// let numero = 0;
// while (numero <= 20) {

//     console.log(numero);
    
//     numero +=2;

// }
// console.log("ok");


// 7. Calcular a soma dos números de 1 a 100 utilizando a estrutura while.
// let numero1 = 0;
// let numuro2 = 1;
// let soma;

// do{

// soma = numero1 + numuro2;

// console.log(soma);
// numero1 ++
// numuro2 ++

// }while (soma <= 100 );




// 8. Faça um programa que receba a idade do usuário, enquanto a
// resposta do usuário for menor que 18 anos continue a solicitar a
// idade e mostre uma mensagem quando a idade do usuário for
// maior que 18.
// let idade;
// do {
    
// idade = prompt("digite uma idade: ");

// } while (idade < 18);

// console.log( "maior de idade!");



// 9. Faça um programa que receba um número do usuário e mostre no console a contagem regressiva até 0.
// let numeros = parseInt(prompt('digite um numero '))
// while (numeros < 0) {
//     console.log(numeros)
//     numeros--;
    
// }


// 10. Faça um programa que receba um número do usuário e continue
// a pedir o número se o numero for diferente de 0.

// let numero;
// do {

//     numero = parseInt(prompt('digite um numero '))

// } while (numero != 0);
// console.log('ok')