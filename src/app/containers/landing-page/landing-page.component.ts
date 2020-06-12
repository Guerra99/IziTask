import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
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
  @Output() openLogin: EventEmitter<void> = new EventEmitter<void>();
  @Output() openCadastroUsuario: EventEmitter<void> = new EventEmitter<void>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  someMethod() {
    this.trigger.openMenu();
  }

  redirectLogin() {
    this.openLogin.emit();
  }

  redirectCadastroUsuario() {
    this.openCadastroUsuario.emit();
  }
}
