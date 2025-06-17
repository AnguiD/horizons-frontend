import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-ticket',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal-ticket.component.html',
  styleUrls: ['./modal-ticket.component.css']
})
export class ModalTicketComponent {
  @Output() cerrar = new EventEmitter<void>();
  @Output() guardar = new EventEmitter<any>();

  ticket = {
    asunto: '',
    descripcion: '',
    prioridad: 'Media',
    estado: 'Pendiente'
  };

  saveTicket() {
    this.guardar.emit(this.ticket); 
    this.cerrar.emit();
  }
}
