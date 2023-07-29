import { ExchangeMoney } from "../interface/exchange-money";
import { ExgangeMoneyRepository } from "../repository/exchange-money-repository";


export async function ExgangeUseCase({
  from,
  to,
  amount,
}:ExchangeMoney ) {

  const exgangeMoneyRepository = new ExgangeMoneyRepository()

  const response = await exgangeMoneyRepository.fetchApi(from, to, amount)

  return response
    
}