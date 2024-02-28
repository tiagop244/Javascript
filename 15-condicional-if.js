// var anoNascimento = 2003;

// if (anoNascimento > 2003) console.log(`A pessoa nasceu depois de 2003`);

// if (anoNascimento < 2003) console.log(`A pessoa nasceu antes de 2003`);

// if ((anoNascimento = 2003)) console.log(`A pessoa nasceu em 2003`);
// console.log("---------------------------");

// function sinaleiro(cor) {
//   if (cor == "vermelho") console.log(`Pare`);
//   else if (cor == "amarelo") console.log(`Atenção`);
//   else if (cor == "verde") console.log(`Siga`);
//   else console.log(`Você informou uma cor inexistente`);
// }
// sinaleiro("roxo")
// console.log("----------------------------");

const login = "admin";
var senha = "123456";

const loginUser = "admin";
const senhaUser = "admin";

if (login == loginUser && senha == senhaUser) console.log(`Acesso permitido!`);
console.log(`Acesso negado`);

console.log("--------------------------------");
var idade = 18;

if (idade <= 18) {
  console.log("entrou no if...");
  idade++, console.log("incrementei a idade...");
  console.log(`A nova idade é ${idade}`);
  console.log(`Agora estou saindo do bloco de codigos if`);
}
console.log(`Terminei !`);
console.log("--------------------------------");
//if inline//

var preco = 100;
var resultado = preco <= 100 ? "tá barato" : "vish tá caro!";
console.log(resultado);
