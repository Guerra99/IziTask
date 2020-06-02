import { NgModule } from '@angular/core';
import { MenuQuadrosComponent } from './menu-quadros.component';
import { CommonModule } from '@angular/common';
import { HeaderIziModule } from '../../components/header-izi/header-izi.module';
import { SidebarModule } from '../../components/sidebar/sidebar.module';
import { QuadrosModule } from '../../components/quadros/quadros.module';

@NgModule({
    declarations: [
        MenuQuadrosComponent
    ],
    imports: [
        CommonModule,
        HeaderIziModule,
        SidebarModule,
        QuadrosModule
    ],
    exports: [
        MenuQuadrosComponent
    ],
    providers: [],
})
export class MenuQuadrosModule { }
