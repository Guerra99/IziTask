import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CadastroTarefaComponent } from './cadastro-tarefa.component';
import { HeaderIziModule } from '../../components/header-izi/header-izi.module';

@NgModule({
    imports: [HeaderIziModule, CommonModule, FormsModule,
        ReactiveFormsModule],
    exports: [CadastroTarefaComponent],
    declarations: [CadastroTarefaComponent],
    providers: [],
})
export class CadastroTarefaModule { }
