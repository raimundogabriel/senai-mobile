class Gato{
    constructor(nome,corDoPelo,responsavel){
        this.nome = nome;
        this.corDoPelo = corDoPelo;
        this.responsavel = responsavel;
    }
    miar(){
        return "O gato esta miando"
    }
}

const gato1 = new Gato("Zezinho","azul","Avatar")
console.log(gato1.nome)
console.log(gato1.responsavel)
console.log(gato1.corDoPelo)
console.log(gato1.miar())