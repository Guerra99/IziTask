import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebarActivated = false;

  listItemsSidebar =
    [
      { nome: 'Quadros', icon: 'list', value: 1, activated: false },
      { nome: 'Meu IZI', icon: 'person', value: 2, activated: false },
      { nome: 'Novo time', icon: 'group', value: 3, activated: false },
      { nome: 'Convidar amigo', icon: 'mail', value: 4, activated: false }
    ];

  constructor() { }

  ngOnInit(): void {
  }

  onClickSidebar(value: number) {
    this.listItemsSidebar.forEach(x => {
      x.activated = false;
    });

    this.listItemsSidebar.find(x => x.value === value).activated = true;
  }

}
