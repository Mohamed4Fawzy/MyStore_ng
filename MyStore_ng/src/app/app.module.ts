import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { PartsComponent } from './parts/parts.component';
import { ProductComponent } from './product/product.component';
import { CartItemComponent } from './cartitem/cartitem.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SubmitorderComponent } from './submitorder/submitorder.component';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductsComponent,
    PartsComponent,
    ProductComponent,
    CartItemComponent,
    CheckoutComponent,
    SubmitorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
