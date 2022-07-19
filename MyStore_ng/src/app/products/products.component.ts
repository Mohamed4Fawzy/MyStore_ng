import { Component, OnInit } from '@angular/core';
import { Product } from "../../Product";
import { ProductsService } from "../products.service";

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService,  private http: HttpClient ) { }

  ngOnInit(): void {
  
    this.productsService.loadProducts();
    this.productsService.loadedProduct.subscribe(() => this.products =this.productsService.getProducts());
   

  }

}