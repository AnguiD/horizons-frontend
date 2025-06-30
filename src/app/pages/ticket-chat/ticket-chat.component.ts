import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Ticket {
  id: number;
  asunto: string;
  descripcion: string;
  estado: string;
  comentarios?: ComentarioSoporte[];
}
export interface ComentarioSoporte {
  autor: string;
  rol: string;
  mensaje: string;
  fecha?: string;
}
export interface UsuarioActual {
  nombre: string;
  rol: string;
}

@Component({
  selector: 'app-ticket-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ticket-chat.component.html',
  styleUrls: ['./ticket-chat.component.css']
})
export class TicketChatComponent {
  @Input() ticket: any;
  @Input() usuarioActual!: UsuarioActual;


  nuevoComentario = '';
  nuevoRol = '';
  nuevoAutor = '';

  ngOnInit() {
    if (this.usuarioActual) {
      this.nuevoRol = this.usuarioActual.rol;
      this.nuevoAutor = this.usuarioActual.nombre;
    }
  }

  enviarComentario() {
    if (this.nuevoComentario.trim() && this.nuevoAutor.trim()) {
      if (!this.ticket.comentarios) this.ticket.comentarios = [];
      this.ticket.comentarios.push({
        autor: this.nuevoAutor,
        rol: this.nuevoRol,
        mensaje: this.nuevoComentario,
        fecha: new Date().toISOString()
      });
      this.nuevoComentario = '';
    }
  }

  esPropioComentario(comentario: ComentarioSoporte) {
    return comentario.autor === this.usuarioActual.nombre && comentario.rol === this.usuarioActual.rol;
  }
}
