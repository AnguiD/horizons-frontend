import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Company {
  id?: number;
  nombre: string;
  direccion: string;
  telefono: string;
  email: string;
}

@Component({
  selector: 'company-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent {
  @Input() empresa: Company | null = null;
  @Output() cerrar = new EventEmitter<void>();

  cerrarModal() {
    this.cerrar.emit();
  }
}
