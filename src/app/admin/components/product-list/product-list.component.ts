import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../products/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  
  products : any[] = [] ;
  displayedColumns: string[] = ['title', 'price','actions'];
  constructor(private productService : ProductsService) {
      this.productService.getAllProducts().subscribe( (product) => {
        this.products = product;
        console.log(this.products);
      })
   }

  ngOnInit() {
  }

  // TODO: eliminar el producto del indice sin recargar la pagina 
  deleteProduct(product){
    console.log('Eliminando producto:');
    console.log(product);
  }
  
  
  /* dataSource = this.products; */
}
