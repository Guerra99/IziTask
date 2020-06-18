import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CadastroQuadroComponent } from './cadastro-quadro.component';
import { HeaderIziModule } from '../../components/header-izi/header-izi.module';

@NgModule({
    imports: [HeaderIziModule, CommonModule, FormsModule,
        ReactiveFormsModule],
    exports: [CadastroQuadroComponent],
    declarations: [CadastroQuadroComponent],
    providers: [],
})
export class CadastroQuadroModule { }
