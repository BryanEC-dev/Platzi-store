import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {path : '', component : HomeComponent},
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes), // TODO: que hace esta linea
    ],
    exports: [
        RouterModule,
    ],
    providers: [],
})
export class FeatureModule {}

export class HomeRoutingModule{}