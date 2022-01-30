import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
    estaLogueado = true;

    roles = [
        'admin',
        'supervisor',
        'usuario'
    ];

}