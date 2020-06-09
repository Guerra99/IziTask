import { Component, OnInit, Input } from '@angular/core';
import { Conta } from 'src/app/models/conta.model';
import { Equipe } from 'src/app/models/equipe.model';

@Component({
  selector: 'app-card-time',
  templateUrl: './card-time.component.html',
  styleUrls: ['./card-time.component.scss']
})
export class CardTimeComponent implements OnInit {

  constructor() { }

  @Input() times: Equipe[];

  teams: Equipe[] = [
    {
      nome: 'Back-end',
      membros:
        [
          { nome: 'Guilherme', sobrenome: 'Guerra', id: '1', senha: '1234', email: 'guilherme@hotmail.com', logado: true },
          { nome: 'Dhiego', sobrenome: 'Rodrigues', id: '2', senha: '1234', email: 'guilherme@hotmail.com', logado: true },
          { nome: 'Yuri', sobrenome: 'Barsotti', id: '3', senha: '1234', email: 'guilherme@hotmail.com', logado: true }
        ]
    },
    {
      nome: 'Front-end',
      membros:
        [
          { nome: 'Guilherme', sobrenome: 'Guerra', id: '1', senha: '1234', email: 'guilherme@hotmail.com', logado: true },
          { nome: 'Dhiego', sobrenome: 'Rodrigues', id: '2', senha: '1234', email: 'guilherme@hotmail.com', logado: true },
          { nome: 'Yuri', sobrenome: 'Barsotti', id: '3', senha: '1234', email: 'guilherme@hotmail.com', logado: true }
        ]
    }
  ];

  membrosTime = [];

  ngOnInit(): void {
    this.teams.forEach(x => {
      x.membros.forEach(i => {
        this.membrosTime.push(i.nome);
      });
    });
  }

}
