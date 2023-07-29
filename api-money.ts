import { ExchangeMoney } from "./interface/exchange-money";
import { ExgangeUseCase } from "./use-cases/exgange-api";
import { writeUseCase } from "./use-cases/write-api";

export async function apiMoney({from, to, amount}: ExchangeMoney){

  const exgangeUseCase = ExgangeUseCase({from, to, amount})

  const response  = await exgangeUseCase

  const delay = writeUseCase(response, {from, to, amount})

  return delay

  
} 