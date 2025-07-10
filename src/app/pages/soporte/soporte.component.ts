import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ModalTicketComponent } from '../modal-ticket/modal-ticket.component';
import { TicketChatComponent } from '../ticket-chat/ticket-chat.component';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { tick } from '@angular/core/testing';

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
  opcionBusqueda = 'asunto';
  busqueda = '';
  filtroEstado = '';

  tickets = [
    { id: 1, asunto: 'Pantalla rota', descripcion: 'La laptop tiene la pantalla quebrada', estado: 'Pendiente', comentarios: [], fechaCreacion: '2023-10-01T08:30:00Z', tecnico: null },
    {
      id: 2, asunto: 'Error de red', descripcion: 'No hay conexión en mi oficina', estado: 'En proceso', comentarios: [
        { autor: 'Juan Pérez', rol: 'Colaborador', mensaje: 'He reiniciado el router, pero sigue sin funcionar.', fecha: '2023-10-01T10:00:00Z' }
      ], fechaCreacion: '2023-10-01T10:00:00Z', tecnico: { nombre: 'Luis Martinez', ticketsAsignados: 2 }
    },
    {
      id: 3, asunto: 'Software no instalado', descripcion: 'Necesito instalar el software X en mi equipo', estado: 'Resuelto', comentarios: [
        { autor: 'Ana Gómez', rol: 'Soporte', mensaje: 'El software ha sido instalado correctamente.', fecha: '2023-10-02T12:30:00Z' }
      ], fechaCreacion: '2023-10-02T12:00:00Z', tecnico: { nombre: 'Amalia López', ticketsAsignados: 1 }
    },
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
      comentarios: [],
      fechaCreacion: new Date().toISOString(),
      tecnico: null
    });
  }

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

  exportarSolicitudes(): void {
    const doc = new jsPDF();
    const title = 'Listado de Tickets de Soporte Técnico';

    doc.setFontSize(18);
    doc.setTextColor(238, 114, 2);
    doc.setFont('helvetica', 'bold');
    doc.text(title, 14, 15);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');

    const headers = [['ID', 'Asunto', 'Descripción', 'Estado', 'Fecha de Creación', 'Tecnico Asignado']];
    const data = this.tickets.map(ticket => [
      ticket.id,
      ticket.asunto,
      ticket.descripcion,
      ticket.estado,
      ticket.fechaCreacion ? this.formatFecha(ticket.fechaCreacion) : 'N/A',
      ticket.tecnico ? ticket.tecnico.nombre : 'N/A'
    ]);

    autoTable(doc, {
      head: headers,
      body: data,
      startY: 25,
      styles: {
        cellPadding: 3,
        fontSize: 9,
      },
      headStyles: {
        fillColor: [238, 114, 2],
        textColor: [255, 255, 255],
      },
    });

    // Pie de página
    doc.setFontSize(10);
    doc.text('Horizons 1.0.0 - Gestión de Solicitudes', 14, doc.internal.pageSize.height - 10);

    // Guardar el PDF
    doc.save('solicitudes-soporte-tecnico.pdf');
  }

  private formatFecha(fecha: string | undefined): string {
    if (!fecha) return 'N/A';
    const date = new Date(fecha);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  }
}
