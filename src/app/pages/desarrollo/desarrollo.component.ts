import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-desarrollo',
  imports: [SidebarComponent, HeaderComponent, CommonModule],
  templateUrl: './desarrollo.component.html',
  styleUrl: './desarrollo.component.css'
})
export class DesarrolloComponent {
  cursoSeleccionado: any = null;

  cursos = [
    {
      id: 1,
      titulo: 'Liderazgo Transformacional',
      duracion: '5 horas',
      nivel: 'Intermedio',
      descripcion: 'Desarrolla habilidades de liderazgo centrado en la transformación de equipos y organizaciones.'
    },
    {
      id: 2,
      titulo: 'Gestión del Tiempo',
      duracion: '2 horas',
      nivel: 'Básico',
      descripcion: 'Aprende a organizar tus actividades, establecer prioridades y cumplir metas de manera eficiente.'
    },
    {
      id: 3,
      titulo: 'Innovación y Creatividad',
      duracion: '6 horas',
      nivel: 'Avanzado',
      descripcion: 'Fomenta tu pensamiento creativo y aplica metodologías innovadoras para resolver problemas.'
    }
  ];

  mostrarDetalles(id: number) {
    this.cursoSeleccionado = this.cursos.find(c => c.id === id);
  }

  cerrarModal() {
    this.cursoSeleccionado = null;
  }
}

