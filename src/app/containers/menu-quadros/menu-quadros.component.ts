import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Quadro } from 'src/app/models/quadro.model';
import { Conta } from 'src/app/models/conta.model';

@Component({
  selector: 'app-menu-quadros',
  templateUrl: './menu-quadros.component.html',
  styleUrls: ['./menu-quadros.component.scss']
})
export class MenuQuadrosComponent implements OnInit {

  constructor() { }

  @Input() usuario: Conta;
  @Output() openQuadroBacklogEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() openCriarQuadroEvent: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {

  }

  openBacklog() {
    this.openQuadroBacklogEvent.emit();
  }

  addQuadro() {
    this.openCriarQuadroEvent.emit();
  }
}
