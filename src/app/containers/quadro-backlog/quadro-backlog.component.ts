import { Component, OnInit, Input } from '@angular/core';
import { Tarefa } from 'src/app/models/tarefa.model';

@Component({
  selector: 'app-quadro-backlog',
  templateUrl: './quadro-backlog.component.html',
  styleUrls: ['./quadro-backlog.component.scss']
})
export class QuadroBacklogComponent implements OnInit {

  constructor() { }

  @Input() nomeQuadro: string;

  tarefas: Tarefa[] =
    [
      { idTarefa: '1', titulo: 'Criar tela inicial app', descricao: 'Tarefa de Mobile', responsavel: 'Dhiego', status: 'TODO' },
      { idTarefa: '2', titulo: 'Criar loading', descricao: 'Tarefa de Mobile', responsavel: 'Dhiego', status: 'TODO' },
      { idTarefa: '3', titulo: 'Criar endpoints', descricao: 'Tarefa de Back-end', responsavel: 'Yuri', status: 'TODO' },
      { idTarefa: '4', titulo: 'Layout da web', descricao: 'Tarefa de Front-end', responsavel: 'Guerra', status: 'PROGRESS' },
      { idTarefa: '5', titulo: 'Componentizar a web', descricao: 'Tarefa de Front-end', responsavel: 'Guerra', status: 'PROGRESS' },
      { idTarefa: '6', titulo: 'Fazer conexão com os endpoints', descricao: 'Tarefa de Front-end', responsavel: 'Guerra', status: 'PROGRESS' },
      { idTarefa: '7', titulo: 'Preparar querys', descricao: 'Tarefa de Banco de dados', responsavel: 'Guerra', status: 'DONE' },
      { idTarefa: '8', titulo: 'Dashboard', descricao: 'Tarefa de Banco de dados', responsavel: 'Yuri', status: 'DONE' },
      { idTarefa: '9', titulo: 'Bugs do app', descricao: 'Tarefa de Banco de dados', responsavel: 'Dhiego', status: 'DONE' }
    ];

  listaToDo: Tarefa[] = [];
  listaProgress: Tarefa[] = [];
  listaDone: Tarefa[] = [];

  ngOnInit(): void {
    this.tarefas.filter(x => this.classificarQuadros(x));
  }

  classificarQuadros(tarefa: Tarefa) {
    if (tarefa.status === 'TODO') {
      this.listaToDo.unshift(tarefa);
    } else if (tarefa.status === 'PROGRESS') {
      this.listaProgress.unshift(tarefa);
    } else {
      this.listaDone.unshift(tarefa);
    }
  }
}
