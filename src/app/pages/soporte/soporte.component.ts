import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ModalTicketComponent } from '../modal-ticket/modal-ticket.component';
import { TicketChatComponent } from '../ticket-chat/ticket-chat.component';

@Component({
  selector: 'app-soporte',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    SidebarComponent,
    ModalTicketComponent,
    TicketChatComponent
  ],
  templateUrl: './soporte.component.html',
  styleUrls: ['./soporte.component.css']
})
export class SoporteComponent {
  modalAbierto = false;
  chatAbierto: number | null = null;

  busqueda = '';
  tickets = [
    { id: 1, asunto: 'Pantalla rota', descripcion: 'La laptop tiene la pantalla quebrada', estado: 'Pendiente', comentarios: [] },
    { id: 2, asunto: 'Error de red', descripcion: 'No hay conexión en mi oficina', estado: 'En proceso', comentarios: [
      { autor: 'Juan Pérez', rol: 'Colaborador', mensaje: 'He reiniciado el router, pero sigue sin funcionar.', fecha: '2023-10-01T10:00:00Z' }
    ] },
    { id: 3, asunto: 'Software no instalado', descripcion: 'Necesito instalar el software X en mi equipo', estado: 'Resuelto', comentarios: [
      { autor: 'Ana Gómez', rol: 'Soporte', mensaje: 'El software ha sido instalado correctamente.', fecha: '2023-10-02T12:30:00Z' }
    ] },
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
      estado: ticket.estado ?? 'Pendiente',
      comentarios: []
    });
  }

  get ticketsFiltrados() {
    return this.tickets.filter(t =>
      t.asunto.toLowerCase().includes(this.busqueda.toLowerCase()) ||
      t.descripcion.toLowerCase().includes(this.busqueda.toLowerCase())
    );
  }

  toggleChat(idx: number) {
    this.chatAbierto = this.chatAbierto === idx ? null : idx;
  }
}
