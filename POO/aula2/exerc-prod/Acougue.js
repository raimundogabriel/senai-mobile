import { Produto } from './Produto.js'

export class Acougue extends Produto{
  constructor(nome,valor,ano,validade, peso, tipo){
    super(nome,valor,ano,validade)
    this.peso = peso;
    this.tipo = tipo;
  }
  exibirProduto(){
    return `O produto é ${this.nome} de valor ${this.valor} do peso ${this.peso} do corte ${this.tipo}`
    }
}