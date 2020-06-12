import { Component, OnInit } from '@angular/core';
import { Conta } from '../models/conta.model';
import { Quadro } from '../models/quadro.model';
import { Tarefa } from '../models/tarefa.model';

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
  painelMenuQuadros = false;
  painelMeuIzi = false;
  painelNovoTime = false;
  painelQuadroBacklog = false;
  painelCadastroTarefa = false;
  painelTarefaDetalhe = false;

  quadroSelecionado: Quadro = null;
  tarefaSelecionada: Tarefa = null;

  sidebarItem: number;
  showModalInvite = false;

  ngOnInit(): void {
    // this.painelLanding = true;
    this.painelMenuQuadros = true;
  }

  openLanding() {
    this.painelLanding = true;

    this.painelLogin = false;
    this.painelCadastroUsuario = false;
    this.painelMenuQuadros = false;
    this.painelMeuIzi = false;
    this.painelNovoTime = false;
    this.painelQuadroBacklog = false;
    this.painelCadastroTarefa = false;
    this.painelTarefaDetalhe = false;
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
  }

  openMenuQuadros() {
    this.painelMenuQuadros = true;
    this.sidebarItem = 1;

    this.painelLanding = false;
    this.painelLogin = false;
    this.painelCadastroUsuario = false;
    this.painelMeuIzi = false;
    this.painelNovoTime = false;
    this.painelQuadroBacklog = false;
    this.painelCadastroTarefa = false;
    this.painelTarefaDetalhe = false;
  }

  openMeuIzi() {
    this.painelMeuIzi = true;
    this.sidebarItem = 2;

    this.painelLanding = false;
    this.painelLogin = false;
    this.painelCadastroUsuario = false;
    this.painelMenuQuadros = false;
    this.painelNovoTime = false;
    this.painelQuadroBacklog = false;
    this.painelCadastroTarefa = false;
    this.painelTarefaDetalhe = false;
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

    if (quadro) {
      console.log(quadro);
      this.quadroSelecionado = quadro;
    }
  }

  openTarefaDetalhe(tarefa: Tarefa) {
    this.painelTarefaDetalhe = true;

    this.painelLanding = false;
    this.painelLogin = false;
    this.painelCadastroUsuario = false;
    this.painelMenuQuadros = false;
    this.painelMeuIzi = false;
    this.painelNovoTime = false;
    this.painelQuadroBacklog = false;
    this.painelCadastroTarefa = false;

    if (tarefa) {
      this.tarefaSelecionada = tarefa;
    }
  }

  openModalInvite() {
    this.showModalInvite = true;
  }

  fecharModalInvite() {
    this.showModalInvite = false;
  }
}
