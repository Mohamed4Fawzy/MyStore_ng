import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Product } from "../../Product";
import { CartService } from "../cart.service";
import { ProductsService } from "../products.service"; 

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product = new Product();
  quantity: number = 1;


  constructor(private cart: CartService,  private products: ProductsService) { }

  ngOnInit(): void {
   
  }

  addToCart(): void {
    this.cart.add(this.product, this.quantity); 
  }

  setQuantity(e: Event): void {
    this.quantity = parseInt( (e.target as HTMLSelectElement).value );
  }

}