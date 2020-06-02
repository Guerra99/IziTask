import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Conta } from 'src/app/models/conta.model';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  contaUsuario = new Conta();
  contaForm: FormGroup;

  constructor(private router: Router, private authService: AuthGuardService, private fb: FormBuilder) {
    this.contaForm = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required],
    });
   }

  ngOnInit(): void {
  }

  redirectLanding() {
    this.router.navigate(['']);
  }

  redirectCadastroUsuario() {
    this.router.navigate(['/cadastro-usuario']);
  }

  redirectMenuQuadros() {
    this.router.navigate(['/menu-quadros']);
  }

  logar(conta: Conta) {
    console.log(conta);
    this.authService.logar(conta);
  }
}
