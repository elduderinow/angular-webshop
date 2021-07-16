import { v4 as uuidv4 } from 'uuid';
export class Product {
  id: string;
  name: string;
  stock: number;
  description: string;
  price: number;

  constructor(name: string, stock: number, description: string, price: number) {
    this.name = name;
    this.stock = stock;
    this.description = description;
    this.price = price;
    this.id = uuidv4();
  }
}
