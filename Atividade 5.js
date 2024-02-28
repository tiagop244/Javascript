function idade(ano) {
  return 2024 - ano;
}
var idade = idade(2008);
console.log(`Minha idade é de ${(idade)} anos`);
console.log("-------------------------")
function viagem (litro) {
    return litro * 12
}
console.log(`ele pode viajar ${viagem(2)}kms`)
console.log("----------------------------")

var votar =19
if (votar >= 16) console.log(`a pessoa pode votar`)
if (votar < 16)console.log(`a pessoa nao pode votar`)
console.log("----------------")
function verificarVotacao(idade) {
  switch (true) {
      case idade < 16:
          return "Você ainda não tem idade para votar.";
      case idade >= 16 && idade < 18:
          return "Você pode votar, mas é opcional.";
      default:
          return "Você pode votar.";
  }
}

// Exemplo de uso da função:
console.log(verificarVotacao(15)); // Saída: Você ainda não tem idade para votar.
console.log(verificarVotacao(17)); // Saída: Você pode votar, mas é opcional.
console.log(verificarVotacao(21)); // Saída: Você pode votar.
