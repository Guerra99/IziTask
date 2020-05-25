import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quadros',
  templateUrl: './quadros.component.html',
  styleUrls: ['./quadros.component.scss']
})
export class QuadrosComponent implements OnInit {

  // @Input() titulo: string;
  // @Input() qtdQuadros: number;

  @Input() nomeSecaoQuadro: string;

  quadros = ['Mobile', 'Banco de Dados', 'Front', 'Back', 'Documentações', 'Bugs'];

  constructor() { }

  ngOnInit(): void {
  }

}
