import promptSync from "prompt-sync";
import { exercicio1 } from "./exercicios1.js";
import { exercicio2 } from "./exercicio2.js";
import { exercicio3 } from "./exercicio3.js";
import { exercicio4 } from "./exercicio4.js";
import { exercicio5 } from "./exercicio5.js";
import { exercicio6 } from "./exercicio6.js";

let prompt = promptSync();

let resposta;

do {
    console.log("Bem vindo ao menu de exercicios!")
    resposta = prompt("Digite um número de 1 à 10, para escolher um exercicio, ou 'sair' para interromper o programa: ")

    switch (resposta) {
        case "1":
            // Chamar o exercicio 1
            console.log ("Você escolheu o exercicio 1!")
            exercicio1()
        break;
        case "2":
             // Chamar o exercicio 2
             console.log ("Você escolheu o exercicio 2!")
             exercicio2()
        break;
        case "3":
            // Chamar o exercicio 3
            console.log ("Você escolheu o exercicio 3!")
            exercicio3()
        break;
        case "4":
            // Chamar o exercicio 4
            console.log ("Você escolheu o exercicio 4!")
            exercicio4()
        break;
        case "5":
            // Chamar o exercicio 5
            console.log ("Você escolheu o exercicio 5!")
            exercicio5()
        break;
        case "6":
            // Chamar o exercicio 6
            console.log ("Você escolheu o exercicio 6!")
            exercicio6()
        break;
        default:
            console.log("Você não escolheu nenhum exercicio")
            break;
    }
} while (resposta != "sair");