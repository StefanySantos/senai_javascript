// let nomes = ['alana', 'alexia', 'samantha', 'thiago', 'odirley']

// for (let contador = 0; contador < nomes.length; contador++) {
//     const cadaElemento = nomes[contador];
//     console.log(cadaElemento)

// }

//para ler lista
// nomes.forEach(cadaElemento => {
//     console.log(cadaElemento)
// })

//lista e mostra o indice
// nomes.forEach(cadaElemento, posicao => {
//     console.log(posicao, cadaElemento)
// })


//clica antes da palavra pressiona o alt e clica em todas palavras iguais
//const frutas = ['pera', 'uva', 'maça', 'salada mista']

// for (let contador = 0; contador < frutas.length; contador++) {
//     const cadaElemento = frutas[contador];
//     console.log(contador, cadaElemento)

// }

// frutas.forEach(cadaElemento => {
//     console.log(cadaElemento)
// })


//Sobre While
// let salario = 5000;

// while (salario < 5000) {
//     salario = salario + 100
//     //salario += 100

//     console.log('seu salario ainda é ' + salario)
// }


// let salario = 1000;
// let contador = 0

// while (salario < 5000) {
//     //salario = salario + 100
//     salario += 100
//     contador++
//     console.log('seu salario ainda é ' + salario)
// }
// console.log(contador)


//Sobre doWhile mostra no minimo uma vez
// let salario = 1000

// do {
//     salario +=100
//     console.log('seu salario ainda é ' + salario)

// } while (salario < 1000);


//sobre o doWhile a variavel deve ser criada antes de iniciar

// let prompt = require('prompt-sync')();

// let numeroEscolhido;
// do {
//     numeroEscolhido = prompt('digite um numero ')


// } while (numeroEscolhido != '5');


let senha;
do {
    senha = prompt('digite a senha ')

    if (senha != '123') {
        
        console.log('senha incorreta')
    }

} while (senha != '123');
console.log('senha correta')