import { Veiculo } from "./Veiculo.js";

export class Caminhao extends Veiculo{
    #capacidadeCarga;
    constructor(marca,modelo,autonomiaKml,capacidadeCarga){
        super(marca,modelo,autonomiaKml);
        this.#capacidadeCarga = capacidadeCarga;
    }

    getCapacidadeCarga(){
        return this.#capacidadeCarga;
    }
    setCapacidadeCarga(novaPorta){
        this.#capacidadeCarga = novaPorta;
    }

    descricao(){
        return `---Dados da Caminhão---\n
                Marca: ${this.getMarca()}\n
                Modelo: ${this.getModelo()}\n
                Autonomia KM/L: ${this.getAutonomiaKml()} kms\n
                Capacidade de Carga: ${this.#capacidadeCarga}`
    }

    calcularFrete(){
        
    }
}