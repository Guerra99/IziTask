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
  @Output() openTarefaDetalheEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() openCadastroTarefaEvent: EventEmitter<Quadro> = new EventEmitter<Quadro>();
  @Output() voltarMenuQuadrosEvent: EventEmitter<void> = new EventEmitter<void>();

  listaToDo: Tarefa[] = [];
  listaProgress: Tarefa[] = [];
  listaDone: Tarefa[] = [];
  tarefas: Tarefa[] = [];

  quadro: any;
  tarefa1: any = null;
  tarefa2: any = null;
  tarefa3: any = null;
  tarefasQuadro = [];

  ngOnInit(): void {
    this.quadro = JSON.parse(localStorage.getItem('QUADRO'));

    this.tarefa1 = JSON.parse(localStorage.getItem('TAREFA1'));
    this.tarefa2 = JSON.parse(localStorage.getItem('TAREFA2'));
    this.tarefa3 = JSON.parse(localStorage.getItem('TAREFA3'));

    if (this.tarefa1) {
      this.tarefasQuadro.push(this.tarefa1);
    }

    if (this.tarefa2) {
      this.tarefasQuadro.push(this.tarefa2);
    }

    if (this.tarefa3) {
      this.tarefasQuadro.push(this.tarefa3);
    }

    this.tarefasQuadro.filter(x => this.classificarQuadros(x));
    // if (JSON.parse(this.iziService.getTarefas('TAREFAS'))) {
    //   this.tarefas.push(JSON.parse(this.iziService.getTarefas('TAREFAS')));
    //   console.log(this.tarefas);
    //   this.tarefas.forEach(item => { this.classificarQuadros(item); });
    // } else {
    //   this.tarefas = [];
    // }
    // this.tarefas = this.iziService.getTarefa(this.quadroSelecionado.idQuadro);
    // this.tarefas.filter(x => this.classificarQuadros(x));
  }

  classificarQuadros(tarefa) {
      if (tarefa.status === 'TODO') {
        this.listaToDo.unshift(tarefa);
      } else if (tarefa.status === 'PROGRESS') {
        this.listaProgress.unshift(tarefa);
      } else {
        this.listaDone.unshift(tarefa);
      }
    // if (tarefa.idQuadro === this.quadroSelecionado.idQuadro) {
    //   if (tarefa.status === 'TODO') {
    //     this.listaToDo.unshift(tarefa);
    //   } else if (tarefa.status === 'PROGRESS') {
    //     this.listaProgress.unshift(tarefa);
    //   } else {
    //     this.listaDone.unshift(tarefa);
    //   }
    // }
  }

  openTarefaDetalhe(tarefaSelecionada) {
    this.openTarefaDetalheEvent.emit(tarefaSelecionada);
  }

  openCadastroTarefa() {
    this.openCadastroTarefaEvent.emit(this.quadroSelecionado);
  }

  voltarMenuQuadros() {
    this.voltarMenuQuadrosEvent.emit();
  }
}
