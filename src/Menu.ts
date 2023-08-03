import { Conversao } from "./Conversao"

const message = require('prompt-sync')()

export class Menu {
  
  showMenu() {
    console.log('Bem vindo ao conversor de moedas')
    console.log('Digite a moeda que deseja converter')
    const from =  String(message('De: '))
    const to =  String(message('Para: '))
    const amount =  String(message('Digite o valor: '))
    return {from, to, amount}
  }

  execute() {
    const {from, to, amount}  = this.showMenu()

    const initialize = new Conversao( {
      from,
      to,
      amount,
    })
    initialize.execute().then(() => {
      console.log('Conversão realizada com sucesso')
    })

  }
  
}