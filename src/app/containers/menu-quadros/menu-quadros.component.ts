import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quadro } from 'src/app/models/quadro.model';

@Component({
  selector: 'app-menu-quadros',
  templateUrl: './menu-quadros.component.html',
  styleUrls: ['./menu-quadros.component.scss']
})
export class MenuQuadrosComponent implements OnInit {

  constructor() { }

  @Output() openQuadroBacklogEvent: EventEmitter<Quadro> = new EventEmitter<Quadro>();

  // list = [{ titulo: 'A', status: 'A', responsavel: 'A' },
  // { titulo: 'B', status: 'B', responsavel: 'B' },
  // { titulo: 'C', status: 'C', responsavel: 'C' },
  // { titulo: 'D', status: 'D', responsavel: 'D' }];

  // key = 'LIST';

  ngOnInit(): void {
    // localStorage.setItem(this.key, JSON.stringify(this.list));
    // let name = localStorage.getItem('LIST');
    // alert(name);
  }

  openBacklog(quadro: Quadro) {
    this.openQuadroBacklogEvent.emit(quadro);
  }
}
