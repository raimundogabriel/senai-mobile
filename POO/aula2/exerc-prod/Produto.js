export class Produto{
  #nome
  static valor = 10
  #ano = 1960
  #validade
  constructor(nome,ano,validade){
    this.#nome = nome;
    this.#ano = ano;
    this.#validade = validade;
  }

  //busca o nome do produto
  getNome(){
    return this.#nome;
  }

  //alterar nome do produto
  setNome(novoNome){
    this.#nome = novoNome;
  }


  static exibirProduto(){
    return `Mensagem padrão do produto: 
    valor ${this.valor} |
    ano `
  }
}

