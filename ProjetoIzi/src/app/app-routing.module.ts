import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { LandingPageComponent } from './containers/landing-page/landing-page.component';
import { CadastroUsuarioComponent } from './containers/cadastro-usuario/cadastro-usuario.component';


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
    // loadChildren: () => import('./containers/landing-page/landing-page.module').then(m => m.LandingPageModule)
  },
  {
    path: 'login',
    component: LoginComponent
    // loadChildren: () => import('./containers/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'cadastro-usuario',
    component: CadastroUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
