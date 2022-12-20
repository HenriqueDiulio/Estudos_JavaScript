
// INTRODUÇÃO JS

// declaracao 
var nome = "Henrique";
var idade = 18;
var idade2 = 10;
var frase = "Japao e o melhor time do mundo"

// alert emite um alerta na sua tela;
alert("Seja Bem vindo a minha página "+nome+"!");


// efetua concatenacao entre variaveis
alert(idade + idade2);

console.log(nome);
console.log(idade);

// replace fazer alteracoes na string.
console.log(frase.replace("Japao","Brasil"));

// to Upper case e lower case funcionam aqui. 
console.log(frase.toUpperCase());


// ARRAY LIST


// craindo uma lista
var lista = ["maça", "Péra", "Laranja"];

// listando o item de pocisão 1
console.log(lista[1]);

// adcioanando mais um item
lista.push("uva");
console.log(lista);

// remorer item
lista.pop("uva");
console.log(lista);

// ver o temanha da lista
console.log(lista.length);

//para imprimir, e mostra item de pocicao 1
console.log(lista.toString()[1]);  

// imprime os item e separar por espaços 
console.log(lista.join("-"));s

// dicionario
var fruta = {nome:"Uva", cor:"roxa"};
console.log(fruta.nome);

// lista de dicionario
var frutas = [{nome:"Uva", cor:"roxa"}, {nome:"laranja", cor:"laranja"}];
console.log(frutas);
alert(frutas[1].nome);

// Recebendo valores e armazenado
var idade3 = prompt("Qual sua idade: ");
var nome;



// ESTRUTURA DE REPETIÇÃO


if (idade >= 18){
    alert("Maior de idade");
}
    else{
    alert("Menor de idade");
};


// ESTRUTURA DE REPETIÇÃO


var count = 0;
while (count <= 5) {
    console.log(count);
    count++;
};


var count2;
 
for (count2 = 0, count2 <=5, count2++){   
    console.log(count2); 
};


// FUNÇÃO DATE


var d  = new Date();
alert(d.getDate());
alert(d.getHours());  


// FUNÇÕES


function soma(n1,n2){
    return n1 + n2;
};

alert(soma(5,10));


//VALIDADOR DE IDADE USANDO FUNÇÃO
var idade;
var validar;

idade = prompt("Qual sua idade? ");

function validarIdade(idade) {

    if (idade >= 18) {
        validar = "maior de idade";
    } else {
        validar = "menor de idade";
    };
    return validar
};
console.log(validarIdade(idade)+"\nSua idade é: "+idade);
