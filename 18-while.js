// let contador = 0;

// while (contador < 5) {
//   contador++;
//   console.log(contador);
// }

// var x = 20;

// while (x > 10) {
//   console.log(`Entrei no laço while ...`);
//   x --
// }
// console.log(`Terminei !`);

// console.log("---------------------------------")

// let countdown = 5

// while (countdown > 0) {
//     console.log(countdown)
//     countdown--
// }

// console.log("---------------------------------");

// var limite = 500;
// var fatura = 0;

// while (fatura <= limite) {
//   let gasto = Math.random() * 100;
//   fatura += gasto;
//   console.log(
//     `Gastei R$ ${gasto.toFixed(2)} ------------Fatura: R$ ${fatura.toFixed(2)}`
//   );
//   fatura > limite && console.log(`Estourou o limite do cartão`);
// }
// // limite do cartao

// var limite = 500;
// var fatura = 0;
// do {
//   let gasto = Math.random() * 100;
//   fatura += gasto;
//   console.log(
//     `Gastei R$ ${gasto.toFixed(2)} ------------Fatura: R$ ${fatura.toFixed(2)}`
//   );
//   fatura > limite && console.log(`Estourou o limite do cartão`);
// } while (fatura <= limite);
console.log("---------------------------------");

var rodada = 1
var moeda = ""
var escolhajogador = ""
var vitoria = 0
var derrota = 0

while (rodada <= 3) {
  moeda = Math.random() >= 0.5 ? "Cara" : "Coroa"
  escolhajogador = Math.random() >= 0.5 ? "Cara" : "Coroa"

  if (escolhajogador == moeda) {
    console.log(`Parabéns, você ganhou !`)
    vitoria++
  } else {
    console.log(`Que pena, você perdeu !`)
    derrota++
  }
  rodada++
}
console.log(`-------------------------------------`)
console.log(`               PLACAR                `)
console.log(`-------------------------------------`)
console.log(`${vitoria>derrota ? "Você ganhou ! 🎉🥳" 
: "Você perdeu 🙁"}`)
console.log(`-------------------------------------`)