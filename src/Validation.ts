export class Validation {
  from: string;
  to: string;
  amount: string;

  constructor(from: string, to: string, amount: string) {
    this.from = from;
    this.to = to;
    this.amount = amount;
  }


  validate(){
    this.validateFrom()
    this.validateTo()
    this.validateAmount()
  }


  validateFrom(){
    if(this.from.length !== 3){
      throw new Error('Invalid from  coin')
    }
  }

  validateTo(){
    if(this.to.length !== 3){
      throw new Error('Invalid to coin')
    }
  }

  validateAmount(){
    if(Number(this.amount) <= 0){
      throw new Error('Invalid amount')
    }
  }

  execute(){
    this.validate()
  }

}