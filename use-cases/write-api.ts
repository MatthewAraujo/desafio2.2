import { ExchangeMoney } from "../interface/exchange-money"
import { ExchangeDataResponse } from "../interface/exchange-money-response"

export function writeUseCase(data:ExchangeDataResponse, api: ExchangeMoney ){
 
  console.log(`${api.from} ${api.amount}  => ${api.to} ${data.result.toFixed(2)} `)
  console.log(`Taxa: ${data.info.rate.toFixed(6)}`)

}