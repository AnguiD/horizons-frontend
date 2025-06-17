import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ModalTicketComponent } from '../modal-ticket/modal-ticket.component'; // <-- Importa tu modal

@Component({
  selector: 'app-soporte',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    SidebarComponent,
    ModalTicketComponent  // <-- agrégalo aquí
  ],
  templateUrl: './soporte.component.html',
  styleUrls: ['./soporte.component.css']
})
export class SoporteComponent {
  modalAbierto = false; // <- Para abrir/cerrar el modal

  busqueda = '';
  tickets = [
    { id: 1, asunto: 'Pantalla rota', descripcion: 'La laptop tiene la pantalla quebrada', estado: 'Pendiente' },
    { id: 2, asunto: 'Error de red', descripcion: 'No hay conexión en mi oficina', estado: 'En proceso' }
  ];

  abrirModal() {
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
  }

  agregarTicket(ticket: any) {
    this.tickets.push({
      id: this.tickets.length + 1,
      asunto: ticket.asunto,
      descripcion: ticket.descripcion,
      estado: ticket.estado ?? 'Pendiente'
    });
  }

  get ticketsFiltrados() {
    return this.tickets.filter(t =>
      t.asunto.toLowerCase().includes(this.busqueda.toLowerCase()) ||
      t.descripcion.toLowerCase().includes(this.busqueda.toLowerCase())
    );
  }
}
