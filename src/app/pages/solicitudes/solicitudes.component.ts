import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ModalSoliciudComponent } from '../modal-soliciud/modal-soliciud.component';
import { SolicitudChatComponent, SolicitudDetalle } from '../solicitud-chat/solicitud-chat.component';
import { ModalEditarSolicitudComponent } from '../modal-editar-solicitud/modal-editar-solicitud.component';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-solicitudes',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SidebarComponent,
    ModalSoliciudComponent,
    SolicitudChatComponent,
    ModalEditarSolicitudComponent
  ],
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent {
  modalAbierto = false;
  chatAbierto = false;
  modalEditarAbierto = false;
  solicitudEditar: SolicitudDetalle | null = null;
  chatAbiertoIndex: number | null = null;
  solicitudSeleccionada: SolicitudDetalle | null = null;

  solicitudes: SolicitudDetalle[] = [
    {
      id: 1,
      tipo: "Vacaciones",
      fechaInicio: "2024-02-15",
      fechaFin: "2024-02-25",
      motivo: "Ya cumpli mi año de servicio, me corresponde vacaciones",
      fechaSolicitud: "2024-01-10"
    },
    {
      id: 2,
      tipo: "Permiso Personal",
      fechaInicio: "2024-01-05",
      fechaFin: "2024-01-06",
      motivo: "Cita médica",
      estado: "Aprobado",
      fechaSolicitud: "2024-02-20",
      comentarios: [
        { autor: "María García", rol: "Owner", mensaje: "Solicitud aprobada por el gerente para conceder el permiso", fecha: "2024-02-20T10:30" },
        { autor: "Juan Pérez", rol: "Colaborador", mensaje: "Gracias por la aprobación, asistiré a mi cita médica", fecha: "2024-02-21T08:45" }
      ]
    },
    {
      id: 3,
      tipo: "Capacitación Externa",
      duracion: "20 horas",
      motivo: "Curso de Liderazgo",
      estado: "Aprobado",
      fechaSolicitud: "2023-12-28",
      comentarios: [
        { autor: "Ana López", rol: "Owner", mensaje: "Solicitud aprobada, el curso esta programado para empezar en enero el dia 5", fecha: "2023-12-29T09:15" },
        { autor: "Juan Pérez", rol: "Colaborador", mensaje: "Gracias por la aprobación, estoy emocionado por el curso", fecha: "2023-12-30T11:45" },
        { autor: "Ana López", rol: "Admin", mensaje: "Recuerda enviar el certificado al finalizar el curso", fecha: "2024-01-10T14:00" }
      ]
    },
    {
      id: 4,
      tipo: "Dia de Descanso",
      fechaInicio: "2023-12-27",
      fechaFin: "2023-12-28",
      motivo: "Compensación por trabajo extra",
      estado: "Rechazado",
      fechaSolicitud: "2023-12-20",
      comentarios: [
        { autor: "Carlos Ruiz", rol: "Owner", mensaje: "Solicitud rechazada, no se cumplen los requisitos para un día de descanso", fecha: "2023-12-21T15:00" },
        { autor: "Juan Pérez", rol: "Colaborador", mensaje: "Entiendo, intentaré compensar el tiempo de otra manera", fecha: "2023-12-22T09:30" }
      ]
    }
  ];

  newRequest(): void {
    this.modalAbierto = true;
  }

  cerrarModal(): void {
    this.modalAbierto = false;
  }

  agregarSolicitud(nueva: any) {
    console.log('Nueva solicitud recibida:', nueva);
    const nuevoId = this.solicitudes.length ? Math.max(...this.solicitudes.map(s => s.id || 0)) + 1 : 1;
    const solicitudConId = { ...nueva, id: nuevoId };
    this.solicitudes = [solicitudConId, ...this.solicitudes];
    this.modalAbierto = false;

    console.log('Nueva solicitud agregada:', solicitudConId);
  }


  toggleChat(idx: number) {
    this.chatAbiertoIndex = this.chatAbiertoIndex === idx ? null : idx;
  }

  editRequest(id: number): void {
    this.solicitudEditar = this.solicitudes.find(solicitud => solicitud.id === id) || null;
    if (this.solicitudEditar) {
      this.modalEditarAbierto = true;
    }
  }

  cerrarModalEditar(): void {
    this.modalEditarAbierto = false;
    this.solicitudEditar = null;
  }

  actualizarSolicitud(solicitud: SolicitudDetalle): void {
    const index = this.solicitudes.findIndex(s => s.id === solicitud.id);
    if (index !== -1) {
      this.solicitudes[index] = solicitud;
      this.cerrarModalEditar();
    }
  }

  deleteRequest(id: number): void {
    const confirmed = window.confirm(`¿Estás seguro de que quieres cancelar la solicitud ${id}?`);
    if (confirmed) {
      const solicitud = this.solicitudes.find(s => s.id === id);
      if (solicitud) {
        solicitud.estado = 'Cancelada';
        alert(`Solicitud ${id} cancelada`);
        if (this.solicitudSeleccionada && this.solicitudSeleccionada.id === id) {
          this.solicitudSeleccionada.estado = 'Cancelada';
        }
        if (this.solicitudEditar && this.solicitudEditar.id === id) {
          this.solicitudEditar.estado = 'Cancelada';
        }
        this.cerrarModalEditar();
        this.cerrarModal();
        this.chatAbierto = false;
        this.modalEditarAbierto = false;
        this.solicitudEditar = null;
        this.solicitudSeleccionada = null;
        this.modalAbierto = false;
        console.log(`Solicitud con ID ${id} marcada como cancelada`);
      }
    }
  }

  exportarSolicitudes(): void {
    const doc = new jsPDF();
    const title = 'Listado de Solicitudes';

    doc.setFontSize(18);
    doc.setTextColor(238, 114, 2);
    doc.setFont('helvetica', 'bold');
    doc.text(title, 14, 15);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');

    const headers = [['ID', 'Tipo', 'Fecha Inicio', 'Fecha Fin', 'Duracion' ,'Motivo', 'Estado', 'Fecha Solicitud']];
    const data = this.solicitudes.map(s => [
      s.id ?? 'N/A',
      s.tipo ?? 'N/A',
      this.formatFecha(s.fechaInicio),
      this.formatFecha(s.fechaFin),
      s.duracion ?? 'N/A',
      s.motivo ?? 'N/A',
      s.estado ?? 'N/A',
      this.formatFecha(s.fechaSolicitud)
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
    doc.save('solicitudes.pdf');
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
