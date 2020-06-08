import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CadastroUsuarioComponent } from './cadastro-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        CadastroUsuarioComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        CadastroUsuarioComponent
    ],
    providers: [],
})
export class CadastroUsuarioModule { }
