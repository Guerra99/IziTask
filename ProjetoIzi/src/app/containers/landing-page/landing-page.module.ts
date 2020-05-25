import { NgModule } from '@angular/core';

import { LandingPageComponent } from './landing-page.component';
import { LandingPageRouting } from './landing-page-routing';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    declarations: [
        LandingPageComponent
    ],
    imports: [
        CommonModule,
        MatMenuModule,
        MatIconModule,
        BrowserAnimationsModule,
        LandingPageRouting
    ],
    exports: [
        LandingPageComponent
    ],
    providers: [],
})
export class LandingPageModule { }
