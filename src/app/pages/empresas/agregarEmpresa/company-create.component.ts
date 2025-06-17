import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'company-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.css']
})
export class CompanyCreateComponent {
  @Output() cerrar = new EventEmitter<void>();

  newEmpresa = {
    nombre: '',
    direccion: '',
    telefono: '',
    email: ''
  };

  guardar() {
    console.log('Nueva Empresa Registrada:', this.newEmpresa);
    this.cerrar.emit();
  }
}
