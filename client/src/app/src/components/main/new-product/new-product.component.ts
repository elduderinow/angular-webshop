import { Component, OnInit } from '@angular/core';
import { AddProductService } from './add-product.service';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent implements OnInit {
  product: Product = new Product('', 0, '', 0);
  allProducts: Product[] = [];

  constructor(private addProductService: AddProductService) {}

  ngOnInit(): any {
    this.getProducts(this.addProductService.url);
  }

  onClick(product: Product) {
    this.addProductService.addProduct(product).subscribe(
      (data) => this.getProducts(this.addProductService.url),
      (error) => 'Me no worky for free!'
    );
  }

  public async getProducts(url: string) {
    const data = await fetch(`${url}/getProducts`);
    const result = await data.json();

    this.allProducts = result;
    console.log(this.allProducts);
  }
}
