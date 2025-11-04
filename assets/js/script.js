//Revisão de arrays [ ]



//Exercício 1 — Armazenar 5 nomes
//Peça para o usuário digitar 5 nomes, armazene-os em um array e depois exiba todos juntos em um alert.

let nomes = [];

for (let i = 0; i < 5; i++) {
  let nome = prompt(`Digite o ${i + 1}º nome:`);
  nomes.push(nome);
}
alert("Os nomes digitados foram:" + nomes.join(", "));





//Exercício 2 — Somar 5 números
//Peça 5 números, armazene em um array e mostre a soma total dos valores.

let numeros = [];
let soma = 0

for (let i = 0; i < 5; i++) {
  let numero = Number(prompt(`Digite o ${i + 1}º numero:`));
  numeros.push(numero);
  soma += numero;
}

alert("Os números digitados foram: " + numeros.join(", "));
alert("A soma total é: " + soma);





//Exercício 3 — Maior número
//Peça 5 números, armazene em um array e mostre qual é o maior.


let numeros2 = [];
let maior = 0;

for (let i = 0; i < 5; i++) {
  let numero2 = Number(prompt(`Digite o ${i + 1}º número:`));
  numeros2.push(numero2);

  if (i === 0 || numero2 > maior) {
    maior = numero2;
  }
}

alert("Os números digitados foram: " + numeros2.join(", "));
alert("O maior número é: " + maior);






//Exercício 4 — Mostrar apenas os números pares
//Peça vários números (por exemplo, 6) e mostre apenas os pares digitados.

let numeros3 = [];
let pares = [];

for (let i = 0; i < 6; i++) {
  let numero3 = Number(prompt(`Digite o ${i + 1}º número:`));
  numeros3.push(numero3);

  if (numero3 % 2 == 0) {
    pares.push(numero3);
  }
}

alert("Os números digitados foram: " + numeros3.join(", "));
alert("Esses são os números pares: " + pares.join(", "));








//Exercício 5 — Contar números maiores que 10
//Peça 8 números e mostre quantos deles são maiores que 10.


let numeros4 = [];
let maioresQue10 = 0;

for (let i = 0; i < 8; i++) {
  let numero4 = Number(prompt(`Digite o ${i + 1}º número:`));
  numeros4.push(numero4);

  if (numero4 > 10) {
    maioresQue10++;
  }
}

alert("Os números digitados foram: " + numeros4.join(", "));
alert("Quantidade de números maiores que 10: " + maioresQue10);





//Exercício 6 — Média das notas
//Peça 4 notas, armazene-as em um array e mostre a média final.

let numeros5 = [];
let som = 0;

for (let i = 0; i < 4; i++) {
  let numero5 = Number(prompt(`Digite o ${i + 1}º número:`));
  numeros5.push(numero5);
  som += numero5;
}

let media = som / 4;

alert("Os números digitados foram: " + numeros5.join(", "));
alert("A média dos números é: " + media);







//Exercício 7 — Buscar nome em uma lista
//Peça 5 nomes, depois pergunte um nome e diga se ele está presente na lista.


let nicks = [];

for (let i = 0; i < 5; i++) {
  nicks.push(prompt("Digite um nome:"));
}

let busca = prompt("Digite um nome para procurar:");

if (nicks.includes(busca)) {
  alert("Está na lista!");
} else {
  alert("Não está na lista!");
}

alert("Os nomes digitados foram: " + nicks.join(", "));






//Exercício 8 — Inverter a ordem
//Peça 5 números, armazene em um array e mostre-os na ordem inversa.