import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { QuadrosComponent } from './components/quadros/quadros.component';
import { LandingPageModule } from './containers/landing-page/landing-page.module';
import { CadastroUsuarioComponent } from './containers/cadastro-usuario/cadastro-usuario.component';
import { LoginModule } from './containers/login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    QuadrosComponent,
    CadastroUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingPageModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
