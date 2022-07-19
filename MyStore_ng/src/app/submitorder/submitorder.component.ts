import { Component, OnInit } from '@angular/core';
import { CartService } from "../cart.service";
import { Order } from "../../Order";

@Component({
  selector: 'app-submitorder',
  templateUrl: './submitorder.component.html',
  styleUrls: ['./submitorder.component.css']
})
export class SubmitorderComponent implements OnInit {
  order: Order = new Order();;
  total: number = 0;
  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.order = this.cart.getOrder();
    this.total = this.cart.getTotalFromOrder(this.order);
  }

}

