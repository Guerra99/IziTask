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
  quadrosFavoritos = [];

  constructor() { }

  ngOnInit(): void {
  }

  addFavorito(quadro) {
    if (this.quadrosFavoritos.find(x => x === quadro)) {
      const index = this.quadrosFavoritos.indexOf(quadro);
      this.quadrosFavoritos.splice(index, 1);
    } else {
      this.quadrosFavoritos.unshift(quadro);
    }
  }

}
