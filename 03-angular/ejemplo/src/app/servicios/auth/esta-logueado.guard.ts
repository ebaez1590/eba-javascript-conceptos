import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from './auth.service';


@Injectable()
export class EstaLogueadoGuard implements CanActivate{
    //Importar el Servicio
    //Importamos el servicio usando inyeccion de dependencias utilizando el constructor
    //Lo que vayamos a importar va como parametro del constructor
    //El Router de angular se lo puede utilizar donde se requiera a traves de inyeccion de dependencias.
    constructor (
        private readonly _authService:AuthService,
        private readonly _router: Router
    ) {
        
    }

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
            if (!this._authService.estaLogueado) {
                this._router.navigate(['/forbidden']);
            }
            return this._authService.estaLogueado; //boolean
        }
    
    
}