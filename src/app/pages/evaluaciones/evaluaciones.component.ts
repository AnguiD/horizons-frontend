// evaluaciones.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

interface Resumen {
  promedio: string;
  completadas: number;
  pendientes: number;
  cumplimiento: string;
}

interface Evaluacion {
  id: number;
  titulo: string;
  estado: 'Pendiente' | 'Completada' | 'Vencida';
  evaluador?: string;
  fechaLimite?: Date;
  fecha?: Date;
  tipo: string;
  progreso?: number;
  calificacion?: string;
  prioridad?: string;
}

interface Metrica {
  nombre: string;
  puntuacion: string;
}

interface Proxima {
  titulo: string;
  fecha: Date;
}

@Component({
  selector: 'app-evaluaciones',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SidebarComponent
  ],
  templateUrl: './evaluaciones.component.html',
  styleUrls: ['./evaluaciones.component.css']
})
export class EvaluacionesComponent {
  resumen: Resumen = {
    promedio: '4.2',
    completadas: 12,
    pendientes: 3,
    cumplimiento: '85%'
  };

  evaluacionesRecientes: Evaluacion[] = [
    {
      id: 1,
      titulo: 'Evaluación de Desempeño Q4 2023',
      estado: 'Pendiente',
      evaluador: 'María González',
      fechaLimite: new Date('2024-01-31'),
      tipo: '360°',
      progreso: 60
    },
    {
      id: 2,
      titulo: 'Evaluación de Competencias',
      estado: 'Completada',
      evaluador: 'Carlos Ruiz',
      fecha: new Date('2023-12-15'),
      tipo: 'Rendimiento',
      calificacion: '4.5/5.0'
    },
    {
      id: 3,
      titulo: 'Autoevaluación Anual',
      estado: 'Vencida',
      tipo: 'Autoevaluación',
      fechaLimite: new Date('2023-12-20'),
      progreso: 25,
      prioridad: 'Alta'
    }
  ];

  metricas: Metrica[] = [
    { nombre: 'Liderazgo', puntuacion: '4.3' },
    { nombre: 'Comunicación', puntuacion: '4.5' },
    { nombre: 'Trabajo en Equipo', puntuacion: '4.7' },
    { nombre: 'Innovación', puntuacion: '4.0' },
    { nombre: 'Resultados', puntuacion: '4.2' }
  ];

  proximasEvaluaciones: Proxima[] = [];

  continueEvaluation(id: number) {
    alert(`Continuando evaluación ${id}...`);
  }

  viewDetails(id: number) {
    alert(`Viendo detalles de evaluación ${id}`);
  }

  viewResults(id: number) {
    alert(`Viendo resultados de evaluación ${id}`);
  }

  downloadReport(id: number) {
    alert(`Descargando reporte de evaluación ${id}`);
  }

  startEvaluation(id: number) {
    alert(`Iniciando evaluación ${id}...`);
  }

  requestExtension(id: number) {
    alert(`Solicitando extensión para evaluación ${id}`);
  }
}
