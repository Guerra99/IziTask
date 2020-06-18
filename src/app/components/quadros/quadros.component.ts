import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quadro } from 'src/app/models/quadro.model';
import { IziService } from 'src/app/services/izi.service';
import { ThrowStmt } from '@angular/compiler';
import { Tarefa } from 'src/app/models/tarefa.model';

@Component({
  selector: 'app-quadros',
  templateUrl: './quadros.component.html',
  styleUrls: ['./quadros.component.scss']
})
export class QuadrosComponent implements OnInit {

  // @Input() quadros: [] = [];
  @Output() quadroSelecionadoEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() openCadastroQuadroEvent: EventEmitter<void> = new EventEmitter<void>();

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
    ];

  tarefasToDo = 0;
  tarefasProgress = 0;
  tarefasDone = 0;

  quadrosFavoritos = [];

  meusQuadros: Quadro[] = [];

  projeto: any;
  quadroFav = false;

  constructor(private iziService: IziService) { }

  ngOnInit(): void {
    this.projeto = JSON.parse(localStorage.getItem('QUADRO'));
    // this.classificarTarefas();
    // if (JSON.parse(this.iziService.getQuadros('QUADRO'))) {
    //   this.meusQuadros.push(JSON.parse(this.iziService.getQuadros('QUADRO')));
    // } else {
    //   this.meusQuadros = [];
    // }
  }

  addFavorito(quadro) {
    if (this.quadrosFavoritos.find(x => x.nomeQuadro === quadro.nomeQuadro)) {
      // const index = this.quadrosFavoritos.indexOf(quadro);
      // const indexQuadros = this.quadros.indexOf(quadro);
      // this.quadros[indexQuadros].favorito = false;
      // this.quadrosFavoritos.splice(index, 1);
      this.projeto.favorito = false;
      this.quadrosFavoritos.pop();
      this.quadroFav = false;

    } else {
      this.projeto.favorito = true;
      this.quadrosFavoritos.push(quadro);
      this.quadroFav = true;
    }
  }

  onClickQuadro() {
    this.quadroSelecionadoEvent.emit();
  }

  classificarTarefas() {
    this.quadros.forEach(item => {
      let tarefasQuadro: Tarefa[] = this.iziService.getTarefa(item.idQuadro);
      if (tarefasQuadro) {
        tarefasQuadro.forEach(task => {
          if (task.status === 'TODO') {
            item.tarefasToDo++;
          } else if (task.status === 'PROGRESS') {
            item.tarefasProgress++;
          } else {
            item.tarefasDone++;
          }
        });
      } else {
        tarefasQuadro = [];
      }
    });
  }

  openCadastroQuadro() {
    this.openCadastroQuadroEvent.emit();
  }
}
