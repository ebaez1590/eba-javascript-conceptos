import { Injectable } from '@angular/core';

//La propiedad provideIn del decorador Injectable nos permite lo siguiente:
//Que el servicio se agregue implicitamente al arreglo de providers del app.module -> root
//Que el servicio se instancie cada vez que sea usado por un modulo -> any
@Injectable({
  providedIn: 'any'
})
export class UserJPHService {

  constructor() { }
}
