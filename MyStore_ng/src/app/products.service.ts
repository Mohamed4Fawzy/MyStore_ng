import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from "../Product";
import { GetProductsService } from "./get-products.service";
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [];
  loadedProduct = new BehaviorSubject<boolean>(false);

  constructor(private GetProducts: GetProductsService, private router: Router) { 
  }

  loadProducts(): void {
      this.GetProducts.getProducts().subscribe(( data: Product[] ) => {
        data.forEach(( d: Product ) => d.quantity = 0);
        this.products = data as Product[];
        this.loadedProduct.next(true);
      });
    
  }
  
  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product {
      const found: Product | undefined = this.products.find(p => p.id == id);
      if (found) return found;
      else return new Product();
  }


}
