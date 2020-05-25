import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroUsuarioComponent } from './cadastro-usuario.component';


export const CADASTRO_USER_ROUTES: Routes = [
    {
        path: 'cadastro-usuario',
        component: CadastroUsuarioComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(CADASTRO_USER_ROUTES)],
    exports: [RouterModule]
})

export class CadastroUsuarioRouting { }
