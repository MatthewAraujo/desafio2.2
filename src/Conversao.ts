import { ExchangeMoney } from "../interface/exchange-money";
import { ApiExchange } from "./ApiExchange";
import { Validation } from "./Validation";

export class Conversao {
   from: string
   to: string
   amount: string

  constructor({from, to, amount}: ExchangeMoney){
    this.from = from
    this.to = to
    this.amount = amount
  }
  
  static initialize(props: ExchangeMoney){

    return new Conversao(props)
  }


  getApi(){
    const getApi = new ApiExchange({from: this.from, to: this.to, amount: this.amount})
    const response = getApi.fetchApi()
    return response
  }
  
  async returnResponseApi() {
  
    this.validar()
    
    const response = await this.getApi()

    if(response === false){
      throw new Error('Coin not found')
    }
    
    this.writeConsole(response)

    return response
  }


  validar(){
    const validations = new Validation(this.from, this.to, this.amount)
    validations.execute()
  }


  async writeConsole(response: {result: number, info: {rate: number}}) {
    console.log(`${this.from.toLocaleUpperCase()} ${this.amount}  => ${this.to.toLocaleUpperCase()} ${response.result.toFixed(2)} `)
    console.log(`Taxa: ${response.info.rate.toFixed(6)}`)
  }

  execute() {
    return this.returnResponseApi()

  }
}
