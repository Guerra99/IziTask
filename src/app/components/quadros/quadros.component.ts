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
