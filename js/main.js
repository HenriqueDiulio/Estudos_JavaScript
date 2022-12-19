/*
// declaracao 
var nome = "Henrique";
var  idade  = 29;
var idade2 = 10;
var frase = "Japao e o melhor time do mundo"

// alert emite um alerta na sua tela;
alert("Seja Bem vindo a minha página "+nome+"!");


// ele tamb efetua concatenacao entre variaveis
alert(idade + idade2);

console.log(nome);
console.log(idade);

// replace fazer alteracoes na string.
console.log(frase.replace("Japao","Brasil"));

// to Upper case e lower case funcionam aqui. 
console.log(frase.toUpperCase());
*/

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
console.log(lista.join("-"))


/*
// dicionario
var fruta = {nome:"Uva", cor:"roxa"};
console.log(fruta.nome);

*/
// lista de dicionario
var frutas = [{nome:"Uva", cor:"roxa"}, {nome:"laranja", cor:"laranja"}];
console.log(frutas);
alert(frutas[1].nome);