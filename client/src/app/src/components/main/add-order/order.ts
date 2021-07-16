export class Order {
  productname: string
  customer: string
  count: number

  constructor(productname: string, customer: string, count: number) {
    this.productname = productname;
    this.customer = customer;
    this.count = count;
  }
}
