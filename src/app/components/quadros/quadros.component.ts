import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quadro } from 'src/app/models/quadro.model';
import { IziService } from 'src/app/services/izi.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-quadros',
  templateUrl: './quadros.component.html',
  styleUrls: ['./quadros.component.scss']
})
export class QuadrosComponent implements OnInit {

  // @Input() quadros: [] = [];
  @Output() quadroSelecionadoEvent: EventEmitter<Quadro> = new EventEmitter<Quadro>();

  quadros: Quadro[] =
    [
      {
        idQuadro: '1', nomeQuadro: 'Projeto Izi',
        idsTarefas: ['1', '2', '3', '4', '5'],
        favorito: false,
        equipe: {
          nome: 'Dev',
          membros: [{ id: '1', nome: 'Guilherme', sobrenome: 'Guerra', email: 'guilherme@hotmail.com', senha: '123456', logado: true }]
        }, tarefasToDo: 0, tarefasProgress: 0, tarefasDone: 0
      },
      {
        idQuadro: '2', nomeQuadro: 'Projeto mobile',
        idsTarefas: ['6', '7', '8', '9'],
        favorito: false,
        equipe: {
          nome: 'Dev',
          membros: [{ id: '1', nome: 'Guilherme', sobrenome: 'Guerra', email: 'guilherme@hotmail.com', senha: '123456', logado: true }]
        }, tarefasToDo: 0, tarefasProgress: 0, tarefasDone: 0
      }
      // { idQuadro: '2', nomeQuadro: 'Criar endpoints', idsTarefas: [], favorito: false, equipe: { nome: '', membros: [] } },
      // { idQuadro: '3', nomeQuadro: 'Layout da web', idsTarefas: [], favorito: false, equipe: { nome: '', membros: [] } },
      // { idQuadro: '4', nomeQuadro: 'Componentizar a web', idsTarefas: [], favorito: false, equipe: { nome: '', membros: [] } },
      // { idQuadro: '5', nomeQuadro: 'Fazer conexão com os endpoints', idsTarefas: [], favorito: false, equipe: { nome: '', membros: [] } },
      // { idQuadro: '6', nomeQuadro: 'Preparar querys', idsTarefas: [], favorito: false, equipe: { nome: '', membros: [] } },
      // { idQuadro: '7', nomeQuadro: 'Dashboard', idsTarefas: [], favorito: false, equipe: { nome: '', membros: [] } },
      // { idQuadro: '8', nomeQuadro: 'Preparar querys', idsTarefas: [], favorito: false, equipe: { nome: '', membros: [] } },
      // { idQuadro: '9', nomeQuadro: 'Bugs do app', idsTarefas: [], favorito: false, equipe: { nome: '', membros: [] } }
    ];

  tarefasToDo = 0;
  tarefasProgress = 0;
  tarefasDone = 0;

  quadrosFavoritos: Quadro[] = [];

  constructor(private iziService: IziService) { }

  ngOnInit(): void {
    this.classificarTarefas();
  }

  addFavorito(quadro: Quadro) {
    if (this.quadrosFavoritos.find(x => x.nomeQuadro === quadro.nomeQuadro)) {
      const index = this.quadrosFavoritos.indexOf(quadro);
      const indexQuadros = this.quadros.indexOf(quadro);
      this.quadros[indexQuadros].favorito = false;
      this.quadrosFavoritos.splice(index, 1);
    } else {
      quadro.favorito = true;
      this.quadrosFavoritos.push(quadro);
    }
  }

  onClickQuadro(quadro: Quadro) {
    this.quadroSelecionadoEvent.emit(quadro);
  }

  classificarTarefas() {
    this.quadros.forEach(item => {
      const tarefasQuadro = this.iziService.getTarefas(item.idQuadro);
      tarefasQuadro.forEach(task => {
        if (task.status === 'TODO') {
          item.tarefasToDo++;
        } else if (task.status === 'PROGRESS') {
          item.tarefasProgress++;
        } else {
          item.tarefasDone++;
        }
      });
    });
  }
}
