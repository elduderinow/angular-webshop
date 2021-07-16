import { Component, OnInit } from '@angular/core';
import { NewProduct } from "./new-product";
import {AddProductService} from "./add-product.service";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],

})

export class NewProductComponent implements OnInit {
  private addProductService: AddProductService;
  product:NewProduct = new NewProduct("",0,"",0)
  allProducts:NewProduct[] = []

  constructor(addProductService: AddProductService) {
    this.addProductService = addProductService;
  }

  ngOnInit(): void {

  }

  onClick() {
    console.log(this.addProductService.addProduct(this.product).subscribe((data => JSON.stringify(data))))
    console.log("form-works")
  }

}
