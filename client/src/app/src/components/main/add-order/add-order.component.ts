import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  orderModel = new Order('', 0);
  product = new Product('', 0, '', 0);

  allOrders: Order[] = [];
  allProducts: Product[] = [];

  orderId: string = '';

  constructor(
    private orderService: OrderService,
    private addProductService: AddProductService,
    private route: ActivatedRoute
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
    order.products.push(product);
    this.calculateTotalPrice(order);
  }

  calculateTotalPrice(order: Order) {
    order.totalPrice = order.products.reduce(
      (total, product) => total + product.price,
      0
    );
  }

  saveOrder() {}

  ngOnInit(): any {
    this.route.params.subscribe((params) => {
      this.orderId = params.id;
    });
    this.fetchOrder(this.orderService.url);
    this.getProducts(this.addProductService.url);
    // this.assignOrder(this.orderId);
  }

  assignOrder(id: string) {
    const order = this.allOrders.find((order) => order.id === id);
    this.orderModel = order!;
    console.log(order);
  }

  public async fetchOrder(url: string) {
    const data = await fetch(`${url}/getOrders`);
    const result = await data.json();
    this.allOrders = result;
    if (this.orderId) {
      this.assignOrder(this.orderId);
    }
  }

  public async getProducts(url: string) {
    const data = await fetch(`${url}/getProducts`);
    const result = await data.json();

    this.allProducts = result;
  }
}
