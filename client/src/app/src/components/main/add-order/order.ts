
export class Order {
  productname: string
  customer: string
  count: number
  date = new Date().getDate() + '/' + +(new Date().getMonth()+1) + '/' + new Date().getFullYear()
  id :string

  constructor(productname: string, customer: string, count: number, id:string) {
    this.productname = productname;
    this.customer = customer;
    this.count = count;
    this.id = id;
  }
}
