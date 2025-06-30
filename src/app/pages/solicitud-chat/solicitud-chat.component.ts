import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface SolicitudDetalle {
  id: number;
  tipo: string;
  fechaInicio?: string;
  fechaFin?: string;
  motivo?: string;
  estado?: string;
  duracion?: string;
  fechaSolicitud: string;
  comentarios?: ComentarioSolicitud[];
}

export interface ComentarioSolicitud {
  autor: string;
  rol: string;
  mensaje: string;
  fecha?: string;
}

@Component({
  selector: 'app-solicitud-chat',
  templateUrl: './solicitud-chat.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./solicitud-chat.component.css'],
  standalone: true
})

export class SolicitudChatComponent {
  @Input() solicitud!: SolicitudDetalle;
  @Input() usuarioActual!: { nombre: string; rol: string; email: string };
  @Output() cerrar = new EventEmitter<void>();

  nuevoComentario = '';

  enviarComentario() {
    if (this.nuevoComentario.trim() && this.usuarioActual.nombre && this.usuarioActual.rol) {
      if (!this.solicitud.comentarios) {
        this.solicitud.comentarios = [];
      }
      this.solicitud.comentarios.push({
        autor: this.usuarioActual.nombre,
        rol: this.usuarioActual.rol,
        mensaje: this.nuevoComentario,
        fecha: new Date().toISOString()
      });
      this.nuevoComentario = '';
    }
  }

  esPropioComentario(comentario: ComentarioSolicitud) {
    return comentario.autor === this.usuarioActual.nombre && comentario.rol === this.usuarioActual.rol;
  }
}


