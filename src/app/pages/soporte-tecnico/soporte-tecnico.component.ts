import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TicketChatComponent } from '../ticket-chat/ticket-chat.component';

interface TicketComentario {
  autor: string;
  rol: string;
  mensaje: string;
  fecha?: string;
}

interface TicketSoporte {
  id: number;
  asunto: string;
  descripcion: string;
  estado: string;
  usuario: { nombre: string, rol: string };
  comentarios?: TicketComentario[];
  tecnico?: { nombre: string, ticketsAsignados: number };
  fechaCreacion?: string;
}

@Component({
  selector: 'app-soporte-tecnico',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, SidebarComponent, TicketChatComponent],
  templateUrl: './soporte-tecnico.component.html',
  styleUrls: ['./soporte-tecnico.component.css']
})
export class SoporteTecnicoComponent {
  chatAbierto: number | null = null;
  modalAsignarAbierto = false;
  ticketSeleccionado: any = null;
  tecnicoAsignado: string | null = null;
  opcionBusqueda = 'asunto';
  busqueda = '';
  filtroEstado = '';

  tecnicos = [
    { nombre: 'Luis Técnico', ticketsAsignados: 2 },
    { nombre: 'Ana Sánchez', ticketsAsignados: 1 },
    { nombre: 'Jorge Méndez', ticketsAsignados: 4 },
    { nombre: 'Sofía Admin', ticketsAsignados: 0 }
  ];

  tickets: TicketSoporte[] = [
    {
      id: 1,
      asunto: 'No puedo acceder a mi correo',
      descripcion: 'El Outlook no carga desde hoy en la mañana',
      estado: 'Pendiente',
      usuario: { nombre: 'Ana Ramírez', rol: 'Colaborador' },
      comentarios: [
        { autor: 'Ana Ramírez', rol: 'Colaborador', mensaje: 'Ayuda porfa', fecha: '2024-07-01T09:00' }
      ],
      tecnico: undefined,
      fechaCreacion: '2024-07-01T09:00'
    },
    {
      id: 2,
      asunto: 'Error impresora',
      descripcion: 'La impresora marca atasco de papel y no imprime',
      estado: 'En proceso',
      usuario: { nombre: 'Jorge Ruiz', rol: 'Colaborador' },
      comentarios: [
        { autor: 'Jorge Ruiz', rol: 'Colaborador', mensaje: 'Ya revisé el papel', fecha: '2024-07-01T11:15' },
        { autor: 'Sofía Admin', rol: 'Soporte', mensaje: 'Voy a tu oficina en 10 minutos', fecha: '2024-07-01T11:30' }
      ],
      tecnico: { nombre: 'Sofía Admin', ticketsAsignados: 0 },
      fechaCreacion: '2024-07-01T11:00'
    }
  ];

    get ticketsFiltrados() {
    return this.tickets.filter(t =>
      (this.filtroEstado === '' || t.estado === this.filtroEstado) &&
      (
        this.opcionBusqueda === 'asunto'
          ? t.asunto.toLowerCase().includes(this.busqueda.toLowerCase())
          : t.descripcion.toLowerCase().includes(this.busqueda.toLowerCase())
      )
    );
  }

  toggleChat(idx: number) {
    this.chatAbierto = this.chatAbierto === idx ? null : idx;
  }

  abrirAsignarModal(ticket: any) {
    this.ticketSeleccionado = ticket;
    this.tecnicoAsignado = null;
    this.modalAsignarAbierto = true;
  }

  cerrarModalAsignar() {
    this.modalAsignarAbierto = false;
    this.ticketSeleccionado = null;
    this.tecnicoAsignado = null;
  }

  asignarTecnico() {
    if (this.ticketSeleccionado && this.tecnicoAsignado) {
      this.ticketSeleccionado.estado = 'En proceso';
      const tecnico = this.tecnicos.find(t => t.nombre === this.tecnicoAsignado);
      if (tecnico) {
        this.ticketSeleccionado.tecnico = { ...tecnico };
        tecnico.ticketsAsignados += 1;
      }
      console.log(`Ticket #${this.ticketSeleccionado.id} asignado a ${this.tecnicoAsignado} tiene ${tecnico?.ticketsAsignados} tickets asignados.`);
      this.cerrarModalAsignar();
    }
  }
}
