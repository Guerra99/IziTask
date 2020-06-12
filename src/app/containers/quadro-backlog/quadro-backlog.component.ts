import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tarefa } from 'src/app/models/tarefa.model';
import { Quadro } from 'src/app/models/quadro.model';
import { IziService } from 'src/app/services/izi.service';

@Component({
  selector: 'app-quadro-backlog',
  templateUrl: './quadro-backlog.component.html',
  styleUrls: ['./quadro-backlog.component.scss']
})
export class QuadroBacklogComponent implements OnInit {

  constructor(private iziService: IziService) { }

  @Input() quadroSelecionado: Quadro;
  @Output() openTarefaDetalheEvent: EventEmitter<Tarefa> = new EventEmitter<Tarefa>();
  @Output() openCadastroTarefaEvent: EventEmitter<Quadro> = new EventEmitter<Quadro>();

  listaToDo: Tarefa[] = [];
  listaProgress: Tarefa[] = [];
  listaDone: Tarefa[] = [];
  tarefas: Tarefa[] = [];

  ngOnInit(): void {
    this.tarefas = this.iziService.getTarefas(this.quadroSelecionado.idQuadro);
    this.tarefas.filter(x => this.classificarQuadros(x));
  }

  classificarQuadros(tarefa: Tarefa) {
    if (tarefa.idQuadro === this.quadroSelecionado.idQuadro) {
      if (tarefa.status === 'TODO') {
        this.listaToDo.unshift(tarefa);
      } else if (tarefa.status === 'PROGRESS') {
        this.listaProgress.unshift(tarefa);
      } else {
        this.listaDone.unshift(tarefa);
      }
    }
  }

  openTarefaDetalhe(tarefaSelecionada: Tarefa) {
    this.openTarefaDetalheEvent.emit(tarefaSelecionada);
  }

  openCadastroTarefa() {
    this.openCadastroTarefaEvent.emit(this.quadroSelecionado);
  }
}
