import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-soliciud',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal-soliciud.component.html',
  styleUrls: ['./modal-soliciud.component.css']
})
export class ModalSoliciudComponent {
  @Output() guardarSolicitud = new EventEmitter<any>();
  @Output() cerrar = new EventEmitter<void>();

  solicitud = {
    tipo: '',
    fechaInicio: '',
    fechaFin: '',
    duracion: '',
    motivo: '',
    estado: 'Pendiente',
    fechaSolicitud: new Date().toISOString().split('T')[0],
  };

  guardar() {
    console.log('Solicitud enviada:', this.solicitud);
    this.guardarSolicitud.emit({ ...this.solicitud });  // Emite los datos
    this.cerrar.emit();
  }
}
