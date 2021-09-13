export class NewProduct {
  name: string;
  price: number;
  description: string;
  stock:number;

  constructor(name: string, price: number, description: string, stock: number) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.stock = stock;
  }

}
