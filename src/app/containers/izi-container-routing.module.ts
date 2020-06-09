import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuQuadrosComponent } from '../containers/menu-quadros/menu-quadros.component';
import { MeuIziComponent } from '../containers/meu-izi/meu-izi.component';
import { NovoTimeComponent } from '../containers/novo-time/novo-time.component';
import { QuadroBacklogComponent } from './quadro-backlog/quadro-backlog.component';
import { CadastroTarefaComponent } from '../containers/cadastro-tarefa/cadastro-tarefa.component';
import { DetalheTarefaComponent } from '../containers/detalhe-tarefa/detalhe-tarefa.component';


const routes: Routes = [
    {
        path: 'menu-quadros',
        component: MenuQuadrosComponent,
        // canActivate: [AuthGuard],
        // canLoad: [AuthGuard]
    },
    {
        path: 'meu-izi',
        component: MeuIziComponent,
        // canActivate: [AuthGuard],
        // canLoad: [AuthGuard]
    },
    {
        path: 'novo-time',
        component: NovoTimeComponent,
        // canActivate: [AuthGuard],
        // canLoad: [AuthGuard]
    },
    {
        path: 'quadro-backlog',
        component: QuadroBacklogComponent
    },
    {
        path: 'cadastro-tarefa',
        component: CadastroTarefaComponent
    },
    {
        path: 'detalhe-tarefa',
        component: DetalheTarefaComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class IziContainerRoutingModule { }
