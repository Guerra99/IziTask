import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Conta } from 'src/app/models/conta.model';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { LOGIN } from 'src/app/services/graphql';
import { ModalConfigurationInterface } from 'src/app/components/modal/modal.configuration.interface';
import { ModalType } from 'src/app/components/modal/modal.-type.enum';
import { IziService } from 'src/app/services/izi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showModal = false;

  modalError: ModalConfigurationInterface = {
    modalType: ModalType.error,
    text: 'Ocorreu um erro ao efetuar o login',
    buttons: [
      {
        text: 'Fechar',
        callback: () => { this.showModal = false; }
      }
    ]
  };

  modalConfig: ModalConfigurationInterface;

  usuarioLogado = '';
  usuarioLogadoJSON: Conta = null;
  contaForm: FormGroup;

  @Output() openMenuQuadrosEvent: EventEmitter<Conta> = new EventEmitter<Conta>();
  @Output() openLandingEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() openCadastroUsuarioEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private iziService: IziService,
    private authService: AuthGuardService,
    private fb: FormBuilder,
    private apollo: Apollo) {

    this.contaForm = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  redirectLanding() {
    this.openLandingEvent.emit();
  }

  redirectCadastroUsuario() {
    this.openCadastroUsuarioEvent.emit();
  }

  redirectMenuQuadros() {
    this.openMenuQuadrosEvent.emit();
  }

  logar(conta: Conta) {
    console.log(conta);
    this.authService.logar(conta);
  }

  login() {
    this.apollo.mutate({
      mutation: LOGIN,
      variables: {
        email: this.contaForm.get('email').value,
        password: this.contaForm.get('senha').value
      }
    }).subscribe(res => {

      this.usuarioLogado = this.iziService.getUsuarioConta(this.contaForm.get('email').value);
      this.usuarioLogadoJSON = JSON.parse(this.usuarioLogado);
      // const user: Conta = {
      //   email: this.contaForm.get('email').value,
      //   senha: this.contaForm.get('senha').value,
      //   id: '',
      //   nome: '',
      //   sobrenome: '',
      //   logado: true
      // };

      this.openMenuQuadrosEvent.emit(this.usuarioLogadoJSON);
    }, err => {
      this.showModal = true;
      this.modalConfig = this.modalError;
    });
  }
}
