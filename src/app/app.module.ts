import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { MoreContentPipe } from './pipe/more-content.pipe';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';

import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { ServerInternalComponent } from './components/pages/server-internal/server-internal.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { MainComponent } from './components/layaout/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    MoreContentPipe,
    ContactComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
   
    PageNotFoundComponent,
    ServerInternalComponent,
    ProductDetailComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
