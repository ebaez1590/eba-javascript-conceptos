import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaNotFoundComponent } from './rutas/ruta-not-found/ruta-not-found.component';
import { RutaForbiddenComponent } from './rutas/ruta-forbidden/ruta-forbidden.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaAppComponent } from './rutas/ruta-app/ruta-app.component';
import { RutaUsuarioComponent } from './rutas/ruta-usuario/ruta-usuario.component';
import { RutaPostComponent } from './rutas/ruta-post/ruta-post.component';
import { AuthService } from './servicios/auth/auth.service';
import { EstaLogueadoGuard } from './servicios/auth/esta-logueado.guard';

@NgModule({
  //Componentes
  declarations: [
    AppComponent,
    RutaLoginComponent,
    RutaNotFoundComponent,
    RutaForbiddenComponent,
    RutaInicioComponent,
    RutaAppComponent,
    RutaUsuarioComponent,
    RutaPostComponent
  ],
  //Modulos Importados
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  //Servicios
  providers: [
    AuthService,
    EstaLogueadoGuard
  ],
  //Componente principal (aqui empieza tooodo)
  bootstrap: [AppComponent]
})
export class AppModule { }
