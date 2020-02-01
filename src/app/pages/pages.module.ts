import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ServerInternalComponent } from './components/server-internal/server-internal.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    ServerInternalComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
