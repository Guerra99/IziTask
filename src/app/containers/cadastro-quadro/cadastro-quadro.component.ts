import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IziService } from 'src/app/services/izi.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Quadro } from 'src/app/models/quadro.model';
import { Conta } from 'src/app/models/conta.model';
import { Equipe } from 'src/app/models/equipe.model';

@Component({
  selector: 'app-cadastro-quadro',
  templateUrl: './cadastro-quadro.component.html',
  styleUrls: ['./cadastro-quadro.component.scss']
})
export class CadastroQuadroComponent implements OnInit {

  quadroForm: FormGroup;
  quadro: Quadro;
  novoQuadro: any;

  @Input() usuarioLogado: Conta;

  constructor(private iziService: IziService, private fb: FormBuilder) {
    this.quadroForm = this.fb.group({
      titulo: [''],
    });
  }

  @Output() fecharCadastroQuadroEvent: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {
    console.log(this.usuarioLogado);
  }

  cadastrarQuadro() {
    // const time: Equipe = {
    //   nome: 'Back-end',
    //   membros: [this.usuarioLogado]
    // };

    // this.quadro = {
    //   idQuadro: '1',
    //   nomeQuadro: 'Projeto Izi',
    //   equipe: time,
    //   favorito: false,
    //   idsTarefas: [],
    //   tarefasDone: 0,
    //   tarefasProgress: 0,
    //   tarefasToDo: 0
    // };

    // this.iziService.criarQuadro('QUADRO', this.quadro);

    this.novoQuadro = {
      nomeQuadro: 'Projeto 1',
      time: 'BackEnd',
      horasEstimadas: '730h',
      todo: 0,
      progress: 0,
      done: 0,
      favorito: false
    };

    localStorage.setItem('QUADRO', JSON.stringify(this.novoQuadro));
    localStorage.setItem('PROJ_ATIVO', '1');
    this.fecharModal();

  }

  fecharModal() {
    this.fecharCadastroQuadroEvent.emit();
  }
}
