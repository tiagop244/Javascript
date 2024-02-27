var dinos = ["Tiranossauro Rex", "Estegossauro", "Anquilossauro"];
console.log(dinos);
console.log(dinos[0]);
console.log("");
console.table(dinos);
console.log("O vetor tem", dinos.length, "elementos!");

dinos.push("Brontossauro");
console.table(dinos);
dinos.push("Velociraptor");
console.table(dinos);
dinos.unshift("Triceratops");
console.table(dinos);
dinos[3] = "Titanosauro";
console.table(dinos);
dinos.pop();
console.table(dinos);
dinos.pop();
console.table(dinos);
4;
dinos.pop();
console.table(dinos);
dinos.pop();
console.table(dinos);

console.log("-----------Continuação Aula-----------");
var dinos = [
  "Triceratops",
  "Tiranossauro",
  "Estegossauro",
  "Anquilossauro",
  "Brontossauro",
  "Cassiossauro",
];

console.table(dinos);
var elementoProcurado = "Brontossauro";
var posicao = dinos.indexOf(elementoProcurado);
console.log("O " + elementoProcurado + "esta no indice " + posicao);
n