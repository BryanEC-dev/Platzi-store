import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { environment } from '../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  products: Product[];


  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
   }

  getAllProducts() {
    return this.httpClient.get<Product[]>(`${environment.url_api}products`);
  }

  getProduct(id: string) {
    return this.httpClient.get<Product>(`${environment.url_api}products/${id}`);
  }

  createProduct(product : Product) {
    return this.httpClient.post(`${environment.url_api}products,`,product)
  }
  
  // partial, especifica que solo es una parte del modelo, lo que se va a enviar 
  updateProduct(product:Partial<Product>, id:string) {
    return this.httpClient.put(`${environment.url_api}products/${id},`, product)
  }

  // funcióon delete 
  

}
 