import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  showLogin = false;

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  someMethod() {
    this.trigger.openMenu();
  }

  redirectLogin() {
    this.router.navigate(['/login']);
  }

  redirectCadastroUsuario() {
    this.router.navigate(['/cadastro-usuario']);
  }
}
