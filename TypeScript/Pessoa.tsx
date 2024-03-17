class Pessoa {
  nome: string;
  idade: number;
  msg: string;

  exibirDados(): string {
    return this.nome + "-" + "-" + this.idade;
  }

  constructor(nome1: string, idade1: number) {
    this.nome = nome1;
    this.idade = idade1;
    this.msg = this.exibirDados();
  }
}

class Empregado extends Pessoa {
  salario: number;

  exibirSalario(): string {
    return this.exibirDados + "-" + this.salario;
  }

  constructor(nome1: string, idade1: number, salario1: number) {
    super(nome1, idade1);

    this.salario = salario1;
  }
}

const Marcos = new Empregado("Marcos", 23, 2000);

console.log(Marcos.exibirDados);
