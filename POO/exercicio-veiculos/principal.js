import { Veiculo } from "./Veiculo.js"
import { Carro } from "./Carro.js";
import { Moto } from "./Moto.js";
import { Caminhao } from "./Caminhao.js";


const veiculo1 = new Veiculo("Toyota","Corola",15.5);
console.log(veiculo1.descricao());

const carro1 = new Carro("Fiat","Uno",8,5);
console.log(carro1.descricao());

const moto1 = new Moto("Royal Enfiled", "Meteor", 28,350)
console.log(moto1.descricao());
console.log(moto1.ehAltaCilindrada());
//errado o modelo e cc
moto1.setModelo("Super Meteor")
moto1.setCilindradas(650)
console.log(moto1.descricao());

const caminhao1 = new Caminhao("Scania","R 450",50,1000)
console.log(caminhao1.descricao());

