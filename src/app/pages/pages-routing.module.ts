import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ServerInternalComponent } from './components/server-internal/server-internal.component';



const routes: Routes = [
    { path: '', component: PageNotFoundComponent },
    /* { path: '', component: ServerInternalComponent }, */
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

export class PagesRoutingModule { }