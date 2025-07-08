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
import { RecuperarPasswordComponent } from './pages/password/password.component';
import { CompanyListComponent } from './pages/empresas/empresaLista/company-list.component';
import { CompanyCreateComponent } from './pages/empresas/agregarEmpresa/company-create.component';
import { CompanyEditComponent } from './pages/empresas/editarEmpresa/company-edit.component';
import { CompanyDetailComponent } from './pages/empresas/detallesEmpresa/company-detail.component';
import { SoporteTecnicoComponent } from './pages/soporte-tecnico/soporte-tecnico.component';
import { AyudaComponent } from './pages/ayuda/ayuda.component';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'desarrollo', component: DesarrolloComponent },
  { path: 'evaluaciones', component: EvaluacionesComponent },
  { path: 'feedbacks', component: FeedbacksComponent },
  { path: 'seguros', component: SegurosComponent },
  { path: 'empleado/solicitudes', component: SolicitudesComponent},
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
  { path : 'recuperar-password', component: RecuperarPasswordComponent },
  { path: 'empresas', component: CompanyListComponent },
  { path: 'empresas/crear', component: CompanyCreateComponent },
  { path: 'empresas/editar/:id', component: CompanyEditComponent },
  { path: 'empresas/:id', component: CompanyDetailComponent },
  { path: 'administrador/solicitudes', component: SolicitudesRecibidasComponent },
  { path: 'administrador/soporte', component: SoporteTecnicoComponent },
  { path: 'ayuda', component: AyudaComponent}

];


