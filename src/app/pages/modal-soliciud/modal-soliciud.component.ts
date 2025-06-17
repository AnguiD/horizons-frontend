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
  @Output() cerrar = new EventEmitter<void>();

  solicitud = {
    tipo: '',
    fechaInicio: '',
    fechaFin: '',
    motivo: ''
  };

  guardar() {
    console.log('Solicitud enviada:', this.solicitud);
    this.cerrar.emit();
  }
}
