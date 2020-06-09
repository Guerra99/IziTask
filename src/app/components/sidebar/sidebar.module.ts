import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ModalInviteModule } from '../modal-invite/modal-invite.module';
import { SidebarComponent } from './sidebar.component';


@NgModule({
    declarations: [
        SidebarComponent
    ],
    imports: [
        CommonModule,
        ModalInviteModule
    ],
    exports: [
        SidebarComponent,
    ],
    providers: [],
})

export class SidebarModule { }
