import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-izi-container',
  templateUrl: './izi-container.component.html',
  styleUrls: ['./izi-container.component.scss']
})
export class IziContainerComponent implements OnInit {

  constructor() { }

  painelMenuQuadros = false;
  painelMeuIzi = false;
  painelNovoTime = false;
  painelQuadroBacklog = false;
  painelCadastroTarefa = false;
  painelTarefaDetalhe = false;

  ngOnInit(): void {
  }

}
