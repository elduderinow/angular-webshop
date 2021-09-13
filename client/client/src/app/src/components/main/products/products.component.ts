import { Component, OnInit } from '@angular/core';
import {AddProductService} from "../new-product/add-product.service";
import { Product } from 'src/app/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product = new Product('', 0, '', 0);
  allProducts: Product[] = [];

  constructor(private addProductService: AddProductService) {}

  ngOnInit(): any {
    this.getProducts(this.addProductService.url);
  }

  public async getProducts(url: string) {
    const data = await fetch(`${url}/getProducts`);
    const result = await data.json();

    this.allProducts = result;
  }

}
