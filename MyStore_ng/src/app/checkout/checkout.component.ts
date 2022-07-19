
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from "../../Order";
import { UserInfo } from "../../UserInfo";
import { CartService } from "../cart.service";
import { Observable } from 'rxjs';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  name: string = "";
  address: string = "";
  creditCard: string = "";
  UserInfo: UserInfo = new UserInfo();
  order: Order = new Order();
  cartCount$: Observable<number> = new Observable<number>();

  constructor(private router: Router, private cart: CartService) { }

  ngOnInit(): void {
    this.cartCount$ = this.cart.count;
  }

  onSubmit(): void {
    this.UserInfo.fullname = this.name;
    this.UserInfo.address = this.address;
    this.UserInfo.creditCard = this.creditCard;

    this.order.products = this.cart.get();
    this.order.UserInfo = this.UserInfo;

    this.router.navigateByUrl("/SubmitOrder"); 
  }

}
