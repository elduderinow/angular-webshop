import { Component, OnInit } from '@angular/core';
import { Order } from '../add-order/order';
import { OrderService } from '../add-order/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  allOrders: Order[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.fetchOrder(this.orderService.url);
  }

  public async fetchOrder(url: string) {
    const data = await fetch(`${url}/getOrders`);
    const result = await data.json();
    this.allOrders = result;
  }
}
