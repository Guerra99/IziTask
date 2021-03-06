import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Conta } from '../models/conta.model';

@Injectable()
export class AuthGuardService {

    private usuarioAutenticado = false;
    private contas: Conta[] =
        [
            { id: '1', nome: 'Guilherme', sobrenome: 'Guerra', email: 'guilherme@hotmail.com', senha: '1234', logado: false },
            { id: '2', nome: 'Dhiego', sobrenome: 'Rodrigues', email: 'dhiego@hotmail.com', senha: '1234', logado: false },
            { id: '3', nome: 'Yuri', sobrenome: 'Barsotti', email: 'yuri@hotmail.com', senha: '1234', logado: false }
        ];

    constructor(private router: Router) { }

    logar(contaUsuario: Conta) {
        if (this.contas.find(x => x.email === contaUsuario.email && x.senha === contaUsuario.senha)) {
            this.contas.find(x => x.email === contaUsuario.email && x.senha === contaUsuario.senha).logado = true;
            this.usuarioAutenticado = true;
            this.router.navigate(['/menu-quadros']);
        } else {
            this.usuarioAutenticado = false;
        }
    }

    deslogar(contaUsuario: Conta) {
        this.contas.find(x => x.email === contaUsuario.email && x.senha === contaUsuario.senha).logado = false;
        this.usuarioAutenticado = false;
        this.router.navigate(['/login']);
    }

    usuarioEstaAutenticado() {
        return this.usuarioAutenticado;
    }

    buscarUsuarioLogado() {
        return this.contas.find(x => x.logado === true);
    }
}
