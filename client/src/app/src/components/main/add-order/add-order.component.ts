import { Component, OnInit } from '@angular/core';
import { Order } from './order';
import { OrderService } from './order.service';
import { AddProductService } from '../new-product/add-product.service';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss'],
})
export class AddOrderComponent implements OnInit {
  orderModel = new Order(null, '', 0);
  product = new Product('', 0, '', 0);

  allOrders: Order[] = [];
  allProducts: Product[] = [];

  constructor(
    private orderService: OrderService,
    private addProductService: AddProductService
  ) {}

  addOrder(order: Order) {
    this.orderService
      .addOrder(order)
      .subscribe((data) => this.fetchOrder(this.orderService.url));
  }

  trackByIndex(index: number) {
    return index;
  }

  saveProduct(order: Order, product: Product) {
    order.products.push(order.productname);
    this.calculatePrice(order);
  }

  calculatePrice(order: Order) {
    order.totalPrice = order.products.reduce(
      (total, product) => total + product.price,
      0
    );
  }

  saveOrder() {}

  ngOnInit(): any {
    this.fetchOrder(this.orderService.url);
    this.getProducts(this.addProductService.url);
    console.log(this.allProducts);
  }

  public async fetchOrder(url: string) {
    const data = await fetch(`${url}/getOrders`);
    const result = await data.json();
    this.allOrders = result;
  }

  public async getProducts(url: string) {
    const data = await fetch(`${url}/getProducts`);
    const result = await data.json();

    this.allProducts = result;

    console.log(this.allProducts);
  }
}
