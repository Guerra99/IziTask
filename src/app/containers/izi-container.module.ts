import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { IziContainerComponent } from './izi-container.component';
// import { MenuQuadrosModule } from '../containers/menu-quadros/menu-quadros.module';
// import { MeuIziModule } from '../containers/meu-izi/meu-izi.module';
// import { NovoTimeModule } from '../containers/novo-time/novo-time.module';
// import { QuadroBacklogModule } from './quadro-backlog/quadro-backlog.module';
// import { CadastroTarefaModule } from '../containers/cadastro-tarefa/cadastro-tarefa.module';
// import { DetalheTarefaModule } from '../containers/detalhe-tarefa/detalhe-tarefa.module';
import { MenuQuadrosComponent } from './menu-quadros/menu-quadros.component';
import { MeuIziComponent } from './meu-izi/meu-izi.component';
import { NovoTimeComponent } from './novo-time/novo-time.component';
import { QuadroBacklogComponent } from './quadro-backlog/quadro-backlog.component';
import { CadastroTarefaComponent } from './cadastro-tarefa/cadastro-tarefa.component';
import { DetalheTarefaComponent } from './detalhe-tarefa/detalhe-tarefa.component';

import { CardTimeModule } from '../components/card-time/card-time.module';
import { HeaderIziModule } from '../components/header-izi/header-izi.module';
import { ModalModule } from '../components/modal/modal.module';
import { ModalInviteModule } from '../components/modal-invite/modal-invite.module';
import { QuadrosModule } from '../components/quadros/quadros.module';
import { SidebarModule } from '../components/sidebar/sidebar.module';

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
        SidebarModule
    ],
    exports: [
        IziContainerComponent,
        MenuQuadrosComponent,
        MeuIziComponent,
        NovoTimeComponent,
        QuadroBacklogComponent,
        CadastroTarefaComponent,
        DetalheTarefaComponent
    ],
    declarations: [
        IziContainerComponent,
        MenuQuadrosComponent,
        MeuIziComponent,
        NovoTimeComponent,
        QuadroBacklogComponent,
        CadastroTarefaComponent,
        DetalheTarefaComponent
    ],
    providers: [],
})
export class IziContainerModule { }
