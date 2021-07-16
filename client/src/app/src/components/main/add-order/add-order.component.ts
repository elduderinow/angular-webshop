import { Component, OnInit  } from '@angular/core';
import {Order} from "./order";
import {OrderService} from "./order.service";

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {
  allOrder: any;
  urlAllOrder = "http://localhost:9000/allOrder"

  orderModel = new Order("","",0);

  addOrder(){
    console.log(this.orderModel)
    this.orderService.addOrder(this.orderModel).subscribe((data => JSON.stringify(data)))
    this.fetchOrder(this.urlAllOrder)
  }

  constructor( private orderService : OrderService) {
  }

  ngOnInit(): void {
    this.fetchOrder(this.urlAllOrder)
  }

  public async fetchOrder(url: string): Promise<any> {
    await fetch(url, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    }).then(response => {
      return response.json()
    }).then(data => (this.allOrder = data));
  }

}
