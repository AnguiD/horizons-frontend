import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DesarrolloComponent } from './pages/desarrollo/desarrollo.component';
import { SolicitudesComponent } from './pages/solicitudes/solicitudes.component';
import { NominasComponent } from './pages/nominas/nominas.component';
import { SoporteComponent } from './pages/soporte/soporte.component';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'desarrollo', component: DesarrolloComponent },
  { path: 'empleado/solicitudes', component: SolicitudesComponent },
  { path: 'empleado/nominas', component: NominasComponent },
  { path: 'empleado/soporte', component: SoporteComponent },

];
