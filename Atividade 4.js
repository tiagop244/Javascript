var matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.table(matriz);
console.log(matriz[0][0],matriz[1][1],matriz[2][2]);
console.log(matriz[2][2],matriz[1][1],matriz[0][0]);
console.log(matriz[0][2],matriz[1][1],matriz[2][0]);
console.log(matriz[2][0],matriz[1][1],matriz[0][2]);

var usuario = ["Tiago !",16,"azul","banana","centro","pipoca"]

console.log("Olá ", usuario[0],"Seja bem vindo")
console.log("voce mora no endereço :",usuario[4], "e tem um pet chamdo",usuario[5])
console.log("sua idade é",usuario[1],"anos","e gosta muito da fruta",usuario[3])
console.log("sua cor favorita é",usuario[2])