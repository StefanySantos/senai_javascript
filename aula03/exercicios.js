//import promptSync from "prompt-sync";

const prompt = require('prompt-sync')();

export function verificarMaiorIdade(){
    function verificarMaiorIdade(){
        console.log('exercicio 5')
    
        let pessoa = {
            nome: "",
            idade: 0
        };
        console.log('sua idade deve ser maior que 18')
    
        do {
            pessoa.idade = parseInt(prompt('digite sua idade '))
            pessoa.nome = prompt('digite seu nome ')
        } while (pessoa.idade < 18);
        console.log('idade valida')
        console.log('objeto', pessoa)
        //console.log(`${pessoa.nome}, sua idade ${pessoa.idade}, é valida`)
    
    }

}
