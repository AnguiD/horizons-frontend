import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
[x: string]: any;
  isEmpleadoOpen = false;
  isEmpresasOpen = false;
  isReclutamientoOpen = false;
  isAdministradorOpen = false;

  toggleEmpleado() {
    this.isEmpleadoOpen = !this.isEmpleadoOpen;
  }

  toggleReclutamiento() {
    this.isReclutamientoOpen = !this.isReclutamientoOpen;
  }
  toggleEmpresas() {
    this.isEmpresasOpen = !this.isEmpresasOpen;
  }
  toggleAdministrador() {
    this.isAdministradorOpen = !this.isAdministradorOpen;
  }
}
