import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SafeUrlPipe } from '../pipes/safe-url.pipe';

@Component({
  selector: 'app-nominas',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, SidebarComponent, SafeUrlPipe],
  templateUrl: './nominas.component.html',
  styleUrls: ['./nominas.component.css']
})
export class NominasComponent {
  selectedMonth = '';
  searchText = '';
  modalAbierto = false;
  pdfPreviewUrl: string | null = null;

  nominas = [
    { nombre: 'Recibo 2025-04', fecha: '2025-04-15', url: '/assets/NOMINA/82BEF83C-2C7A-4051-A854-551392655FA1.pdf' },
    { nombre: 'Recibo 2025-03', fecha: '2025-03-15', url: '/assets/NOMINA/82BEF83C-2C7A-4051-A854-551392655FA1.pdf' },
    { nombre: 'Recibo 2025-02', fecha: '2025-02-15', url: '/assets/NOMINA/82BEF83C-2C7A-4051-A854-551392655FA1.pdf' },
    { nombre: 'Recibo 2025-01', fecha: '2025-01-15', url: '/assets/NOMINA/82BEF83C-2C7A-4051-A854-551392655FA1.pdf' },
    { nombre: 'Recibo 2024-12', fecha: '2024-12-15', url: '/assets/NOMINA/82BEF83C-2C7A-4051-A854-551392655FA1.pdf' },
    { nombre: 'Recibo 2024-11', fecha: '2024-11-15', url: '/assets/NOMINA/82BEF83C-2C7A-4051-A854-551392655FA1.pdf' },
    { nombre: 'Recibo 2024-10', fecha: '2024-10-15', url: '/assets/NOMINA/82BEF83C-2C7A-4051-A854-551392655FA1.pdf' },
    { nombre: 'Recibo 2024-09', fecha: '2024-09-15', url: '/assets/NOMINA/82BEF83C-2C7A-4051-A854-551392655FA1.pdf' },
    { nombre: 'Recibo 2024-08', fecha: '2024-08-15', url: '/assets/NOMINA/82BEF83C-2C7A-4051-A854-551392655FA1.pdf' },
    { nombre: 'Recibo 2024-07', fecha: '2024-07-15', url: '/assets/NOMINA/82BEF83C-2C7A-4051-A854-551392655FA1.pdf' },
    { nombre: 'Recibo 2024-06', fecha: '2024-06-15', url: '/assets/NOMINA/82BEF83C-2C7A-4051-A854-551392655FA1.pdf' },
    { nombre: 'Recibo 2024-05', fecha: '2024-05-15', url: '/assets/NOMINA/82BEF83C-2C7A-4051-A854-551392655FA1.pdf' },
  ].sort((a, b) => b.fecha.localeCompare(a.fecha));

  get filteredNominas() {
    return this.nominas.filter(n =>
      (!this.selectedMonth || n.fecha.startsWith(this.selectedMonth)) &&
      (!this.searchText || n.nombre.toLowerCase().includes(this.searchText.toLowerCase()))
    );
  }

  abrirModal(nomina: any) {
    this.pdfPreviewUrl = nomina.url;
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
    this.pdfPreviewUrl = null;
  }
}
