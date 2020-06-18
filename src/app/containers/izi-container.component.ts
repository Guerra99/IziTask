import { Component, OnInit } from '@angular/core';
import { Conta } from '../models/conta.model';
import { Quadro } from '../models/quadro.model';
import { Tarefa } from '../models/tarefa.model';
import { ModalConfigurationInterface } from '../components/modal/modal.configuration.interface';
import { ModalType } from '../components/modal/modal.-type.enum';

@Component({
  selector: 'app-izi-container',
  templateUrl: './izi-container.component.html',
  styleUrls: ['./izi-container.component.scss']
})
export class IziContainerComponent implements OnInit {

  constructor() { }

  painelLanding = false;
  painelLogin = false;
  painelCadastroUsuario = false;
  painelDashboard = false;
  painelMenuQuadros = false;
  painelMeuIzi = false;
  painelNovoTime = false;
  painelQuadroBacklog = false;
  painelCadastroTarefa = false;
  painelTarefaDetalhe = false;
  painelCadastroQuadro = false;

  contaLogada: Conta = null;
  quadroSelecionado: Quadro = null;
  tarefaSelecionada: any = null;

  sidebarItem: number;
  showModalInvite = false;
  showModal = false;
  modalConfiguration: ModalConfigurationInterface;

  ngOnInit(): void {
    // this.painelLanding = true;
    // this.painelMenuQuadros = true;
    this.painelDashboard = true;
  }
  openModal(modalConfig: ModalConfigurationInterface) {
    this.showModal = true;
    this.modalConfiguration = modalConfig;
  }
  openLanding() {
    this.painelLanding = true;

    this.painelDashboard = false;
    this.painelLogin = false;
    this.painelCadastroUsuario = false;
    this.painelMenuQuadros = false;
    this.painelMeuIzi = false;
    this.painelNovoTime = false;
    this.painelQuadroBacklog = false;
    this.painelCadastroTarefa = false;
    this.painelTarefaDetalhe = false;
    this.painelCadastroQuadro = false;
  }

  openLogin() {
    this.painelLogin = true;

    this.painelLanding = false;
    this.painelCadastroUsuario = false;
    this.painelMenuQuadros = false;
    this.painelMeuIzi = false;
    this.painelNovoTime = false;
    this.painelQuadroBacklog = false;
    this.painelCadastroTarefa = false;
    this.painelTarefaDetalhe = false;
    this.painelCadastroQuadro = false;
    this.painelDashboard = false;
  }

  openCadastroUsuario() {
    this.painelCadastroUsuario = true;

    this.painelLanding = false;
    this.painelLogin = false;
    this.painelMenuQuadros = false;
    this.painelMeuIzi = false;
    this.painelNovoTime = false;
    this.painelQuadroBacklog = false;
    this.painelCadastroTarefa = false;
    this.painelTarefaDetalhe = false;
    this.painelCadastroQuadro = false;
    this.painelDashboard = false;
  }

  openDashboard() {
    this.painelDashboard = true;
    this.sidebarItem = 1;

    this.painelMenuQuadros = false;
    this.painelLanding = false;
    this.painelLogin = false;
    this.painelCadastroUsuario = false;
    this.painelMeuIzi = false;
    this.painelNovoTime = false;
    this.painelQuadroBacklog = false;
    this.painelCadastroTarefa = false;
    this.painelTarefaDetalhe = false;
    this.painelCadastroQuadro = false;

    this.showModal = false;
  }

  openMenuQuadros(usuarioLogado: Conta) {
    this.painelMenuQuadros = true;
    this.sidebarItem = 2;

    this.painelLanding = false;
    this.painelLogin = false;
    this.painelCadastroUsuario = false;
    this.painelMeuIzi = false;
    this.painelNovoTime = false;
    this.painelQuadroBacklog = false;
    this.painelCadastroTarefa = false;
    this.painelTarefaDetalhe = false;
    this.painelCadastroQuadro = false;
    this.painelDashboard = false;

    if (usuarioLogado) {
      this.contaLogada = usuarioLogado;
    }
  }

  openMeuIzi() {
    this.painelMeuIzi = true;
    // this.sidebarItem = 2;

    this.painelLanding = false;
    this.painelLogin = false;
    this.painelCadastroUsuario = false;
    this.painelMenuQuadros = false;
    this.painelNovoTime = false;
    this.painelQuadroBacklog = false;
    this.painelCadastroTarefa = false;
    this.painelTarefaDetalhe = false;
    this.painelCadastroQuadro = false;
    this.painelDashboard = false;
  }

  openNovoTime() {
    this.painelNovoTime = true;
    this.sidebarItem = 3;

    this.painelLanding = false;
    this.painelLogin = false;
    this.painelCadastroUsuario = false;
    this.painelMenuQuadros = false;
    this.painelMeuIzi = false;
    this.painelQuadroBacklog = false;
    this.painelCadastroTarefa = false;
    this.painelTarefaDetalhe = false;
    this.painelCadastroQuadro = false;
    this.painelDashboard = false;
  }

  openQuadroBacklog(quadro: Quadro) {
    this.painelQuadroBacklog = true;

    this.painelLanding = false;
    this.painelLogin = false;
    this.painelCadastroUsuario = false;
    this.painelMenuQuadros = false;
    this.painelMeuIzi = false;
    this.painelNovoTime = false;
    this.painelCadastroTarefa = false;
    this.painelTarefaDetalhe = false;
    this.painelCadastroQuadro = false;
    this.painelDashboard = false;

    if (quadro) {
      this.quadroSelecionado = quadro;
    }
  }

  openCadastroTarefa(quadro: Quadro) {
    this.painelCadastroTarefa = true;

    this.painelLanding = false;
    this.painelLogin = false;
    this.painelCadastroUsuario = false;
    this.painelMenuQuadros = false;
    this.painelMeuIzi = false;
    this.painelNovoTime = false;
    this.painelQuadroBacklog = false;
    this.painelTarefaDetalhe = false;
    this.painelCadastroQuadro = false;
    this.painelDashboard = false;

    if (quadro) {
      console.log(quadro);
      this.quadroSelecionado = quadro;
    }
  }

  openTarefaDetalhe(tarefa) {
    this.painelTarefaDetalhe = true;

    this.painelLanding = false;
    this.painelLogin = false;
    this.painelCadastroUsuario = false;
    this.painelMenuQuadros = false;
    this.painelMeuIzi = false;
    this.painelNovoTime = false;
    this.painelQuadroBacklog = false;
    this.painelCadastroTarefa = false;
    this.painelCadastroQuadro = false;
    this.painelDashboard = false;

    if (tarefa) {
      this.tarefaSelecionada = tarefa;
    }
  }

  openCadastroQuadro() {
    this.painelCadastroQuadro = true;

    this.painelLanding = false;
    this.painelLogin = false;
    this.painelCadastroUsuario = false;
    this.painelMenuQuadros = false;
    this.painelMeuIzi = false;
    this.painelNovoTime = false;
    this.painelQuadroBacklog = false;
    this.painelCadastroTarefa = false;
    this.painelTarefaDetalhe = false;
    this.painelDashboard = false;
  }

  openModalInvite() {
    this.showModalInvite = true;
  }

  fecharModalInvite() {
    this.showModalInvite = false;
  }
}
