import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { LandingPageComponent } from './containers/landing-page/landing-page.component';
import { CadastroUsuarioComponent } from './containers/cadastro-usuario/cadastro-usuario.component';
import { MenuQuadrosComponent } from './containers/menu-quadros/menu-quadros.component';
import { MeuIziComponent } from './containers/meu-izi/meu-izi.component';
import { NovoTimeComponent } from './containers/novo-time/novo-time.component';
import { AuthGuard } from './guard/auth-guard';


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastro-usuario',
    component: CadastroUsuarioComponent,
  },
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
