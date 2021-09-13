import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  url = 'http://localhost:9000';

  constructor(private http: HttpClient) {}

  addOrder(data: Order) {
    return this.http.post(`${this.url}/addOrder`, data);
  }

  updateOrder(data: Order, id: string) {
    return this.http.put(`${this.url}/updateOrder/${id}`, data);
  }
}
