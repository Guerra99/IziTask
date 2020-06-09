import { Component, OnInit, Input } from '@angular/core';
import { Quadro } from 'src/app/models/quadro.model';

@Component({
  selector: 'app-quadros',
  templateUrl: './quadros.component.html',
  styleUrls: ['./quadros.component.scss']
})
export class QuadrosComponent implements OnInit {

  // @Input() quadros: [] = [];
  quadros: Quadro[] =
    [
      {
        idQuadro: '1', nomeQuadro: 'Projeto Izi',
        idsTarefas: ['1', '2', '3', '4', '5'],
        favorito: false,
        equipe: {
          nome: 'Dev',
          membros: [{ id: '1', nome: 'Guilherme', sobrenome: 'Guerra', email: 'guilherme@hotmail.com', senha: '123456', logado: true }]
        }
      },
      // { idQuadro: '2', nomeQuadro: 'Criar endpoints', idsTarefas: [], favorito: false, equipe: { nome: '', membros: [] } },
      // { idQuadro: '3', nomeQuadro: 'Layout da web', idsTarefas: [], favorito: false, equipe: { nome: '', membros: [] } },
      // { idQuadro: '4', nomeQuadro: 'Componentizar a web', idsTarefas: [], favorito: false, equipe: { nome: '', membros: [] } },
      // { idQuadro: '5', nomeQuadro: 'Fazer conexão com os endpoints', idsTarefas: [], favorito: false, equipe: { nome: '', membros: [] } },
      // { idQuadro: '6', nomeQuadro: 'Preparar querys', idsTarefas: [], favorito: false, equipe: { nome: '', membros: [] } },
      // { idQuadro: '7', nomeQuadro: 'Dashboard', idsTarefas: [], favorito: false, equipe: { nome: '', membros: [] } },
      // { idQuadro: '8', nomeQuadro: 'Preparar querys', idsTarefas: [], favorito: false, equipe: { nome: '', membros: [] } },
      // { idQuadro: '9', nomeQuadro: 'Bugs do app', idsTarefas: [], favorito: false, equipe: { nome: '', membros: [] } }
    ];

  quadrosFavoritos: Quadro[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addFavorito(quadro: Quadro) {
    if (this.quadrosFavoritos.find(x => x.nomeQuadro === quadro.nomeQuadro)) {
      const index = this.quadrosFavoritos.indexOf(quadro);
      const indexQuadros = this.quadros.indexOf(quadro);
      this.quadros[indexQuadros].favorito = false;
      this.quadrosFavoritos.splice(index, 1);
    } else {
      quadro.favorito = true;
      this.quadrosFavoritos.unshift(quadro);
    }
  }
}
