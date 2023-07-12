//console.log('hello world');

let prompt = require('prompt-sync')();

//let nome = prompt('Digite seu nome');
//console.log('Seu nome é: ' + nome);

//let numero = prompt('digite um numero: ');
//if (numero > 10) {
//    console.log('numero maior de 10')
//}
//else if (numero == 10){
//    console.log("igual a 10")
//}
//else{
//    console.log('menor que 10')
//}

//let letra = prompt("digite uma letra: ");
//if (letra == 'a') {
//    console.log('letra a')
//} else if (letra == 'b') {
//    console.log('letra b')
//} else if (letra == 'c') {
//    console.log('letra c')
//} else {
//    console.log('letra diferente')
//}

// let letra = prompt("digite uma letra: ");
// switch (letra) {
//     case 'a':
//         console.log('letra a')
//         break;

//     case 'b':
//         console.log('letra b')
//         break;

//     case 'c':
//         console.log('letra c')
//         break;

//     default:
//         console.log('outra letra')
//         break;
// }

// let pNum = parseFloat(prompt('digite um numero '));
// let sNum = parseFloat(prompt('digite um numero '));

// let soma = pNum + sNum;

// if (soma > 10) {
//     console.log('soma maior que 10 ' + soma)
// }else if (soma == 10) {
//     console.log('soma igual a 10 ' + soma)
// }else{
//     console.log('soma menor que 10 ' + soma)
// }

// console.log(soma);

// let letra = prompt('digite uma letra ')
// let numero = prompt('digite uma numero ')

// if (letra == 'a' && numero == '1') {
//     console.log('acertou')
    
// }

// let numero = parseInt(prompt('digite uma numero '));
// parOuImpar = numero % 2;

// if (parOuImpar == 0) {
//     console.log('numero par');
// }else{
//     console.log('numero impar')
// }


//Faça um programa que receba o nome, cargo e salário de um
// funcionário. Se o funcionário ganhar abaixo de 1000 reais, calcule o
// salário acrescido de 10%. Ao final exiba o nome, o cargo e o salário
// desse funcionário.

let nome = prompt('Digite seu nome: ');
let cargo = prompt('Digite seu cargo: ');
let salario = parseFloat(prompt('Digite seu salario: '));

if (salario < 1000) {
    const acrescimo = salario * 1.1
    console.log("Seu nome é: " + nome, " seu cargo é: " + cargo, "e o seu salario com acrescimo de 10% é: " + acrescimo)
} else {
    console.log("Seu nome é: " + nome, " seu cargo é: " + cargo, "e o seu salario é:" + salario)
}



// Uma empresa decide dar aumento de 30% aos funcionários cujo
// salário é inferior a 500 reais. Escreva um programa que receba o
// salário de um funcionário e imprima o valor do salário reajustado ou
// uma mensagem caso o funcionário não tenha direito a aumento.

let salario = parseFloat(prompt('digite um salario: '));
const base = 500;

if (salario <= base) {
    const aumento = 1.3 * salario
    console.log('seu salário com acrescimo de 30% é: ' + aumento)
}


// Faça um programa que receba um número inteiro do usuário e informe
// se este número é positivo ou negativo.
// let numero = parseInt(prompt('digite um numero '))

// if (numero < 0) {
//     console.log('numero negativo')
// }else{
//     console.log('numero positivo')
// }



// 4. Faça um programa que receba um número do usuário e informe
// se este número é par ou ímpar.
// let numero = parseInt(prompt('digite um numero '));
// parOuImpar = numero % 2;

// if (parOuImpar == 0) {
//     console.log('numero par');
// }else{
//     console.log('numero impar')
// }


// 5. Faça um programa receba dois valores e imprima qual é o maior
// número digitado.
// let n1 = parseInt(prompt('digite um numero '))
// let n2 = parseInt(prompt('digite um numero '))

// if(n1 > n2){
//     console.log(n1)
// }else{
//     console.log(n2)
// }



// 6. Faça um programa que receba 4 notas de um aluno, calcule e
// imprima a média aritmética das notas e a mensagem de APROVADO
// para média superior ou igual a 7,0 RECUPERAÇÃO para notas entre
// 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.

// let nota1 = parseFloat(prompt("digite a primeira nota: "))
// let nota2 = parseFloat(prompt("digite a primeira segunda: "))
// let nota3 = parseFloat(prompt("digite a primeira terceira: "))
// let nota4 = parseFloat(prompt("digite a primeira quarta: "))
// let media = 0

// media = (nota1 + nota2 + nota3 + nota4)/4;

// if (media >= 7) {
//     console.log('aprovado' + media)
// }else if (media <5 && media >=5){
//     console.log('recuperacao' + media)
// }else{
//     console.log('reprovado' + media)
// }







// npm install > cria a pasta node_modules

// pasta .gitignore deve ser criada na raiz da pasta e dentro dela se coloca tudo que não se 'quer' que suba no git

// npm install prompt-sync > da para usa o prompt como entrada e saida

// entrada e saida
// é necessario entrar na pasta e executar o arquivo nome.js
// let prompt = require('prompt-sync')(); > usar para entrada de dados