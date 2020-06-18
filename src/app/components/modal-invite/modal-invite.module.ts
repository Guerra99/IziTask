import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalInviteComponent } from './modal-invite.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    imports: [CommonModule, MatTooltipModule],
    exports: [ModalInviteComponent],
    declarations: [ModalInviteComponent],
    providers: [],
})
export class ModalInviteModule { }
