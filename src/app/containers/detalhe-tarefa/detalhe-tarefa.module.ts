import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DetalheTarefaComponent } from './detalhe-tarefa.component';
import { HeaderIziModule } from '../../components/header-izi/header-izi.module';

@NgModule({
    imports: [HeaderIziModule, CommonModule, FormsModule,
        ReactiveFormsModule],
    exports: [DetalheTarefaComponent],
    declarations: [DetalheTarefaComponent],
    providers: [],
})
export class DetalheTarefaModule { }
