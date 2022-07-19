import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from "./products/products.component";
import { CartComponent } from "./cart/cart.component";
import { SubmitorderComponent } from './submitorder/submitorder.component';


const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'SubmitOrder', component: SubmitorderComponent },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }