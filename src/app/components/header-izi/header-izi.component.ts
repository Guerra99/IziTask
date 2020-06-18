import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { Conta } from 'src/app/models/conta.model';
import { IziService } from 'src/app/services/izi.service';

@Component({
  selector: 'app-header-izi',
  templateUrl: './header-izi.component.html',
  styleUrls: ['./header-izi.component.scss']
})
export class HeaderIziComponent implements OnInit {

  @Input() usuario: Conta;
  @Output() redirectDashboardEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() redirectLandingEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor(private iziService: IziService) { }

  ngOnInit(): void {

  }

  usuarioLogado() {
    // return this.usuario.nome;
  }

  deslogar() {
    // this.authService.deslogar(this.usuario);
  }

  redirectDashboard() {
    this.redirectDashboardEvent.emit();
  }

  redirectLanding() {
    this.redirectLandingEvent.emit();
  }
}
