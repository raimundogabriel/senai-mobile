import { Produto } from "./Produto.js";

export class Limpeza extends Produto{
    #tamanho;
    #valor
    constructor(valor,nome,ano,validade,tamanho){
        super(nome,ano,validade)
        this.#tamanho = tamanho;
        this.#valor=valor;
    }

    exibirProduto(){
        return `o Produto ${this.getNome()} custa ${this.#valor} e mede ${this.tamanho}`
    }
}
