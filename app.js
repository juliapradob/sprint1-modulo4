import readlineSync from "readline-sync";

//Array inicial vazio que vai guardar as respostas do usuário
let resposta = [];

//Loop de repetição para pegar as respostas e inserir no array
while (true) {
    //Método da documentação do Realine para conseguir inserir input no node.js
    let input = readlineSync.question('Insira uma propriedade CSS:');
    //Condicional com break para caso o input seja igual a "sair" e cancelar a aplicação
    if (input.toLowerCase() === 'sair') {
        break;
    }
    resposta.push(input);
}

//Respostas do usuário em ordem alfabética com o sort()
console.log(array.sort());
