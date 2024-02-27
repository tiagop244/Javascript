// var frutas = ["Banana", "Maça", "Pera", "Uva", "Morango"];
// console.table(frutas);

// frutas.push("Tangerina");
// frutas.unshift("Goiaba");
// console.table(frutas);

// frutas.splice(4, 1);
// console.table(frutas);

// console.log(frutas[4]);
// console.table(frutas);

// var copia = frutas.slice(2, 5);
// console.table(copia);

console.log("---------------------------------");

var numeros = [10, 15, 20, 25, 30];

console.log(numeros);
console.table(numeros[3]);

var copia3 = numeros.slice();
console.table(copia3);

copia3[0] = numeros [0] * 2

copia3[1] = numeros [1] * 2

copia3[2] = numeros [2] * 2

copia3[3] = numeros [3] * 2

copia3[4] = numeros [4] * 2

console.table(copia3);