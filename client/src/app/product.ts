export class Product {
  name: string;
  stock: number;
  description: string;
  price: number;

  constructor(name: string, stock: number, description: string, price: number) {
    this.name = name;
    this.stock = stock;
    this.description = description;
    this.price = price;
  }
}
