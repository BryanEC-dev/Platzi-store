import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ServerInternalComponent } from './components/server-internal/server-internal.component';
import { PagesRoutingModule } from './pages-routing.module';


@NgModule({
  declarations: [
    PageNotFoundComponent,
    ServerInternalComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
