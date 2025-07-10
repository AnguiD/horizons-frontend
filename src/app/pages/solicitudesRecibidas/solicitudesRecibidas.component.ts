import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SolicitudChatComponent, ComentarioSolicitud } from '../solicitud-chat/solicitud-chat.component';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface SolicitudDetalle {
  id: number;
  empleado: string;
  tipo: string;
  fechaInicio?: string;
  fechaFin?: string;
  motivo?: string;
  estado?: string;
  duracion?: string;
  fechaSolicitud: string;
  comentarios?: ComentarioSolicitud[];
}

@Component({
  selector: 'app-solicitudes-recibidas',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SidebarComponent, SolicitudChatComponent],
  templateUrl: './solicitudesRecibidas.component.html',
  styleUrls: ['./solicitudesRecibidas.component.css']
})
export class SolicitudesRecibidasComponent {
  solicitudesRecibidas: SolicitudDetalle[] = [
    {
      id: 1,
      empleado: "Juan Pérez",
      tipo: "Vacaciones",
      fechaInicio: "2024-02-15",
      fechaFin: "2024-02-25",
      motivo: "Ya cumpli mi año de servicio, me corresponde vacaciones",
      estado: "Pendiente",
      fechaSolicitud: "2024-01-10"
    },
    {
      id: 2,
      empleado: "Juan Pérez",
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
      empleado: "Juan Pérez",
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
      empleado: "Juan Pérez",
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
    },
    {
      id: 5,
      empleado: "Ana López",
      tipo: "Permiso por Enfermedad",
      fechaInicio: "2024-03-01",
      fechaFin: "2024-03-03",
      motivo: "Enfermedad temporal",
      estado: "Pendiente",
      fechaSolicitud: "2024-02-25"
    }, {
      id: 6,
      empleado: "Carlos Ruiz",
      tipo: "Capacitación Interna",
      duracion: "15 horas",
      motivo: "Curso de Seguridad Laboral",
      estado: "Pendiente",
      fechaSolicitud: "2024-02-28"
    },
    {
      id: 7,
      empleado: "Laura Martínez",
      tipo: "Permiso por Maternidad",
      fechaInicio: "2024-04-01",
      fechaFin: "2024-06-30",
      motivo: "Maternidad",
      estado: "Aprobado",
      fechaSolicitud: "2024-03-15",
      comentarios: [
        { autor: "Laura Martínez", rol: "Owner", mensaje: "Solicitud aceptada, disfruta de tu tiempo con el bebé", fecha: "2024-03-16T09:00" },
        { autor: "Ana López", rol: "Admin", mensaje: "Recuerda enviar los documentos necesarios para el permiso", fecha: "2024-03-17T10:15" }
      ]
    },
  ];

  usuarioActual = {
    nombre: 'Ana Garcia Morales',
    rol: 'Owner',
    email: 'ana.garcia@badak.mx',
  };

  chatAbierto: number | null = null;

  toggleChat(idx: number) {
    this.chatAbierto = this.chatAbierto === idx ? null : idx;
  }

  acceptRequest(id: number): void {
    const idx = this.solicitudesRecibidas.findIndex(r => r.id === id);
    if (idx !== -1) {
      this.solicitudesRecibidas[idx].estado = 'Aprobado';
      alert(`Solicitud ID ${id} aceptada.`);
    }
  }

  rejectRequest(id: number): void {
    const idx = this.solicitudesRecibidas.findIndex(r => r.id === id);
    if (idx !== -1) {
      this.solicitudesRecibidas[idx].estado = 'Rechazado';
      alert(`Solicitud ID ${id} rechazada.`);
    }
  }

  exportarSolicitudes(): void {
    const doc = new jsPDF();
    const title = 'Listado de Solicitudes Recibidas';

    doc.setFontSize(18);
    doc.setTextColor(238, 114, 2);
    doc.setFont('helvetica', 'bold');
    doc.text(title, 14, 15);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');

    const headers = [['ID', 'Empleado', 'Tipo', 'Fecha Inicio', 'Fecha Fin', 'Duracion', 'Motivo', 'Estado', 'Fecha Solicitud']];
    const data = this.solicitudesRecibidas.map(s => [
      s.id,
      s.empleado || 'N/A',
      s.tipo || 'N/A',
      this.formatFecha(s.fechaInicio),
      this.formatFecha(s.fechaFin),
      s.duracion || 'N/A',
      s.motivo || 'N/A',
      s.estado || 'N/A',
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
    doc.save('solicitudes_recibidas.pdf');
  }

  private formatFecha(fecha: string | undefined): string {
    if (!fecha) return 'N/A';
    const date = new Date(fecha);
    return date.toLocaleDateString('es-MX', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  }
}


