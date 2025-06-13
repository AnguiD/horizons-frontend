// solicitudes-recibidas.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

interface SolicitudRecibida {
  id: number;
  empleado: string;
  tipo: string;
  fechaInicio: Date;
  fechaFin: Date;
  detalle: string;
  estado: 'Pendiente' | 'Aceptada' | 'Rechazada';
}

@Component({
  selector: 'app-solicitudes-recibidas',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SidebarComponent],
  templateUrl: './solicitudesRecibidas.component.html',
  styleUrls: ['./solicitudesRecibidas.component.css']
})
export class SolicitudesRecibidasComponent {
  solicitudesRecibidas: SolicitudRecibida[] = [
    {
      id: 1,
      empleado: 'Luis Martínez',
      tipo: 'Vacaciones',
      fechaInicio: new Date('2024-07-15'),
      fechaFin: new Date('2024-07-25'),
      detalle: 'Solicita vacaciones familiares',
      estado: 'Pendiente'
    },
    {
      id: 2,
      empleado: 'Ana López',
      tipo: 'Permiso Médico',
      fechaInicio: new Date('2024-06-05'),
      fechaFin: new Date('2024-06-06'),
      detalle: 'Cita médica programada',
      estado: 'Pendiente'
    },
    {
      id: 3,
      empleado: 'Carlos Ruiz',
      tipo: 'Capacitación',
      fechaInicio: new Date('2024-08-01'),
      fechaFin: new Date('2024-08-03'),
      detalle: 'Curso de liderazgo',
      estado: 'Pendiente'
    }
  ];

  acceptRequest(id: number): void {
    const idx = this.solicitudesRecibidas.findIndex(r => r.id === id);
    if (idx !== -1) {
      this.solicitudesRecibidas[idx].estado = 'Aceptada';
      alert(`Solicitud ID ${id} aceptada.`);
      this.removeFromPending(id);
    }
  }

  rejectRequest(id: number): void {
    const idx = this.solicitudesRecibidas.findIndex(r => r.id === id);
    if (idx !== -1) {
      this.solicitudesRecibidas[idx].estado = 'Rechazada';
      alert(`Solicitud ID ${id} rechazada.`);
      this.removeFromPending(id);
    }
  }

  private removeFromPending(id: number): void {
    this.solicitudesRecibidas = this.solicitudesRecibidas.filter(r => r.id !== id);
  }
}

