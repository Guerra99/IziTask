import { Component, OnInit, Input } from '@angular/core';
import { Conta } from 'src/app/models/conta.model';
import { Time } from 'src/app/models/time.model';

@Component({
  selector: 'app-card-time',
  templateUrl: './card-time.component.html',
  styleUrls: ['./card-time.component.scss']
})
export class CardTimeComponent implements OnInit {

  constructor() { }

  @Input() times: Time[];

  teams: Time[] = [
    {
      nome: 'Back-end', quadrosTime: [],
      membros:
        [
          { nome: 'Guilherme', id: '1', senha: '1234', email: 'guilherme@hotmail.com', quadros: [], logado: true },
          { nome: 'Dhiego', id: '2', senha: '1234', email: 'guilherme@hotmail.com', quadros: [], logado: true },
          { nome: 'Yuri', id: '3', senha: '1234', email: 'guilherme@hotmail.com', quadros: [], logado: true }
        ]
    },
    {
      nome: 'Front-end', quadrosTime: [],
      membros:
        [
          { nome: 'Guilherme', id: '1', senha: '1234', email: 'guilherme@hotmail.com', quadros: [], logado: true },
          { nome: 'Dhiego', id: '2', senha: '1234', email: 'guilherme@hotmail.com', quadros: [], logado: true },
          { nome: 'Yuri', id: '3', senha: '1234', email: 'guilherme@hotmail.com', quadros: [], logado: true }
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
