import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NewProduct} from "./new-product";

@Injectable({
  providedIn: 'root'
})
export class AddProductService {
  private http: HttpClient;
  public url : string = "http://localhost:9000/addProduct";

  constructor(http: HttpClient) {
    this.http = http;
  }

  addProduct(x: NewProduct) {
    return this.http.post(this.url, x)
  }
}
