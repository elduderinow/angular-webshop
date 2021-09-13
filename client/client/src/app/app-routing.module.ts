import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './src/components/main/orders/orders.component';
import { ProductsComponent } from './src/components/main/products/products.component';
import { AddOrderComponent } from './src/components/main/add-order/add-order.component';
import { NewProductComponent } from './src/components/main/new-product/new-product.component';

const routes: Routes = [
  { path: 'orders', component: OrdersComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'orders/new-order', component: AddOrderComponent },
  { path: 'products/new-product', component: NewProductComponent },
  { path: 'orders/edit/:id', component: AddOrderComponent },
  { path: '', redirectTo: '/orders', pathMatch: 'full' },
  { path: '**', component: OrdersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
