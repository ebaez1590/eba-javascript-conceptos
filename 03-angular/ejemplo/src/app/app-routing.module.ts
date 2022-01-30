import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaForbiddenComponent } from './rutas/ruta-forbidden/ruta-forbidden.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaNotFoundComponent } from './rutas/ruta-not-found/ruta-not-found.component';
import { RutaAppComponent } from './rutas/ruta-app/ruta-app.component';
import { RutaUsuarioComponent } from './rutas/ruta-usuario/ruta-usuario.component';
import { RutaPostComponent } from './rutas/ruta-post/ruta-post.component';
import { EstaLogueadoGuard } from './servicios/auth/esta-logueado.guard';

//Esquema de rutas del proyecto
// login
// inicio
// app
        // usuario
        // post
// configuracion

//Arreglo de rutas
const routes: Routes = [
  {//dos propiedades minimas para agregar una ruta
    path: 'login',
    component: RutaLoginComponent
  },
  {
    path: 'inicio',
    canActivate: [ EstaLogueadoGuard ],//Porpiedad para habilitar la ruta a traves del uso de Guards
    component: RutaInicioComponent
  },
  {
    path: 'app',
    component: RutaAppComponent,
    //Las rutas se renderizan en el router outlet padre
    //como tenemos una ruta hija que tiene a su vez otras hijas estas se renderizan en el router outlet de su padre
    children: [
      {
        path: 'usuario',
        component: RutaUsuarioComponent
      },
      {
        path: 'post',
        component: RutaPostComponent
      }
    ]
  },
  {
    path: 'forbidden',
    component: RutaForbiddenComponent
  },
  {
    path: 'not-found',
    component: RutaNotFoundComponent
  },
  //Ruta por defecto si no se especifica ninguna (redireccion)
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  //Para rutas que no se encuentran se redirije a la ruta not-found
  {
    path: '**',
    component: RutaNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {useHash: true}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
