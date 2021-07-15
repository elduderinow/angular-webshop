import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './src/components/header/header.component';
import { MainComponent } from './src/components/main/main.component';
import { FooterComponent } from './src/components/footer/footer.component';
import { NavbarComponent } from './src/components/main/navbar/navbar.component';
import { OrdersComponent } from './src/components/main/orders/orders.component';
import { ProductsComponent } from './src/components/main/products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    NavbarComponent,
    OrdersComponent,
    ProductsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
