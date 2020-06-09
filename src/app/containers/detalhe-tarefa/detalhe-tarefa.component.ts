import { Component, OnInit } from '@angular/core';
import { ModalConfigurationInterface } from 'src/app/components/modal/modal.configuration.interface';
import { ModalType } from 'src/app/components/modal/modal.-type.enum';

@Component({
  selector: 'app-detalhe-tarefa',
  templateUrl: './detalhe-tarefa.component.html',
  styleUrls: ['./detalhe-tarefa.component.scss']
})
export class DetalheTarefaComponent implements OnInit {

  constructor() { }

  showModal = false;

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
  }

  openModal() {
    this.showModal = true;
  }
}
