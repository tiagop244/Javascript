// class Pessoa {
//   constructor(pNome, pIdade) {
//     this.nome = pNome;
//     this.idade = pIdade;
//   }
//   apresentarSe() {
//     console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
//   }
//   envelhecer() {
//     this.idade++;
//   }
// }
// var pessoa1 = new Pessoa("Dienifer", 52);
// var p2 = new Pessoa("tiago", 16);

// pessoa1.apresentarSe();
// p2.apresentarSe();

// pessoa1.envelhecer();
// pessoa1.apresentarSe();

// p2.envelhecer();
// p2.apresentarSe();
// console.log("--------------------------------------")
// // A B S T R A Ç Ã O -- abstraindo as caracteristicas mais importantes e descartando detalhes irrelevantes!

// class Pet {
//   constructor(nome, idade, tipo) {
//     this.nome = nome;
//     this.idade = idade;
//     this.tipo = tipo;
//   }
//   alimentar() {
//     console.log(`${this.nome} foi alimentado !`);
//   }
// }
// const meuPet = new Pet("Rex", 2, "Cachorro");
// console.log(`Meu pet é um ${meuPet.tipo}, chamado ${meuPet.nome}e tem ${meuPet.idade} anos!`
// );
// meuPet.alimentar();
// console.log("--------------------------------------")
// // H E R A N Ç A --
// class Animal {
//   constructor(nome, idade, tipoAlimentacao) {
//     this.nome = nome;
//     this.idade = idade;
//     this.tipoAlimentacao = tipoAlimentacao;
//   }

//   alimentar() {
//     console.log(`O animal ${this.nome} foi alimentado!`);
//   }

//   emitirSom() {
//     console.log(`Barulho padrão de animal!`);
//   }
// }

// class Cachorro extends Animal {
//   alimentar() {
//     console.log(`O cachorro ${this.nome} foi alimentado`);
//   }

//   emitirSom() {
//     console.log(`🐶 Au au! 🐶`);
//   }
// }
// const pet = new Animal("Carlos", 10, "Comida espacial");
// const meuCachorro = new Cachorro("Rex", 3, "Ração");

// pet.alimentar();
// pet.emitirSom();
// console.log("");
// meuCachorro.alimentar();
// meuCachorro.emitirSom();
// console.log("--------------------------------------")
// E N C P S U L A M E N T O --
// console.log("--------------------Polimorfismo--------------------");
// class Animal {
//   constructor(nome) {
//     this.nome = nome;
//   }

//   fazerBarulho() {
//     console.log("O animal faz um barulho genérico.");
//   }
// }

// class Cachorro extends Animal {
//   constructor(nome) {
//     super(nome);
//   }

//   fazerBarulho() {
//     console.log("O cachorro late!");
//   }
// }

// class Gato extends Animal {
//   constructor(nome) {
//     super(nome);
//   }

//   fazerBarulho() {
//     console.log("O gato mia!");
//   }
// }

// // Exemplo de uso
// const animais = [
//   new Cachorro("Rex"),
//   new Gato("Mia"),
//   new Animal("Bob"), // Animal genérico
// ];

// for (const animal of animais) {
//   animal.fazerBarulho();
// }

console.log("-------------------EXEMPLOS-------------------");
class Retangulo {
  constructor(comprimento, largura) {
    this.comprimento = comprimento;
    this.largura = largura;
  }
  obterarea() {
    return this.comprimento * this.largura;
  }
  obterperimetro() {
    return this.comprimento * 2 + this.largura * 2;
  }
  setcomprimento(novocomprimento) {
    this.comprimento = novocomprimento;
  }
  setlargura(novalargura) {
    this.largura = novalargura;
  }
}
//criando um objeto do tipo retangulo
var ret1 = new Retangulo(10, 15);

function displayRet(retangulo) {
console.log(retangulo)
console.log(`comprimento = ${retangulo.comprimento}`)
console.log(`largura = ${retangulo.largura}`)
console.log(`área = ${retangulo.obterarea()}`)
console.log(`perimetro = ${retangulo.obterperimetro()}`)
}
displayRet(ret1)
ret1.setcomprimento(20)
displayRet(ret1)
ret1.setlargura(20)
displayRet(ret1)
