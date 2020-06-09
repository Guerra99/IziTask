import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-invite',
  templateUrl: './modal-invite.component.html',
  styleUrls: ['./modal-invite.component.scss']
})
export class ModalInviteComponent implements OnInit {

  constructor() { }

  @Input() public show = false;

  ngOnInit(): void {
  }

}
