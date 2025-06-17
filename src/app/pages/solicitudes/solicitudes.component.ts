import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ModalSoliciudComponent } from '../modal-soliciud/modal-soliciud.component';

@Component({
  selector: 'app-solicitudes',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SidebarComponent,
    ModalSoliciudComponent
  ],
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent {
  modalAbierto = false;

  newRequest(): void {
    this.modalAbierto = true;
  }

  cerrarModal(): void {
    this.modalAbierto = false;
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
