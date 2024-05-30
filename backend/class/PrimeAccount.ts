import { VBaccount } from './VBaccount';

export class PrimeAccount extends VBaccount {

  constructor(name: string, accountNumber: number, balance: number ) {
    super(name, accountNumber, balance)
  }

  depositPlus = (valorDepositado: number) => {
    const valorTotal = valorDepositado + 10
    console.log(valorTotal);
    
  } ;
}

//   - Esta conta terá um método de depósito, que acresce 10 a mais ao valor informado para depósito. 
// (Ex: Um depósito de 100, será de 110 no final)
