import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { HeaderComponent } from "../../header/header.component";
import { CompanyCreateComponent } from '../agregarEmpresa/company-create.component';
import { CompanyEditComponent, CompanyPayload } from '../editarEmpresa/company-edit.component'; // ¡IMPORTA el modelo!
import { CompanyDetailComponent } from '../detallesEmpresa/company-detail.component';

interface Company extends CompanyPayload {  // Hereda para claridad, pero básicamente son iguales
  id: number;
}

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    HeaderComponent,
    CompanyCreateComponent,
    CompanyEditComponent,
    CompanyDetailComponent
  ],
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent {
  companies: Company[] = [
    { id: 1, nombre: 'Acme S.A.', direccion: 'Av. Siempre Viva 123', telefono: '55-1234-5678', email: 'contacto@acme.com' },
    { id: 2, nombre: 'Globex Corp.', direccion: 'Calle Falsa 456', telefono: '55-8765-4321', email: 'info@globex.com' },
    { id: 3, nombre: 'Initech', direccion: 'Paseo de la Reforma 789', telefono: '55-1122-3344', email: 'ventas@initech.mx' }
  ];

  modalAbierto = false;
  modalEditAbierto = false;
  modalViewAbierto = false;
  empresaSeleccionada: Company | null = null;
  empresaDetalleSeleccionada: Company | null = null;

  abrirModal(): void { this.modalAbierto = true; }
  cerrarModal(): void { this.modalAbierto = false; }

  editCompany(id: number): void {
    const empresa = this.companies.find(e => e.id === id);
    if (empresa) {
      this.empresaSeleccionada = { ...empresa };
      this.modalEditAbierto = true;
    }
  }
  cerrarModalEdit(): void {
    this.modalEditAbierto = false;
    this.empresaSeleccionada = null;
  }

  actualizarEmpresa(empresaEditada: CompanyPayload) {
    if (empresaEditada.id) {
      this.companies = this.companies.map(e =>
        e.id === empresaEditada.id ? { ...e, ...empresaEditada } : e
      );
    }
    this.cerrarModalEdit();
  }

  viewCompany(id: number): void {
    const empresa = this.companies.find(e => e.id === id);
    if (empresa) {
      this.empresaDetalleSeleccionada = empresa;
      this.modalViewAbierto = true;
    }
  }

  cerrarModalView(): void {
    this.modalViewAbierto = false;
    this.empresaDetalleSeleccionada = null;
  }

  deleteCompany(id: number): void {
    const confirmed = window.confirm(`¿Estás seguro de que quieres eliminar la empresa ${id}?`);
    if (confirmed) {
      this.companies = this.companies.filter(e => e.id !== id);
    }
  }
}

