import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface CompanyPayload {
  id?: number;
  nombre: string;
  direccion: string;
  telefono: string;
  email: string;
}

@Component({
  selector: 'company-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent {
  @Input() empresa: CompanyPayload = { nombre: '', direccion: '', telefono: '', email: '' };
  @Output() cerrar = new EventEmitter<void>();
  @Output() actualizarEmpresa = new EventEmitter<CompanyPayload>();

  guardar() {
    this.actualizarEmpresa.emit(this.empresa);
    this.cerrar.emit();
  }
}

