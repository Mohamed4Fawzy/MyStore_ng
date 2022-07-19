import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from "../../Product";
import { CartService } from "../cart.service";
import { CartComponent } from "../cart/cart.component";

@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() product: Product = new Product();
  @Output() removeItemFromCart: EventEmitter<Product> = new EventEmitter();

  constructor(private cart: CartService, private cartComponent: CartComponent) { }

  ngOnInit(): void {
  }

  removeFromCart(): void {
    this.removeItemFromCart.emit(this.product);
    this.cart.remove(this.product);
  }

  checkNumbers(e: Event): void {
    const input = ( e.target as HTMLInputElement)
    const value= parseInt(input.value);
    
    if (value && Math.abs(value) > 0) {
      input.value = Math.abs(value).toString();
    } else {
      input.value = "1";
    }

    this.product.quantity = parseInt(input.value);
    this.cart.total.next(this.cart.getTotal());
    this.cart.count.next(this.cart.getCount());
  }

}