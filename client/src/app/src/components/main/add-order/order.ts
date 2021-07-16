export class Order {
  productname: string
  customer: string
  count: number
  date = new Date().getDate() + '/' + +(new Date().getMonth()+1) + '/' + new Date().getFullYear()

  constructor(productname: string, customer: string, count: number) {
    this.productname = productname;
    this.customer = customer;
    this.count = count;
  }
}
