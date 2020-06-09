import { Component, Input } from '@angular/core';
import { ModalConfigurationInterface } from './modal.configuration.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() public show = false;
  @Input() public modalConfiguration: ModalConfigurationInterface;
}
