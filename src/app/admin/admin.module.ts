import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

import { NavComponent } from './components/nav/nav.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

import { LayoutModule } from '@angular/cdk/layout';
import { ProductCreateComponent } from './components/product-create/product-create.component';





@NgModule({
  declarations: [ProductFormComponent, NavComponent, ProductListComponent, ProductCreateComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    LayoutModule,
  ]  

})
export class AdminModule { }
