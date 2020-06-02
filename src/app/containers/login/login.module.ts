import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        LoginComponent
    ],
    providers: [],
})
export class LoginModule { }
