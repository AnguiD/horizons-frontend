import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


export interface ComentarioSolicitud {
  autor: string;
  rol: string;
  mensaje: string;
  fecha?: string;
}

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

@Component({
  selector: 'app-modal-editar-solicitud',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal-editar-solicitud.component.html',
  styleUrls: ['./modal-editar-solicitud.component.css']
})

export class ModalEditarSolicitudComponent implements OnChanges {
  @Input() solicitud!: SolicitudDetalle;
  @Output() cerrar = new EventEmitter<void>();
  @Output() actualizar = new EventEmitter<SolicitudDetalle>();

  solicitudCopia!: SolicitudDetalle;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['solicitud'] && this.solicitud) {
      this.solicitudCopia = JSON.parse(JSON.stringify(this.solicitud));
    }
  }

  guardar() {
    this.actualizar.emit(this.solicitudCopia);
    this.cerrar.emit();
  }
}
