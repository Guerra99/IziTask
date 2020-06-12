import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { LandingPageComponent } from './containers/landing-page/landing-page.component';
import { CadastroUsuarioComponent } from './containers/cadastro-usuario/cadastro-usuario.component';
import { MenuQuadrosComponent } from './containers/menu-quadros/menu-quadros.component';
import { MeuIziComponent } from './containers/meu-izi/meu-izi.component';
import { NovoTimeComponent } from './containers/novo-time/novo-time.component';
import { AuthGuard } from './guard/auth-guard';
import { QuadroBacklogComponent } from './containers/quadro-backlog/quadro-backlog.component';
import { CadastroTarefaComponent } from './containers/cadastro-tarefa/cadastro-tarefa.component';
import { DetalheTarefaComponent } from './containers/detalhe-tarefa/detalhe-tarefa.component';
import { IziContainerComponent } from './containers/izi-container.component';


const routes: Routes = [
  {
    path: 'izi-task',
    component: IziContainerComponent
  },
  { path: '', redirectTo: 'izi-task', pathMatch: 'full' },
  { path: '**', redirectTo: 'izi-task', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
