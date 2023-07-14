// Exercício 1: Verificação de login
// Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
// nome de usuário 'admin' e a senha é 'senha123';. Exiba uma mensagem indicando se o login
// foi bem-sucedido ou não.

let prompt = require('prompt-sync')();

// let nome = prompt('digite seu nome ')
// let senha = prompt('digite uma senha ')

// if (nome == 'admin' && senha == 'senha123') {
//     console.log('acesso concedido')
//     }else{
//         console.log('acesso negado')
//     }


// Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia da
// semana e exibe o nome correspondente a esse dia. Considere que 1 representa segunda-feira,
// 2 representa terça-feira e assim por diante.

// let dias = prompt("digite um numero: ");
// switch (dias) {
//     case '1':
//         console.log('domingo')
//         break;

//     case '2':
//         console.log('segunda')
//         break;

//     case '3':
//         console.log('terça')
//         break;

//     case '4':
//         console.log('quarta')
//         break;

//     case '5':
//         console.log('quinta')
//         break;

//     case '6':
//         console.log('sexta')
//         break;

//     case '7':
//         console.log('sabado')
//         break;


//     default:
//         console.log('dia invalido')
//         break;
// }



// Exercício 3: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.

// let num1 = parseInt(prompt('digite um numero '))
// let num2 = parseInt(prompt('digite um numero '))
// let num3 = parseInt(prompt('digite um numero '))

// if (num1 < num2 && num1 < num3) {
//     console.log(' os numeros estão em ordem crescente' + num1 + ' ' + num2 + ' ' +  num3)
// }else{
//     console.log(' os numeros estão em ordem aleatoria' + num1 + ' ' +  num2 + ' ' +  num3)
// }


// Exercício 4: Verificação de idade
// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
// de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.

// let ano_nasc = parseInt(prompt('digite seu ano de nascimento '))
// let ano_atual = 2023
// let validacao = 0

// validacao = ano_atual - ano_nasc

// if (validacao > 18) {
//     console.log('voce é maior de idade' + ' ' + validacao)
// }else{
//     console.log('voce é menor de idade' + ' ' + validacao)
// }


// Exercício 5: Cálculo de desconto progressivo
// Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele
// pague. Faça um programa para loja, que solicite o valor total da compra ao usuário e assim,
// aplique um desconto de acordo com o valor total da compra. Siga a tabela:
// Valor total da compra até R$ 100,00: sem desconto.
// Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
// Valor total da compra acima de R$ 200,00: desconto de 20%.
// Exiba o valor final da compra com o desconto aplicado.
//valor do desconto = preço original x (porcentagem de desconto / 100%)

let valor_gasto = parseFloat(prompt('qual o valor foi gasto '))
let desconto1 = 0
let desconto2 = 1.1
let desconto3 = 1.2
let desconto_total = 0
let des = 0

if (valor_gasto <=100) {
    console.log('voce nao tem desconto, total a pagar ' + valor_gasto)
}
else if(valor_gasto >100 || valor_gasto <= 200){
    desconto_total = valor_gasto * desconto1
    console.log('valor total da compra com desconto ' + desconto_total)
}
else if(valor_gasto >200 ){
    desconto_total = valor_gasto - desconto3
    console.log('valor total da compra com desconto ' + desconto_total)
}


// Exercício 6: Cálculo de IMC
// Escreva um programa que solicita ao usuário seu peso em quilogramas e sua altura em metros.
// Em seguida, calcule o Índice de Massa Corporal (IMC) utilizando a fórmula: IMC = peso / (altura
// * altura). Com base no resultado, exiba uma mensagem indicando a faixa de peso em que o
// usuário se encontra, de acordo com a tabela a seguir:
// IMC menor que 18.5: Abaixo do peso
// IMC de 18.5 a 24.9: Peso normal
// IMC de 25.0 a 29.9: Sobrepeso
// IMC de 30.0 a 34.9: Obesidade grau 1
// IMC de 35.0 a 39.9: Obesidade grau 2
// IMC maior ou igual a 40.0: Obesidade

// let peso = parseFloat(prompt('digite seu peso '))
// let altura = parseFloat(prompt('digite sua altura '))

// let imc = peso/ (altura * altura)

// if (imc < 18.5) {
//     console.log('abaixo do peso' + imc)
// }
// else if (imc > 18.5 && imc == 24.9) {
//     console.log('peso normal ' + imc)
// }
// else if (imc > 25 && imc == 29.9) {
//     console.log('sobrepeso ' + imc)
// }
// else if (imc > 30 && imc == 34.9) {
//     console.log('obesidade grau 1 ' + imc)
// }
// else if (imc > 35 && imc == 39.9) {
//     console.log('obesidade grau 2 ' + imc)
// }else{
//     console.log('obesidade ' + imc)
// }