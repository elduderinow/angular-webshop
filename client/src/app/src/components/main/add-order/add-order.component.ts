import { Component, OnInit  } from '@angular/core';
import {Order} from "./order";

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {
  orderModel = new Order("","",0);

  addProduct(){
    console.log(this.orderModel)
  }

  constructor() { }


  ngOnInit(): void {
  }

}
