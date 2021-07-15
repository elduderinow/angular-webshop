export class Order {
  name: string;
  count: number;
  date: string;
  customer: string;

  constructor(name: string, count: number, date: string, customer: string) {
    this.name = name;
    this.count = count;
    this.date = date;
    this.customer = customer;
  }
}
