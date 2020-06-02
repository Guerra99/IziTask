import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageModule } from './containers/landing-page/landing-page.module';
import { CadastroUsuarioModule } from './containers/cadastro-usuario/cadastro-usuario.module';
import { LoginModule } from './containers/login/login.module';
import { MenuQuadrosModule } from './containers/menu-quadros/menu-quadros.module';
import { MeuIziModule } from './containers/meu-izi/meu-izi.module';
import { NovoTimeModule } from './containers/novo-time/novo-time.module';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthGuard } from './guard/auth-guard';
import { ModalInviteComponent } from './components/modal-invite/modal-invite.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalInviteComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LandingPageModule,
    LoginModule,
    CadastroUsuarioModule,
    MeuIziModule,
    MenuQuadrosModule,
    NovoTimeModule,
    AppRoutingModule
  ],
  providers: [AuthGuardService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
