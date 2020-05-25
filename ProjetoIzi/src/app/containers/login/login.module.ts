import { NgModule } from '@angular/core';

import { LOGIN_ROUTES, LoginRouting } from './login-routing';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { HeaderIziModule } from '../../components/header-izi/header-izi.module';


@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        LoginRouting,
        HeaderIziModule
    ],
    exports: [
        LoginComponent
    ],
    providers: [],
})
export class LoginModule { }
