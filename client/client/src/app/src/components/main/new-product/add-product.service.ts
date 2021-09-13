import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/product';

@Injectable({
  providedIn: 'root',
})
export class AddProductService {
  url: string = 'http://localhost:9000';

  constructor(private http: HttpClient) {}

  addProduct(product: Product) {
    return this.http.post(`${this.url}/addProduct`, product);
  }
}
