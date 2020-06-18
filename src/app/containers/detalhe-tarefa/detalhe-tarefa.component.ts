import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalConfigurationInterface } from 'src/app/components/modal/modal.configuration.interface';
import { ModalType } from 'src/app/components/modal/modal.-type.enum';
import { Tarefa } from 'src/app/models/tarefa.model';
import { IziService } from 'src/app/services/izi.service';

@Component({
  selector: 'app-detalhe-tarefa',
  templateUrl: './detalhe-tarefa.component.html',
  styleUrls: ['./detalhe-tarefa.component.scss']
})
export class DetalheTarefaComponent implements OnInit {

  constructor(private iziService: IziService) { }

  @Input() tarefaSelecionada: any;
  @Output() voltarQuadroBacklogEvent: EventEmitter<void> = new EventEmitter<void>();

  showModal = false;
  quadro: any;

  modalConfig: ModalConfigurationInterface = {
    modalType: ModalType.warning,
    text: 'Deseja realmente excluir a tarefa?',
    buttons: [
      {
        text: 'Cancelar',
        callback: () => { }
      },
      {
        text: 'Confirmar',
        callback: () => { }
      }
    ]
  };

  ngOnInit(): void {
    this.quadro = JSON.parse(localStorage.getItem('QUADRO'));
    // this.nomeQuadro = this.iziService.getQuadro().find(x => x.idQuadro === this.tarefaSelecionada.idQuadro).nomeQuadro;
  }

  openModal() {
    this.showModal = true;
  }

  voltarQuadroBacklog() {
    this.voltarQuadroBacklogEvent.emit();
  }

  moveToDo(tarefa) {
    console.log(tarefa);
    if (tarefa.titulo === 'TAREFA1') {
      tarefa.status = 'TODO';
      localStorage.setItem('TAREFA1', tarefa);

    } else if (tarefa.titulo === 'TAREFA2') {
      tarefa.status = 'TODO';
      localStorage.setItem('TAREFA2', tarefa);
    } else {
      tarefa.status = 'TODO';
      localStorage.setItem('TAREFA3', tarefa);
    }
  }

  moveProgress(tarefa) {
    if (tarefa.titulo === 'TAREFA1') {
      tarefa.status = 'PROGRESS';
      localStorage.setItem('TAREFA1', tarefa);

    } else if (tarefa.titulo === 'TAREFA2') {
      tarefa.status = 'PROGRESS';
      localStorage.setItem('TAREFA2', tarefa);
    } else {
      tarefa.status = 'PROGRESS';
      localStorage.setItem('TAREFA3', tarefa);
    }
  }

  moveDone(tarefa) {
    if (tarefa.titulo === 'TAREFA1') {
      tarefa.status = 'DONE';
      localStorage.setItem('TAREFA1', tarefa);

    } else if (tarefa.titulo === 'TAREFA2') {
      tarefa.status = 'DONE';
      localStorage.setItem('TAREFA2', tarefa);
    } else {
      tarefa.status = 'DONE';
      localStorage.setItem('TAREFA3', tarefa);
    }
  }
}
