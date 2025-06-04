import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-nominas',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, SidebarComponent],
  templateUrl: './nominas.component.html',
  styleUrls: ['./nominas.component.css']
})
export class NominasComponent {
  selectedMonth = '';
  searchText = '';

  nominas = [
    { nombre: 'Recibo 2025-04', fecha: '2025-04-15' },
    { nombre: 'Recibo 2025-03', fecha: '2025-03-15' },
    { nombre: 'Recibo 2025-02', fecha: '2025-02-15' },
    { nombre: 'Recibo 2025-01', fecha: '2025-01-15' },
    { nombre: 'Recibo 2024-12', fecha: '2024-12-15' },
    { nombre: 'Recibo 2024-11', fecha: '2024-11-15' },
    { nombre: 'Recibo 2024-10', fecha: '2024-10-15' },
    { nombre: 'Recibo 2024-09', fecha: '2024-09-15' },
    { nombre: 'Recibo 2024-08', fecha: '2024-08-15' },
    { nombre: 'Recibo 2024-07', fecha: '2024-07-15' },
    { nombre: 'Recibo 2024-06', fecha: '2024-06-15' },
    { nombre: 'Recibo 2024-05', fecha: '2024-05-15' }
  ].sort((a, b) => b.fecha.localeCompare(a.fecha));

  get filteredNominas() {
    return this.nominas.filter(n =>
      (!this.selectedMonth || n.fecha.startsWith(this.selectedMonth)) &&
      (!this.searchText || n.nombre.toLowerCase().includes(this.searchText.toLowerCase()))
    );
  }

  verPDF(nomina: any) {
    alert(`Vista previa: ${nomina.nombre}`);
  }
}

