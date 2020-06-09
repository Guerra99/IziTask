import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { QuadrosComponent } from './quadros.component';
import { CardTimeModule } from '../../components/card-time/card-time.module';


@NgModule({
    declarations: [
        QuadrosComponent
    ],
    imports: [
        CommonModule, CardTimeModule
    ],
    exports: [
        QuadrosComponent
    ],
    providers: [],
})

export class QuadrosModule { }
