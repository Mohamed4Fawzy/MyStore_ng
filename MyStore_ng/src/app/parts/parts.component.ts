import { Component, OnInit } from '@angular/core';
import { CartService } from "../cart.service";

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent implements OnInit {
  cartCount: number = 0;
  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.cart.count.subscribe(count => this.cartCount = count);
  }

}

