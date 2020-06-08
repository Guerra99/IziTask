import { Component, OnInit } from '@angular/core';
import { Quadro } from 'src/app/models/quadro.model';

@Component({
  selector: 'app-quadro-dashboard',
  templateUrl: './quadro-backlog.component.html',
  styleUrls: ['./quadro-backlog.component.scss']
})
export class QuadroBacklogComponent implements OnInit {

  constructor() { }

  quadros: Quadro[] =
    [
      { nomeQuadro: 'Criar tela inicial app', descricao: 'Tarefa de Mobile', status: 'TODO', tipo: 'Mobile', favorito: false },
      { nomeQuadro: 'Criar loading', descricao: 'Tarefa de Mobile', status: 'TODO', tipo: 'Mobile', favorito: false },
      { nomeQuadro: 'Criar endpoints', descricao: 'Tarefa de Back-end', status: 'TODO', tipo: 'Back-end', favorito: false },
      { nomeQuadro: 'Layout da web', descricao: 'Tarefa de Front-end', status: 'PROGRESS', tipo: 'Front-end', favorito: false },
      { nomeQuadro: 'Componentizar a web', descricao: 'Tarefa de Front-end', status: 'PROGRESS', tipo: 'Front-end', favorito: false },
      { nomeQuadro: 'Fazer conexão com os endpoints', descricao: 'Tarefa de Front-end', status: 'PROGRESS', tipo: 'Front-end', favorito: false },
      { nomeQuadro: 'Preparar querys', descricao: 'Tarefa de Banco de dados', status: 'DONE', tipo: 'Banco de dados', favorito: false },
      { nomeQuadro: 'Dashboard', descricao: 'Tarefa de BI', status: 'DONE', tipo: 'BI', favorito: false },
      { nomeQuadro: 'Bugs do app', descricao: 'Tarefa de Suporte', status: 'DONE', tipo: 'Suporte', favorito: false },
    ];

  listaToDo: Quadro[] = [];
  listaProgress: Quadro[] = [];
  listaDone: Quadro[] = [];

  ngOnInit(): void {
    this.quadros.filter(x => this.classificarQuadros(x));
  }

  classificarQuadros(quadro: Quadro) {
    if (quadro.status === 'TODO') {
      this.listaToDo.unshift(quadro);
    } else if (quadro.status === 'PROGRESS') {
      this.listaProgress.unshift(quadro);
    } else {
      this.listaDone.unshift(quadro);
    }
  }
}
