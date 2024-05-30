import { VBaccount } from "./VBaccount"

export class CompanyAccount extends VBaccount {

  constructor(name: string, accountNumber: number, balance: number){
    super(name, accountNumber, balance)
  }

  getLoan = (valorDoEmprestimo: number  ): void => {
    if (this.validateStatus()) {
      if (valorDoEmprestimo >= 1000 ) {
        // this.balance = valorDoEmprestimo += this.balance;
        console.log(`O valor solicitado de $${valorDoEmprestimo} foi aprovado, seu saldo é $${this.balance + valorDoEmprestimo}`);
      }
      else {
        console.log('Valor inválido, Empréstimo minimo de $1000.'); 
      }
    }
    else {
    throw new Error('Conta inválida')
      
    }
  }
  
}
