import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaBodegaComponent } from './rutas/ruta-bodega/ruta-bodega.component';
import { RutaReporteComponent } from './rutas/ruta-reporte/ruta-reporte.component';

const routes: Routes = [
  {
    path: 'bodega',
    component: RutaBodegaComponent
  },
  {
    path: 'reporte',
    component: RutaReporteComponent
  },
  //Ruta generica
  {
    path: '',
    redirectTo: 'bodega',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloInventarioRoutingModule { }
