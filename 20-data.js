// criando um objeto do tipo data
var data1 = new Date();
console.log(data1);
// criando data especifica
var data2 = new Date("2008=02-18");
console.log(data2);
// extraindo partes em uma data
var data3 = new Date("2008=02-04");
console.log(`data: ${data3}`);
console.log(`ano: ${data3.getFullYear()}`);
console.log(`mes: ${data3.getMonth() + 1}`);
console.log(`dia: ${data3.getDate()}`);

const mes = [
  ,
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
console.log(`Retornando o mes por escrito!`);
console.log(`Mes: ${mes[data3.getMonth()]}`);

const dias = [
   "domingo",
   "segunda",
   " terça", 
    "quarta", 
    "quinta", 
    "sexta",
    "sábado"
]
console.log(`Dia da semana: ${dias[data3.getDay()]}`)

console.log(`O tiago tem ${2024 - 2008} anos!`)

//////////////////////////////////////////////////////////////////////////
console.log(" ===============================");
const dataNasc = new Date("2007=03-14");
const dataAtual = new Date();


const diferenca = dataAtual.getTime() - dataNasc.getTime();
//console.log(`Diferença: ${diferenca}`);
const idade = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
console.log(`Idade: ${idade}`);


console.log("==============")


const diferencaAnos = dataAtual.getFullYear() - dataNasc.getFullYear();
console.log(`Diferença em anos: ${diferencaAnos}`);


if(dataAtual.getMonth() < dataNasc.getMonth() || 
  (dataAtual.getMonth() === dataNasc.getMonth() && 
  dataAtual.getDate() < dataNasc.getDate())){
    console.log(`Ainda não fez aniversário!`);
    console.log(`Idade: ${diferencaAnos - 1}`);
  }

