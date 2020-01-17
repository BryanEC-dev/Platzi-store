import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params  } from '@angular/router'; 
import {ProductsService} from '../../services/products.service'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  
  public product:any;
  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit() {
    this.route.params.subscribe((params : Params) => {
      let idProducto = params.id;
      this.product = this.productsService.getProduct(idProducto);
      console.log(this.product);
    });
  }

}
