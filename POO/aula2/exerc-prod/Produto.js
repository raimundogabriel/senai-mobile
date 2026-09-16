export class Produto{
  constructor(nome,valor,ano,validade){
    this.nome = nome;
    this.valor = valor;
    this.ano = ano;
    this.validade = validade;
  }
  exibirProduto(){
  return `O produto é ${this.nome} de valor ${this.valor} do ano ${this.ano} de validade ${this.validade}`
  }
}

