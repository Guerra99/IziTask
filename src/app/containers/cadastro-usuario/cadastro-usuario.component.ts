import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { CREATE_ACCOUNT_MUTATION } from './graphql';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalConfigurationInterface } from 'src/app/components/modal/modal.configuration.interface';
import { ModalType } from 'src/app/components/modal/modal.-type.enum';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {
  showModal = false;

  modalSucess: ModalConfigurationInterface = {
    modalType: ModalType.accept,
    text: 'Usuário cadastrado com sucesso!',
    buttons: [
      {
        text: 'Ok',
        callback: () => {
          this.showModal = false;
          this.redirectLogin();
        }
      }
    ]
  };

  modalError: ModalConfigurationInterface = {
    modalType: ModalType.error,
    text: 'Ocorreu um erro ao efetuar o cadastro',
    buttons: [
      {
        text: 'Fechar',
        callback: () => { this.showModal = false; }
      }
    ]
  };

  modalConfig: ModalConfigurationInterface;

  usuarioForm: FormGroup;

  constructor(private router: Router, private apollo: Apollo, private fb: FormBuilder) {
    this.usuarioForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
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
    }).subscribe(x => {
      this.showModal = true;
      this.modalConfig = this.modalSucess;
    }, (error) => {
      this.showModal = true;
      this.modalConfig = this.modalError;
    });
  }

  redirectLogin() {
    this.router.navigate(['/login']);
  }

  getErrorMessage() {
    if (this.usuarioForm.get('email').hasError('required')) {
      return 'You must enter a value';
    }
  }
}
