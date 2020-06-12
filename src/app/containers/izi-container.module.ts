import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { IziContainerComponent } from './izi-container.component';
import { MenuQuadrosComponent } from './menu-quadros/menu-quadros.component';
import { MeuIziComponent } from './meu-izi/meu-izi.component';
import { NovoTimeComponent } from './novo-time/novo-time.component';
import { QuadroBacklogComponent } from './quadro-backlog/quadro-backlog.component';
import { CadastroTarefaComponent } from './cadastro-tarefa/cadastro-tarefa.component';
import { DetalheTarefaComponent } from './detalhe-tarefa/detalhe-tarefa.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';

import { CardTimeModule } from '../components/card-time/card-time.module';
import { HeaderIziModule } from '../components/header-izi/header-izi.module';
import { ModalModule } from '../components/modal/modal.module';
import { ModalInviteModule } from '../components/modal-invite/modal-invite.module';
import { QuadrosModule } from '../components/quadros/quadros.module';
import { SidebarModule } from '../components/sidebar/sidebar.module';
import { IziContainerRoutingModule } from './izi-container-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IziService } from '../services/izi.service';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        CardTimeModule,
        HeaderIziModule,
        ModalModule,
        ModalInviteModule,
        QuadrosModule,
        SidebarModule,
        MatMenuModule,
        MatIconModule,
        // IziContainerRoutingModule
    ],
    exports: [
        IziContainerComponent,
        MenuQuadrosComponent,
        MeuIziComponent,
        NovoTimeComponent,
        QuadroBacklogComponent,
        CadastroTarefaComponent,
        DetalheTarefaComponent,
        LandingPageComponent,
        LoginComponent,
        CadastroUsuarioComponent
    ],
    declarations: [
        IziContainerComponent,
        MenuQuadrosComponent,
        MeuIziComponent,
        NovoTimeComponent,
        QuadroBacklogComponent,
        CadastroTarefaComponent,
        DetalheTarefaComponent,
        LandingPageComponent,
        LoginComponent,
        CadastroUsuarioComponent
    ],
    providers: [IziService],
})
export class IziContainerModule { }
