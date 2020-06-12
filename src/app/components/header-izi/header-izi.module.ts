import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HeaderIziComponent } from './header-izi.component';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
    declarations: [
        HeaderIziComponent
    ],
    imports: [
        CommonModule, MatTooltipModule
    ],
    exports: [
        HeaderIziComponent
    ],
    providers: [],
})

export class HeaderIziModule { }
