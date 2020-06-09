import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DetalheTarefaComponent } from './detalhe-tarefa.component';
import { HeaderIziModule } from '../../components/header-izi/header-izi.module';
import { ModalModule } from '../../components/modal/modal.module'

@NgModule({
    imports: [HeaderIziModule, CommonModule, FormsModule,
        ReactiveFormsModule, ModalModule],
    exports: [DetalheTarefaComponent],
    declarations: [DetalheTarefaComponent],
    providers: [],
})
export class DetalheTarefaModule { }
