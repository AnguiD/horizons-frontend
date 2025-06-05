import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SolicitudesComponent } from './pages/solicitudes/solicitudes.component';
import { DesarrolloComponent } from './pages/desarrollo/desarrollo.component';
import { EvaluacionesComponent } from './pages/evaluaciones/evaluaciones.component';
import { FeedbacksComponent } from './pages/feedbacks/feedbacks.component';
import { SegurosComponent } from './pages/seguros/seguros.component';
import { SolicitudesRecibidasComponent } from './pages/solicitudesRecibidas/solicitudesRecibidas.component';
import { NominasComponent } from './pages/nominas/nominas.component';
import { SoporteComponent } from './pages/soporte/soporte.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { UsuariosInvitacionComponent } from './pages/usuariosInvitacion/usuariosInvitacion.component';
import { EditarUsuarioComponent } from './pages/editarUsuarios/editarUsuarios.component';
import { VacantesComponent } from './pages/reclutamiento/vacantes/vacantes.component';
import { VacanteFormComponent } from './pages/reclutamiento/vacantes/vacante-form.component';
import { RegistroAspiranteComponent } from './pages/reclutamiento/aspirante/registro-aspirante.component';
import { SeguimientoAplicacionesComponent } from './pages/reclutamiento/seguimiento/seguimiento-aplicaciones.component';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'solicitudes', component: SolicitudesComponent },
  { path: 'desarrollo', component: DesarrolloComponent },
  { path: 'evaluaciones', component: EvaluacionesComponent },
  { path: 'feedbacks', component: FeedbacksComponent },
  { path: 'seguros', component: SegurosComponent },
  { path: 'empleado/solicitudes', component: SolicitudesRecibidasComponent},
  { path: 'empleado/nominas', component: NominasComponent },
  { path: 'empleado/soporte', component: SoporteComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'invitarUsuario', component: UsuariosInvitacionComponent },
  { path: 'editarUsuario/:id', component: EditarUsuarioComponent},
  { path: 'vacantes', component: VacantesComponent },
  { path: 'vacantes/nuevo', component: VacanteFormComponent },
  { path: 'vacantes/editar/:id', component: VacanteFormComponent },
  { path: 'aspirantes/registro/:vacanteId', component: RegistroAspiranteComponent },
  { path: 'aspirantes/seguimiento', component: SeguimientoAplicacionesComponent },

];
