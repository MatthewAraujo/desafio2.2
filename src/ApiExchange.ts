import axios from "axios";

export class ApiExchange {
  params: any;
  url = 'https://api.exchangerate.host/convert'

  constructor( params: any) {
    this.params = params;
  }

  generateApiUrl() {
    const params = Object.keys(this.params).map(i => `${i}=${this.params[i]}`).join("&")

    return `${this.url}?${params}`;
  }

  async fetchApi() {
    try {
      const response = await axios.get(this.generateApiUrl())
      const dados = response.data      
      return dados

    } catch (error) {
      return new Error(String(error))
    }
  }
}



