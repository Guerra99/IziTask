import { Component, OnInit, Input } from '@angular/core';
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
      { nome: 'Quadros', icon: 'list', value: 1, activated: false },
      { nome: 'Meu IZI', icon: 'person', value: 2, activated: false },
      { nome: 'Novo time', icon: 'group', value: 3, activated: false },
      { nome: 'Convidar amigo', icon: 'mail', value: 4, activated: false }
    ];

  @Input() item: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.listItemsSidebar.find(x => x.value === this.item).activated = true;
  }

  onClickSidebar(value: number) {
    this.listItemsSidebar.forEach(x => {
      x.activated = false;
    });

    this.listItemsSidebar.find(x => x.value === value).activated = true;

    switch (value) {
      case 1:
        this.router.navigate(['/menu-quadros']);
        break;
      case 2:
        this.router.navigate(['/meu-izi']);
        break;
      case 3:
        this.router.navigate(['/novo-time']);
        break;
      case 4:
        break;
    }
  }
}
