import { NgModule } from '@angular/core';

import { CadastroUsuarioRouting } from './cadastro-usuario-routing';
import { CommonModule } from '@angular/common';
import { HeaderIziModule } from '../../components/header-izi/header-izi.module';
import { CadastroUsuarioComponent } from './cadastro-usuario.component';


@NgModule({
    declarations: [
        CadastroUsuarioComponent
    ],
    imports: [
        CommonModule,
        CadastroUsuarioRouting,
        HeaderIziModule
    ],
    exports: [
        CadastroUsuarioComponent
    ],
    providers: [],
})
export class LoginModule { }
