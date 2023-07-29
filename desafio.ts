// import { ExchangeDataResponse } from "./interface/exchange-money-response";
// import { axios } from "./lib/axios";


// export class ExgangeAPI {
//   data: ExchangeDataResponse;

  
//   constructor(public from: string, public to: string, public amount: number,) {
//     this.data = {
//       success: false,
//       result: 0,
//       info: {
//         rate: 0,
//       },
//     };
    

//   }
//    async fetchApi():  Promise<any> {
//     try {
//       const response = await axios.get(`https://api.exchangerate.host/convert?from=${this.from}&to=${this.to}&amount=${this.amount}`)
//       const dados = response.data


      
//       if(dados.result === null){
//         return false
//       }

//       return dados
     
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   async writeConsole(): Promise<boolean | undefined  >{
//     const result = await this.fetchApi()
//     if(result == false){
//       return false
//     }
//     console.log(`${this.from} ${this.amount}  => ${this.to} ${result.result.toFixed(2)} `)
//     console.log(`Taxa: ${result.info.rate.toFixed(6)}`)
//   }
//   execute(): void{
//     this.writeConsole()
//   }
  
    
// }
