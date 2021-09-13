import { Product } from 'src/app/product';
import { v4 as uuidv4 } from 'uuid';

export class Order {
  id: string;
  products: Product[];
  customer: string;
  count: number;
  totalPrice: number;
  date =
    new Date().getDate() +
    '/' +
    +(new Date().getMonth() + 1) +
    '/' +
    new Date().getFullYear();

  constructor(customer: string, count: number) {
    this.customer = customer;
    this.count = count;
    this.id = uuidv4();
    this.products = [];
    this.totalPrice = 0;
  }
}
