import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from "../Product";


@Injectable({
  providedIn: 'root'
})
export class GetProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("../assets/Products.json");
  }
}
