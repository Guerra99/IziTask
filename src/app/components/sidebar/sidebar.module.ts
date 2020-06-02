import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ModalModule } from '../modal-invite/modal-invite.module';
import { SidebarComponent } from './sidebar.component';


@NgModule({
    declarations: [
        SidebarComponent
    ],
    imports: [
        CommonModule,
        ModalModule
    ],
    exports: [
        SidebarComponent,
    ],
    providers: [],
})

export class SidebarModule { }
