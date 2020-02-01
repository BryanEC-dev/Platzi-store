import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component'
import {ContactRoutingModule} from './contacts-routing.module';


  @NgModule({
    declarations: [
      ContactComponent
    ],
    imports: [
      CommonModule,
      ContactRoutingModule
    ]
  })
export class ContactsModule { }
