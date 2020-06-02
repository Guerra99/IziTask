import { NgModule } from '@angular/core';

import { LandingPageComponent } from './landing-page.component';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
    declarations: [
        LandingPageComponent
    ],
    imports: [
        CommonModule,
        MatMenuModule,
        MatIconModule,
    ],
    exports: [
        LandingPageComponent
    ],
    providers: [],
})
export class LandingPageModule { }
