import { Component, OnInit, Input } from '@angular/core';
import { Quadro } from 'src/app/models/quadro.model';

@Component({
  selector: 'app-cadastro-tarefa',
  templateUrl: './cadastro-tarefa.component.html',
  styleUrls: ['./cadastro-tarefa.component.scss']
})
export class CadastroTarefaComponent implements OnInit {

  constructor() { }

  @Input() quadroSelecionado: Quadro;
  ngOnInit(): void {
  }

}
