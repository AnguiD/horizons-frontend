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
  comentarios?:  ComentarioSolicitud[];
}

export interface ComentarioSolicitud {
  autor: string;     // Ejemplo: "María García"
  rol: string;       // Ejemplo: "Owner", "Colaborador", "Admin"
  mensaje: string;
  fecha?: string;    // Opcional: '2024-07-01 14:32'
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
  @Output() cerrar = new EventEmitter<void>();

  nuevoComentario = '';
  nuevoRol = 'Colaborador';
  nuevoAutor = 'Juan Pérez';

  enviarComentario() {
    if (this.nuevoComentario.trim() && this.nuevoAutor.trim()) {
      if (!this.solicitud.comentarios) {
        this.solicitud.comentarios = [];
      }
      this.solicitud.comentarios.push({
        autor: this.nuevoAutor,
        rol: this.nuevoRol,
        mensaje: this.nuevoComentario,
        fecha: new Date().toISOString()
      });
      this.nuevoComentario = '';
    }
  }
}


