import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-soporte',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, SidebarComponent],
  templateUrl: './soporte.component.html',
  styleUrls: ['./soporte.component.css']
})
export class SoporteComponent {
  nuevoTicket = {
    asunto: '',
    descripcion: ''
  };

  busqueda = '';
  tickets = [
    { id: 1, asunto: 'Pantalla rota', descripcion: 'La laptop tiene la pantalla quebrada', estado: 'Pendiente' },
    { id: 2, asunto: 'Error de red', descripcion: 'No hay conexión en mi oficina', estado: 'En proceso' }
  ];

  enviarTicket() {
    if (this.nuevoTicket.asunto && this.nuevoTicket.descripcion) {
      this.tickets.push({
        id: this.tickets.length + 1,
        asunto: this.nuevoTicket.asunto,
        descripcion: this.nuevoTicket.descripcion,
        estado: 'Pendiente'
      });
      this.nuevoTicket = { asunto: '', descripcion: '' };
    }
  }

  get ticketsFiltrados() {
    return this.tickets.filter(t =>
      t.asunto.toLowerCase().includes(this.busqueda.toLowerCase()) ||
      t.descripcion.toLowerCase().includes(this.busqueda.toLowerCase())
    );
  }
}
