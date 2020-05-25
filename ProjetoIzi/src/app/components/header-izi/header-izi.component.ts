import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-izi',
  templateUrl: './header-izi.component.html',
  styleUrls: ['./header-izi.component.scss']
})
export class HeaderIziComponent implements OnInit {

  @Input() userName: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
