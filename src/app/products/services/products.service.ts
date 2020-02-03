import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model'


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  products: Product[];


  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
   }

  getAllProducts() {
    return this.httpClient.get<Product[]>('http://platzi-store.herokuapp.com/products/');
  }

  getProduct(id: string) {
    return this.httpClient.get<Product[]>(`http://platzi-store.herokuapp.com/products/${id}`);
  }

}
 