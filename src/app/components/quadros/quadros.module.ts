import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { QuadrosComponent } from './quadros.component';
import { CardTimeModule } from '../../components/card-time/card-time.module';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
    declarations: [
        QuadrosComponent
    ],
    imports: [
        CommonModule, CardTimeModule, MatTooltipModule
    ],
    exports: [
        QuadrosComponent
    ],
    providers: [],
})

export class QuadrosModule { }
