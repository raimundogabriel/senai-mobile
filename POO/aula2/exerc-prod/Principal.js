import { Produto } from './Produto.js';
import { Padaria } from './Padaria.js';
import { Acougue } from './Acougue.js';

let produto1 = new Produto ("farinha","R$ 10,00", 2026, "12DEZ");
let produto2 = new Padaria ("pão","R$ 15,00", "3", "12DEZ");
let produto3 = new Acougue ("carne","R$ 50,00", 2026, "5OUT", "5KG","fraudinha");
console.log(produto1.exibirProduto());
console.log(produto2.exibirProduto());
console.log(produto3.exibirProduto());
