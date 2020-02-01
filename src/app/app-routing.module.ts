import { NgModule } from '@angular/core';
import { Routes, RouterModule ,PreloadAllModules } from '@angular/router';
/* import {ProductsComponent} from '../app/components/products/products.component';
import { ProductDetailComponent } from '../app/components/product-detail/product-detail.component'; */
import {PageNotFoundComponent} from '../app/components/pages/page-not-found/page-not-found.component';
import { MainComponent } from '../app/components/layaout/main/main.component';



const routes: Routes = [
  {
    path: '' , 
    component: MainComponent,
    children : [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)}, 
      { path: 'contact', loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule)},
      { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)},
      /* { path: 'products', component: ProductsComponent },
      { path: 'product/:id', component: ProductDetailComponent } */
    ]
  },
  { path: '', redirectTo: '/contact' , pathMatch:'full'},

  // route  of error
  { path: '**', component: PageNotFoundComponent}, // TODO: añadir un bonito 404
];



@NgModule({
imports: [RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules
})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
