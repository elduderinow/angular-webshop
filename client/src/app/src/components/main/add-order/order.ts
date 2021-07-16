import { Product } from 'src/app/product';
import { v4 as uuidv4 } from 'uuid';

export class Order {
  productname: any;
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
  id: string;

  constructor(productname: any, customer: string, count: number) {
    this.customer = customer;
    this.count = count;
    this.id = uuidv4();
    this.products = [];
    this.productname = productname;
    this.totalPrice = 0;
  }
}
