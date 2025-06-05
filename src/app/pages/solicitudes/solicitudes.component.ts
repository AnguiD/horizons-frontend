import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-solicitudes',
  imports: [HeaderComponent, SidebarComponent],
  templateUrl: './solicitudes.component.html',
  styleUrl: './solicitudes.component.css'
})
export class SolicitudesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newRequest(): void {
    alert('Crear nueva solicitud - Funcionalidad en desarrollo');
  }


  viewRequest(id: number): void {
    alert(`Ver detalles de la solicitud ${id}`);
  }

  editRequest(id: number): void {
    alert(`Editar solicitud ${id}`);

  }


  deleteRequest(id: number): void {
    const confirmed = window.confirm(`¿Estás seguro de que quieres eliminar la solicitud ${id}?`);
    if (confirmed) {
      alert(`Solicitud ${id} eliminada`);
    }
  }
}
