import { axios } from "../lib/axios"

export class ExgangeMoneyRepository{
  async fetchApi(from: string, to: string, amount: string) {

    try {
      const response = await axios.get(`https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`)
      const dados = response.data

      if(dados.result === null){
        return false
      }

      return dados
     
    } catch (error) {
      console.log(error)
    }
  }

}