import { VBaccount } from "./VBaccount"

export class PeopleAccount extends VBaccount {
  private doc_id: number

  constructor(doc_id: number, name: string, accountNumber: number, balance: number){
    super(name, accountNumber, balance)
    this.doc_id = doc_id
  }
}