import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/components/home/home.component';
import {ProductsComponent} from '../app/components/products/products.component';
import {ContactComponent} from '../app/components/contact/contact.component';
import { ProductDetailComponent } from '../app/components/product-detail/product-detail.component';
import {PageNotFoundComponent} from '../app/components/pages/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'contact', component: ContactComponent},
  { path: '', redirectTo: '/home' , pathMatch:'full'},
  { path: '**', component: PageNotFoundComponent}, // TODO: añadir un bonito 404
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
