import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quadro } from 'src/app/models/quadro.model';
import { IziService } from 'src/app/services/izi.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Tarefa } from 'src/app/models/tarefa.model';

@Component({
  selector: 'app-cadastro-tarefa',
  templateUrl: './cadastro-tarefa.component.html',
  styleUrls: ['./cadastro-tarefa.component.scss']
})
export class CadastroTarefaComponent implements OnInit {

  tarefaForm: FormGroup;
  quadro: any;

  constructor(private iziService: IziService, private fb: FormBuilder) {
    this.tarefaForm = this.fb.group({
      titulo: [''],
      descricao: [''],
      responsavel: ['']
    });
  }

  @Input() quadroSelecionado: Quadro;
  @Output() voltarBacklogEvent: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {
    this.quadro = JSON.parse(localStorage.getItem('QUADRO'));
  }

  cadastrarTarefa(tarefa) {
    if (tarefa.titulo === 'Tarefa 1') {
      const task = {
        descricao: 'Tarefa 1 de backend',
        responsavel: 'Guilherme',
        status: 'TODO',
        titulo: 'Tarefa 1'
      };

      localStorage.setItem('TAREFA1', JSON.stringify(task));

    } else if (tarefa.titulo === 'Tarefa 2') {
      const task = {
        descricao: 'Tarefa 2 de backend',
        responsavel: 'Dhiego',
        status: 'TODO',
        titulo: 'Tarefa 2'
      };

      localStorage.setItem('TAREFA2', JSON.stringify(task));

    } else {
      const task = {
        descricao: 'Tarefa 3 de backend',
        responsavel: 'Yuri',
        status: 'TODO',
        titulo: 'Tarefa 3'
      };

      localStorage.setItem('TAREFA3', JSON.stringify(task));
    }
    this.voltarBacklogEvent.emit();
  }

}
