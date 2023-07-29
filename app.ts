import { apiMoney } from "./api-money";
const prom = require('prompt-sync')();
const message = prom({ sigint: true }); // Permite terminar o programa com CTRL-C
let from = '';

do{

  from = prom("Moeda de origem: ");
  const to = prom("Moeda de destino: ");
  const amount = prom("Valor desejado: ");

  const exchange =  apiMoney({from, to, amount})
  console.log(exchange)
}while(true); 


