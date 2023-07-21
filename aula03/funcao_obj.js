import promptSync from "prompt-sync";
import { verificarMaiorIdade } from "./exercicios.js";

const prompt = promptSync();

//menu para escolher 

let exercicio;
let continuar;

do {

    exercicio = parseInt(prompt('digite um numero que represente um exercicio 1 a 4 '))

    switch (exercicio) {
        case 1:
            helloWorld('hello world')
            break;

        case 2:
            let aluno = {
                nome: 'stefany',
                idade: 23,
                hardSkills: ['figma', 'html', 'css', 'web responsivo']
            }
            //acessando objeto pela propriedade
            console.log(aluno.nome, aluno.idade, aluno.hardSkills)
            //exibindo objeto inteiro
            console.log('objeto aluno', aluno)

            break;

        case 3:
            verificarMaiorIdade();
        break;

        default:
            console.log('digite um numero de 1 a 4')
            break;
    }


    // Atendimento via tickets utilizando o Jira Service Management , diagnósticos de bugs/ incidentes, documentação interna 'confluence/ notion', consu com mongoDB, Postgres SQL, Jira Service Management, Retool.

    continuar = prompt('deseja continuar ver outros exercicios? Digite s para `sim` e n para `nao`').toLocaleUpperCase();

} while (continuar === 's');

function helloWorld(frase) {

    console.log(frase)
}