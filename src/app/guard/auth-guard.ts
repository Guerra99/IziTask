import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';

import { AuthGuardService } from '../services/auth-guard.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

    constructor(
        private authService: AuthGuardService,
        private router: Router
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {

        return this.verificarAcesso();
    }

    private verificarAcesso() {
        if (this.authService.usuarioEstaAutenticado()) {
            return true;
        }

        this.router.navigate(['/login']);

        return false;
    }

    canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {

        return this.verificarAcesso();
    }

}
