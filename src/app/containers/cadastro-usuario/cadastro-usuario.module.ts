import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CadastroUsuarioComponent } from './cadastro-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ModalModule } from '../../components/modal/modal.module';
import { MatInputModule } from '@angular/material/input';


@NgModule({
    declarations: [
        CadastroUsuarioComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports: [
        CadastroUsuarioComponent
    ],
    providers: [],
})
export class CadastroUsuarioModule { }
