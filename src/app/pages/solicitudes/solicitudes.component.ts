import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ModalSoliciudComponent } from '../modal-soliciud/modal-soliciud.component';
import { SolicitudChatComponent, SolicitudDetalle } from '../solicitud-chat/solicitud-chat.component';
import { ModalEditarSolicitudComponent } from '../modal-editar-solicitud/modal-editar-solicitud.component';


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
    // Asigna un id único. Aquí simplemente el siguiente consecutivo.
    console.log('Nueva solicitud recibida:', nueva);
    const nuevoId = this.solicitudes.length ? Math.max(...this.solicitudes.map(s => s.id || 0)) + 1 : 1;
    const solicitudConId = { ...nueva, id: nuevoId };
    this.solicitudes = [solicitudConId, ...this.solicitudes];
    this.modalAbierto = false; // Cierra el modal después de guardar

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
    const confirmed = window.confirm(`¿Estás seguro de que quieres eliminar la solicitud ${id}?`);
    if (confirmed) {
      alert(`Solicitud ${id} eliminada`);
      this.solicitudes = this.solicitudes.filter(solicitud => solicitud.id !== id);
      if (this.solicitudSeleccionada && this.solicitudSeleccionada.id === id
      ) {
        this.solicitudSeleccionada = null;
      }
      if (this.chatAbiertoIndex === id) {
        this.chatAbiertoIndex = null;
      }
      if (this.solicitudEditar && this.solicitudEditar.id === id) {
        this.cerrarModalEditar();
      }
      this.cerrarModal();
      this.chatAbierto = false;
      this.modalEditarAbierto = false;
      this.solicitudEditar = null;
      this.solicitudSeleccionada = null;
      this.modalAbierto = false;
      console.log(`Solicitud con ID ${id} eliminada`);
    }
  }

}
