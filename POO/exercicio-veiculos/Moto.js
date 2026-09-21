import { Veiculo } from "./Veiculo.js";

export class Moto extends Veiculo{
    #cilindradas;
    constructor(marca,modelo,autonomiaKml,cilindradas){
        super(marca,modelo,autonomiaKml);
        this.#cilindradas = cilindradas;
    }

    getCilindradas(){
        return this.#cilindradas;
    }
    setCilindradas(novaCil){
        this.#cilindradas = novaCil;
    }

    descricao(){
        return `---Dados da Moto---\n
                Marca: ${this.getMarca()}\n
                Modelo: ${this.getModelo()}\n
                Autonomia KM/L: ${this.getAutonomiaKml()} kms\n
                Cilindradas: ${this.#cilindradas}`
    }

    ehAltaCilindrada(){
        if(this.#cilindradas > 600){
            return "Moto de alta cilindrada"
        }else{
            return "Moto de baixa cilindrada"
        }
    }
}