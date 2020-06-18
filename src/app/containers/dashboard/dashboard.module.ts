import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { HeaderIziModule } from '../../components/header-izi/header-izi.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatAccordion } from '@angular/material/expansion';


@NgModule({
    imports: [HeaderIziModule, CommonModule, MatExpansionModule, MatAccordion],
    exports: [DashboardComponent],
    declarations: [DashboardComponent],
    providers: [],
})
export class DashboardModule { }
