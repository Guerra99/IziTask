import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-invite',
  templateUrl: './modal-invite.component.html',
  styleUrls: ['./modal-invite.component.scss']
})
export class ModalInviteComponent implements OnInit {

  constructor() { }

  @Input() public show = false;
  @Output() fecharModalInviteEvent: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {
  }

  fecharModal() {
    this.fecharModalInviteEvent.emit();
  }

}
