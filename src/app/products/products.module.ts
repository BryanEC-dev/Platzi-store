import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { MoreContentPipe } from './pipe/more-content.pipe';
import { MaterialModule } from '../material/material.module';



import { ProductsRoutingModule } from './products-routing.module';


@NgModule({
  declarations: [
    ProductComponent, 
    ProductsComponent,
    ProductDetailComponent,
    MoreContentPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule
  ]
})
export class ProductsModule { }
