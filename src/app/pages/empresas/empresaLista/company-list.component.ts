import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { HeaderComponent } from "../../header/header.component";
import { CompanyCreateComponent } from '../agregarEmpresa/company-create.component';

interface Company {
  id: number;
  nombre: string;
  direccion: string;
  telefono: string;
  email: string;
}

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    HeaderComponent,
    CompanyCreateComponent
  ],
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent {
  companies: Company[] = [
    { id: 1, nombre: 'Acme S.A.',    direccion: 'Av. Siempre Viva 123', telefono: '55-1234-5678', email: 'contacto@acme.com' },
    { id: 2, nombre: 'Globex Corp.', direccion: 'Calle Falsa 456',      telefono: '55-8765-4321', email: 'info@globex.com' },
    { id: 3, nombre: 'Initech',      direccion: 'Paseo de la Reforma 789', telefono: '55-1122-3344', email: 'ventas@initech.mx' }
  ];

  modalAbierto = false;

  abrirModal(): void {
    this.modalAbierto = true;
  }

  cerrarModal(): void {
    this.modalAbierto = false;
  }

  viewCompany(id: number): void {
    alert(`Ver detalles de la empresa ${id}`);
  }

  editCompany(id: number): void {
    alert(`Editar empresa ${id}`);
  }

  deleteCompany(id: number): void {
    const confirmed = window.confirm(`¿Estás seguro de que quieres eliminar la empresa ${id}?`);
    if (confirmed) {
      this.companies = this.companies.filter(e => e.id !== id);
    }
  }
}
