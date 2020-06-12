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

  @Input() tarefaSelecionada: Tarefa;
  @Output() voltarQuadroBacklogEvent: EventEmitter<void> = new EventEmitter<void>();

  showModal = false;
  nomeQuadro = '';

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
    this.nomeQuadro = this.iziService.getQuadros().find(x => x.idQuadro === this.tarefaSelecionada.idQuadro).nomeQuadro;
  }

  openModal() {
    this.showModal = true;
  }

  voltarQuadroBacklog() {
    this.voltarQuadroBacklogEvent.emit();
  }
}
