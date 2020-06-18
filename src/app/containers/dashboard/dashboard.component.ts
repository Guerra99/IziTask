import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  panelOpenState = false;

  timeDashboard = '';
  projetoAtivo = '';
  quadro: any;

  ngOnInit(): void {
    this.timeDashboard = localStorage.getItem('timeDash');
    this.projetoAtivo = localStorage.getItem('PROJ_ATIVO');
    this.quadro = JSON.parse(localStorage.getItem('QUADRO'));
  }

}
