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

  @Input() equipe: any;

  nomeTime = '';
  projetosTime = '';
  dm = '';
  dr = '';
  gg = '';
  yb = '';

  time: any;

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
    this.time = JSON.parse(localStorage.getItem('TIME'));
    console.log(this.time);
    // this.nomeTime = localStorage.getItem('nomeTime');
    // this.projetosTime = localStorage.getItem('projetosTime');
    // this.dm = localStorage.getItem('Davi');
    // this.dr = localStorage.getItem('Dhiego');
    // this.gg = localStorage.getItem('Guilherme');
    // this.yb = localStorage.getItem('Yuri');
  }

}
