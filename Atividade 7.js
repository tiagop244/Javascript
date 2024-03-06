var a = 100003
var b = 300004
var anos = 0

while (a < b) {
anos ++
a *= 1.03
b *= 1.015
}
console.log(`A população A (${Math.round(a)})irá passar a população B (${Math.round(a)}) em ${anos} anos!`)

console.log("--------------------------------------------------------")

const tabuleiro = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];
let jogadorX = "X";
let jogadorO = "O";

function jogar(jogador) {
  let linha, coluna;
  do {
    linha = Math.floor(Math.random() * 3);
    coluna = Math.floor(Math.random() * 3);
  } while (tabuleiro[linha][coluna] !== " ");

  tabuleiro[linha][coluna] = jogador;
  if jogar(jogadorO);