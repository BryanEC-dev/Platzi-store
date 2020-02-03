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
  
  public product: Product[];
  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit() {
    this.route.params.subscribe((params : Params) => {
      let idProducto = params.id;
      this.productsService.getProduct(idProducto).subscribe(product =>{
        this.product = product;
      });
    });
  }

}
