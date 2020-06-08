import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuadroBacklogComponent } from './quadro-backlog.component';
import { HeaderIziModule } from '../../components/header-izi/header-izi.module';
import { SidebarModule } from '../../components/sidebar/sidebar.module';

@NgModule({
    imports: [HeaderIziModule, SidebarModule, CommonModule],
    exports: [QuadroBacklogComponent],
    declarations: [QuadroBacklogComponent],
    providers: [],
})
export class QuadroBacklogModule { }
