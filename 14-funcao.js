function saudacao(nome) {
  console.log(`Ola ${nome}, seja bem vindo!`);
}
saudacao("Tiago");
saudacao("Ramon Dino");
saudacao("Cassio");

function somar(valor1, valor2) {
  return valor1 + valor2;
}

console.log(`5 + 3 = ${somar(5, 3)}`);

var v1 = 9;
var v2 = 3;
console.log(`v1 + v2 = ${somar(v1, v2)}`);

function desconto(valorvenda, desc) {
  return (valorvenda * desc) / 100;
}

var totalpedido = 300;
var totaldesconto = desconto(totalpedido, 5);

console.log(`total do pedido R$ ${totalpedido}`);
console.log(`total do desconto R$ ${totaldesconto}`);
console.log(`valor final da venda R$ ${totalpedido - totaldesconto}`);

function apresentaPessoa(nome, idade, cidade){
    console.log(
        `Apresdento a voces: ${nome}, que tem ${idade} e mora em ${cidade}!`
    )
}
apresentaPessoa("Tiago", 16, "Jau")