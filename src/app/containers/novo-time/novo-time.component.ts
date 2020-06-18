import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SelectPure } from 'select-pure';
import { IziService } from 'src/app/services/izi.service';
import { ModalConfigurationInterface } from 'src/app/components/modal/modal.configuration.interface';
import { ModalType } from 'src/app/components/modal/modal.-type.enum';

@Component({
  selector: 'app-novo-time',
  templateUrl: './novo-time.component.html',
  styleUrls: ['./novo-time.component.scss']
})
export class NovoTimeComponent implements OnInit {

  @Output() openDashboard: EventEmitter<void> = new EventEmitter<void>();
  @Output() openModal: EventEmitter<any> = new EventEmitter<any>();

  constructor(private iziService: IziService) { }

  time: any = null;

  // showModal = false;
  modalConfig: ModalConfigurationInterface = {
    modalType: ModalType.accept,
    text: 'Time criado com sucesso!',
    buttons: [
      {
        text: 'Ok',
        callback: () => { this.openDashboard.emit(); }
      }
    ]
  };

  ngOnInit(): void {
  }

  criarTime() {
    this.time = {
      nomeTime: 'BackEnd',
      projetosTime: '0',
      davi: 'DM',
      dhiego: 'DR',
      guilherme: 'GG',
      yuri: 'YB'
    };

    localStorage.setItem('TIME', JSON.stringify(this.time));

    // localStorage.setItem('projetosTime', '1');

    // localStorage.setItem('Davi', 'DM');

    // localStorage.setItem('Dhiego', 'DR');

    // localStorage.setItem('Guilherme', 'GG');

    // localStorage.setItem('Yuri', 'YB');

    localStorage.setItem('timeDash', '1');

    // this.showModal = true;

    this.openModal.emit(this.modalConfig);
  }

}
