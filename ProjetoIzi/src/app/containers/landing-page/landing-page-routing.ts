import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';


export const LANDING_ROUTES: Routes = [
    {
        path: '',
        component: LandingPageComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(LANDING_ROUTES)],
    exports: [RouterModule]
})

export class LandingPageRouting { }
