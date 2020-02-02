import { NgModule } from '@angular/core';
import { Routes, RouterModule ,PreloadAllModules } from '@angular/router';
import { MainComponent } from '../app/layaout/main/main.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {
    path: '' , 
    component: MainComponent,
    children : [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)}, 
      { path: 'contact', loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule)},
      { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)},    
    ]
  },   
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  // route  of error
  { path: '**', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) } // TODO: añadir un bonito 404
];

@NgModule({
imports: [RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules
})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
