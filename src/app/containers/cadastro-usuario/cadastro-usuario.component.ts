import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import {CREATE_ACCOUNT_MUTATION} from "./graphql";

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

  constructor(private router: Router, private apollo: Apollo) {}

  ngOnInit(): void {
  }

  redirectLanding() {
    this.router.navigate(['']);
  }

  createAccount() {
    this.apollo.mutate({
      mutation: CREATE_ACCOUNT_MUTATION,
      variables: {
        email: this.email,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName,
      }
    }).subscribe(({data}) => {
      console.log(data)
    }, (error) => {
      console.error('Houve algum erro ao enviar mutation: ', error)
    });
  }

  redirectLogin() {
    this.router.navigate(['/login']);
  }
}
