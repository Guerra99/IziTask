import { NgModule } from '@angular/core';
import { MeuIziComponent } from './meu-izi.component';
import { CommonModule } from '@angular/common';
import { HeaderIziModule } from '../../components/header-izi/header-izi.module';
import { SidebarModule } from '../../components/sidebar/sidebar.module';
import { QuadrosModule } from '../../components/quadros/quadros.module';

@NgModule({
    declarations: [
        MeuIziComponent
    ],
    imports: [
        CommonModule,
        HeaderIziModule,
        SidebarModule,
        QuadrosModule
    ],
    exports: [
        MeuIziComponent
    ],
    providers: [],
})
export class MeuIziModule { }
