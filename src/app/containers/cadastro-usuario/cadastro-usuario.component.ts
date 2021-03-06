import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { CREATE_ACCOUNT_MUTATION } from '../../services/graphql';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalConfigurationInterface } from 'src/app/components/modal/modal.configuration.interface';
import { ModalType } from 'src/app/components/modal/modal.-type.enum';
import { IziService } from 'src/app/services/izi.service';
import { Conta } from 'src/app/models/conta.model';

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
        callback: () => {
          this.showModal = false;
          this.usuarioForm.reset();
        }
      }
    ]
  };

  modalConfig: ModalConfigurationInterface;

  usuarioForm: FormGroup;

  usuarioLogado = '';

  @Output() openLandingEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() openLoginEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor(private router: Router, private apollo: Apollo, private fb: FormBuilder, private iziService: IziService) {
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
    this.openLandingEvent.emit();
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

      const contaUsuario: Conta = {
        id: '1',
        email: this.usuarioForm.get('email').value,
        nome: this.usuarioForm.get('nome').value,
        sobrenome: this.usuarioForm.get('sobrenome').value,
        senha: this.usuarioForm.get('senha').value,
        logado: true
      };

      this.iziService.criarUsuarioConta(this.usuarioForm.get('email').value, contaUsuario);

      this.modalConfig = this.modalSucess;
    }, (error) => {
      this.showModal = true;
      this.modalConfig = this.modalError;
    });
  }

  redirectLogin() {
    this.openLoginEvent.emit();
  }
}
