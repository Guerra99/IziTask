import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageModule } from './containers/landing-page/landing-page.module';
import { CadastroUsuarioModule } from './containers/cadastro-usuario/cadastro-usuario.module';
import { LoginModule } from './containers/login/login.module';

import { AuthGuardService } from './services/auth-guard.service';
import { AuthGuard } from './guard/auth-guard';
import { ModalModule } from './components/modal/modal.module';

import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpClientModule } from '@angular/common/http';
import uri from './graphql.module';
import { IziContainerModule } from './containers/izi-container.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LandingPageModule,
    LoginModule,
    CadastroUsuarioModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    ModalModule,
    IziContainerModule,
    AppRoutingModule
  ],
  providers: [AuthGuardService, AuthGuard,
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: uri
          })
        };
      },
      deps: [HttpLink]
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
