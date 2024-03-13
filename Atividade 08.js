// Criar uma classe Aluno em JavaScript que represente um aluno em uma instituição de ensino. A classe deve receber informações do aluno, calcular sua idade e apresentar-se como métodos.

// Requisitos:
// A classe Aluno deve ter os seguintes atributos:
// ra: Número de Registro do Aluno (string)
// nome: Nome completo do aluno (string)
// dataNascimento: Data de nascimento do aluno (data)
// curso: Curso do aluno (string)

// A classe Aluno deve ter os seguintes métodos:
// calcularIdade(): Calcula e retorna a idade do aluno em anos.
// apresentar(): Exibe as informações do aluno no formato:
class aluno {
  constructor(ra, nome, anoNascimento, curso) {
    this.ra = ra;
    this.nome = nome;
    this.anoNascimento = anoNascimento;
    this.curso = curso;
  }
  calcularidade() {
    return 2024 - this.anoNascimento;
  }
  apresentar() {
    console.log(
      `Olá meu nome é ${
        this.nome
      }, matricula ${this.ra} e tenho ${this.calcularidade()}. Estou cursando o ${this.curso}`
    );
  }
}
const aluno1 = new aluno(3799, "tiago", 2008, "Desenvolvimento de Sistemas");
aluno1.apresentar();

// Crie e utilize uma classe "Sorvete" contendo as propriedades : sabor, preço e tamanho (P | M | G)
// Crie um sorvete de morango grande
// Crie um sorvete de chocolate pequeno
// Crie um sorvete de melancia medio
// Altere o preço do sorvete de morango grande para R$ 10,51

class Sorvete {
  constructor(sabor, preco, tamanho) {
    this.sabor = sabor;
    this.preco = preco;
    this.tamanho = tamanho;
  }
}

const sorveteMorangoGrande = new Sorvete('Morango', 11, 'G');
const sorveteChocolatePequeno = new Sorvete('Chocolate', 12, 'P');
const sorveteMelanciaMedio = new Sorvete('Melancia', 2, 'M');

console.log(sorveteMorangoGrande);
console.log(sorveteChocolatePequeno);
console.log(sorveteMelanciaMedio);


// Alterando o preço do sorvete de morango grande
sorveteMorangoGrande.preco = 10.51;
console.log(sorveteMorangoGrande);

