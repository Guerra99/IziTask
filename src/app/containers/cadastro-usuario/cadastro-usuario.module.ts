import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CadastroUsuarioComponent } from './cadastro-usuario.component';


@NgModule({
    declarations: [
        CadastroUsuarioComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        CadastroUsuarioComponent
    ],
    providers: [],
})
export class CadastroUsuarioModule { }
