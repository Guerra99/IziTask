import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { Conta } from 'src/app/models/conta.model';

@Component({
  selector: 'app-header-izi',
  templateUrl: './header-izi.component.html',
  styleUrls: ['./header-izi.component.scss']
})
export class HeaderIziComponent implements OnInit {

  usuario: Conta;

  constructor(private authService: AuthGuardService) { }

  ngOnInit(): void {
    // this.usuario = this.authService.buscarUsuarioLogado();
  }

  usuarioLogado() {
    // return this.usuario.nome;
  }

  deslogar() {
    // this.authService.deslogar(this.usuario);
  }
}
