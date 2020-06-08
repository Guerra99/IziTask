import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { CREATE_ACCOUNT_MUTATION } from "./graphql";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  usuarioForm: FormGroup;

  constructor(private router: Router, private apollo: Apollo, private fb: FormBuilder) {
    this.usuarioForm = this.fb.group({
      nome: [],
      sobrenome: [],
      email: [],
      senha: []
    });
  }

  ngOnInit(): void {
  }

  redirectLanding() {
    this.router.navigate(['']);
  }

  createAccount() {
    this.apollo.mutate({
      mutation: CREATE_ACCOUNT_MUTATION,
      variables: {
        email: this.usuarioForm.get('email').value,
        password: this.usuarioForm.get('senha').value,
        firstName: this.usuarioForm.get('nome').value,
        lastName: this.usuarioForm.get('sobrenome').value,
      }
    }).subscribe(({ data }) => {
      console.log(data);
    }, (error) => {
      console.error('Houve algum erro ao enviar mutation: ', error)
    });
  }

  redirectLogin() {
    this.router.navigate(['/login']);
  }
}
