import { NgModule } from '@angular/core';
import {Routes,RouterModule,PreloadAllModules} from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
    { path: '', component: ContactComponent},
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes), 
    ],
    exports: [
        RouterModule,
    ],
    providers: [],
})

export class ContactRoutingModule {}