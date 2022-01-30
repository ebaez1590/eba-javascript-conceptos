import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from './auth.service';


@Injectable()
export class EstaLogueadoGuard implements CanActivate{
    //Importar el Servicio
    //Importamos el servicio usando inyeccion de dependencias utilizando el constructor
    //Lo que vayamos a importar va como parametro del constructor
    constructor (
        private readonly _authService:AuthService
    ) {
        
    }

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this._authService.estaLogueado; //boolean
        }
    
    
}