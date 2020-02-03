import { Component, OnInit } from '@angular/core';
import {ProductsService} from  '../../services/products.service';
import { Product } from '../../models/product.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private productsService: ProductsService) { 
    this.productsService.getAllProducts()
      .subscribe(products => {
        this.products = products;
      });  
  }

  ngOnInit() {
  }

  addCart(id:any){
    console.log(id);
  }
}
