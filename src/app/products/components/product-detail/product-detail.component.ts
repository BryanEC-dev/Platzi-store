import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params  } from '@angular/router'; 
import {ProductsService} from '../../services/products.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  
  public product: Product;
  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit() {
    this.route.params.subscribe((params : Params) => {
      let idProducto = params.id;
      this.productsService.getProduct(idProducto).subscribe(producto =>{
        this.product = producto;
      });
    });
  }

  createProduct() {

    const newProduct : Product = {      
      "id": "6",
      "image": "assets/images/stickers2.png",
      "title": "Stickers",
      "price": 80000,
      "description": "bla bla bla bla bla"
    }
    this.productsService.createProduct(newProduct).subscribe(product => {
      console.log(product);
    });
  }

}
