for (let i = 0; i <= 1000; i++) {
    console.log(i);
  }

  for (let i = 1; i <= 1000; i+=2) {
    console.log(i);
  }

  for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }

  for (let i = 1; i <= 20; i++) {
    console.log(i);
  }

for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

for (let i = 2; i <= 20; i+= 2) {
  console.log(i);
}

const numeros = [5, 6, 8, 14, 0, 9, 7, 2];
var soma = 0;
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

console.log("A soma dos elementos do vetor é:", soma);

var lista = [5, 6, 8, 14, 0, 9, 7, 2] //começamos com 1, pois multiplicar por 0 resultaria sempre em 0

var resultado = 1;
for (var i = 0; i < lista.length; i++) {
    resultado *= lista[i];
}

// console.log("O resultado da multiplicação de todos os elementos é:", resultado);

let matriz = [
  [8, 4, 1],
  [3, 7, 8],
];

console.table(matriz);

for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    console.log("Matriz: " + matriz[linha][coluna] + " | Posição: [" + linha + "," + coluna + "]" );
  }
}
