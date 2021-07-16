import { Component, OnInit  } from '@angular/core';
import {Order} from "./order";
import {OrderService} from "./order.service";
import { v4 as uuidv4 } from 'uuid';
import {AddProductService} from "../new-product/add-product.service";
import { Product } from 'src/app/product';


@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss'],
})
export class AddOrderComponent implements OnInit {
  orderModel = new Order("","",0, uuidv4());
  allOrders: Order[] = [];
  allProducts: Product[] = [];


  constructor(private orderService: OrderService, private addProductService: AddProductService) {}


  addOrder(order: Order) {
    this.orderService
      .addOrder(order)
      .subscribe((data) => this.fetchOrder(this.orderService.url));
  }

  saveOrder() {

  }

  ngOnInit(): any {
    this.fetchOrder(this.orderService.url);
    this.getProducts(this.addProductService.url);
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
  }
}
