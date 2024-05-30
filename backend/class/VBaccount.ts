export abstract class VBaccount {
  private readonly name: string
  private readonly accountNumber: number
  balance: number 
  private status: boolean = true

  constructor(name: string, accountNumber: number, balance: number){
    this.name = name
    this.accountNumber = accountNumber
    this.balance = balance
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }
    throw new Error('Conta inválida')
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  setName = (name: string): void => {
    name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (valorDepositado: number): void => {
     if (this.validateStatus()) {
      console.log(`Você depositou $${valorDepositado}`); 
      this.balance = valorDepositado + this.balance;
       console.log(`Seu saldo atual é de ${this.balance}`); 
     }
  }

  withdraw = (valorSolicitado:number): void => {
    if (this.validateStatus() && this.balance >= valorSolicitado) {
        this.balance =  this.balance - valorSolicitado
      console.log(`Você sacou $${valorSolicitado}`);
      console.log(`Seu saldo agora é $${this.balance}`);   
      } else {
        console.log(`Transação negada, Seu saldo atual de $${this.balance} é menor que o valor solicitado`)
      }
    } 
  }

  
  

