import { Veiculo } from "./Veiculo.js";

export class Carro extends Veiculo{
    #portas;
    constructor(marca,modelo,autonomiaKml,portas){
        super(marca,modelo,autonomiaKml);
        this.#portas = portas;
    }

    getPortas(){
        return this.#portas;
    }
    setPortas(novaPorta){
        this.#portas = novaPorta;
    }

    descricao(){
        return `---Dados do Carro---\n
                Marca: ${this.getMarca()}\n
                Modelo: ${this.getModelo()}\n
                Autonomia KM/L: ${this.getAutonomiaKml()} kms\n
                Portas: ${this.#portas}`
    }

    temPortaMalasGrande(){
        console.log("verificar porta malas")
    }
}