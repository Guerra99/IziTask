import { NgModule } from '@angular/core';
import { NovoTimeComponent } from './novo-time.component';
import { CommonModule } from '@angular/common';
import { HeaderIziModule } from '../../components/header-izi/header-izi.module';
import { SidebarModule } from '../../components/sidebar/sidebar.module';
import { QuadrosModule } from '../../components/quadros/quadros.module';
import { CardTimeModule } from 'src/app/components/card-time/card-time.module';
import { ModalInviteModule } from 'src/app/components/modal-invite/modal-invite.module';

@NgModule({
    declarations: [
        NovoTimeComponent
    ],
    imports: [
        CommonModule,
        HeaderIziModule,
        SidebarModule,
        QuadrosModule,
        CardTimeModule,
        ModalInviteModule
    ],
    exports: [
        NovoTimeComponent
    ],
    providers: [],
})
export class NovoTimeModule { }
