import { Produto } from './Produto.js'

export class Padaria extends Produto{
  #quantidade = 0
  #fabricacao = 0
  constructor(nome,valor,ano,validade, quantidade,fabricacao){
    super(nome,valor,ano,validade)
    this.#quantidade = quantidade;
    this.#fabricacao =fabricacao;
  }
  exibirProduto(){
    return `O produto é ${this.nome} de valor ${this.valor} com ${this.#quantidade} fabricado em ${this.#fabricacao}`
    }
}

