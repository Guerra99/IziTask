import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebarActivated = false;

  listItemsSidebar =
    [
      { nome: 'Dashboard', icon: 'timeline', value: 1, activated: false },
      { nome: 'Quadros', icon: 'list', value: 2, activated: false },
      { nome: 'Meu IZI', icon: 'person', value: 3, activated: false },
      { nome: 'Novo time', icon: 'group_add', value: 4, activated: false },
      { nome: 'Convidar amigo', icon: 'mail', value: 5, activated: false }
    ];

  @Input() itemSidebar: number;
  @Output() modalEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() openDashboardEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() openMenuQuadrosEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() openMeuIziEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() openNovoTimeEvent: EventEmitter<void> = new EventEmitter<void>();


  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.itemSidebar) {
      this.listItemsSidebar.find(x => x.value === this.itemSidebar).activated = true;
    } else {
      this.listItemsSidebar[0].activated = true;
    }
  }

  onClickSidebar(value: number) {
    if (value !== 5) {
      this.listItemsSidebar.forEach(x => {
        x.activated = false;
      });
    }

    this.listItemsSidebar.find(x => x.value === value).activated = true;
    this.listItemsSidebar[4].activated = false;

    switch (value) {
      case 1:
        this.openDashboardEvent.emit();
        break;
      case 2:
        this.openMenuQuadrosEvent.emit();
        break;
      case 3:
        this.openMeuIziEvent.emit();
        break;
      case 4:
        this.openNovoTimeEvent.emit();
        break;
      case 5:
        this.modalEvent.emit();
        break;
    }
  }
}
