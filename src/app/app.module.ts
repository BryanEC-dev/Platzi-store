import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
/* import { SharedModule } from './shared/shared.module'; */
import { CoreModule } from './core/core.module';


import { MainComponent } from './layaout/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
/*     SharedModule, */
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
