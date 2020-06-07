import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CadastroUsuarioComponent } from './cadastro-usuario.component';
import {FormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        CadastroUsuarioComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        CadastroUsuarioComponent
    ],
    providers: [],
})
export class CadastroUsuarioModule { }
