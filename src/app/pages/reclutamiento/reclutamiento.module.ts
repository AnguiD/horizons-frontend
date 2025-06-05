// reclutamiento.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VacantesComponent } from './vacantes/vacantes.component';
import { VacanteFormComponent } from './vacantes/vacante-form.component';
import { RegistroAspiranteComponent } from './aspirante/registro-aspirante.component';
import { SeguimientoAplicacionesComponent } from './seguimiento/seguimiento-aplicaciones.component';

const reclutamientoRoutes: Routes = [
  { path: 'vacantes', component: VacantesComponent },
  { path: 'vacantes/nuevo', component: VacanteFormComponent },
  { path: 'vacantes/editar/:id', component: VacanteFormComponent },
  { path: 'aspirantes/registro/:vacanteId', component: RegistroAspiranteComponent },
  { path: 'aspirantes/seguimiento', component: SeguimientoAplicacionesComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(reclutamientoRoutes),
    VacantesComponent,
    VacanteFormComponent,
    RegistroAspiranteComponent,
    SeguimientoAplicacionesComponent
  ],
  exports: [RouterModule]
})
export class ReclutamientoModule {}
