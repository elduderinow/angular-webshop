import { Component, OnInit } from '@angular/core';
import { threadId } from 'worker_threads';
import { AddProductService } from '../new-product/add-product.service';
import { Order } from './order';
import { OrderService } from './order.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss'],
})
export class AddOrderComponent implements OnInit {
  orderModel = new Order('', '', 0);
  allOrders: Order[] = [];

  addOrder(order: Order) {
    this.orderService
      .addOrder(order)
      .subscribe((data) => this.fetchOrder(this.orderService.url));
  }

  constructor(private orderService: OrderService) {}

  ngOnInit(): any {
    this.fetchOrder(this.orderService.url);
  }

  public async fetchOrder(url: string) {
    const data = await fetch(`${url}/getOrders`);
    const result = await data.json();
    this.allOrders = result;
  }
}
