import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

export interface Vacante {
    id: number;
    titulo: string;
    descripcion: string;
    requisitos: string;
    fechaInicio: Date;
    fechaFin: Date;
    area: string;
    estado: 'Activa' | 'Cerrada';
}

export interface Aspirante {
    id: number;
    vacanteId: number;
    nombre: string;
    correo: string;
    telefono: string;
    cvUrl: string;
    estadoPostulacion: 'Recibida' | 'En Revisión' | 'Aceptada' | 'Rechazada';
    habilidades: string[];
    experiencia: string;
}

@Injectable({ providedIn: 'root' })
export class ReclutamientoService {
    private vacantesSubject = new BehaviorSubject<Vacante[]>([
        {
            id: 1,
            titulo: 'Desarrollador Angular',
            descripcion: 'Se busca desarrollador con 2 años de experiencia en Angular.',
            requisitos: 'Angular, TypeScript, HTML, CSS',
            fechaInicio: new Date('2024-06-01'),
            fechaFin: new Date('2024-06-30'),
            area: 'Desarrollo',
            estado: 'Activa'
        },
        {
            id: 2,
            titulo: 'Analista QA',
            descripcion: 'Encargado de pruebas funcionales y de integración.',
            requisitos: 'Testing manual, automatización con Selenium',
            fechaInicio: new Date('2024-05-15'),
            fechaFin: new Date('2024-06-15'),
            area: 'Calidad',
            estado: 'Activa'
        },
        {
            id: 3,
            titulo: 'Diseñador UX/UI',
            descripcion: 'Diseñar interfaces y experiencias de usuario para plataforma web.',
            requisitos: 'Figma, Sketch, Adobe XD',
            fechaInicio: new Date('2024-07-01'),
            fechaFin: new Date('2024-07-31'),
            area: 'Diseño',
            estado: 'Activa'
        }
    ]);

    private aspirantes: Aspirante[] = [
        {
            id: 1,
            vacanteId: 1,
            nombre: 'María López',
            correo: 'maria.lopez@example.com',
            telefono: '555-123-4567',
            cvUrl: 'https://example.com/cv-maria-lopez.pdf',
            estadoPostulacion: 'En Revisión',
            habilidades: ['Angular', 'TypeScript', 'RxJS'],
            experiencia: '3 años en Empresa X'
        },
        {
            id: 2,
            vacanteId: 1,
            nombre: 'Juan Pérez',
            correo: 'juan.perez@example.com',
            telefono: '555-987-6543',
            cvUrl: 'https://example.com/cv-juan-perez.pdf',
            estadoPostulacion: 'Recibida',
            habilidades: ['Angular', 'JavaScript', 'HTML/CSS'],
            experiencia: '2 años en Startup Y'
        },
        {
            id: 3,
            vacanteId: 2,
            nombre: 'Ana Gómez',
            correo: 'ana.gomez@example.com',
            telefono: '555-222-3333',
            cvUrl: 'https://example.com/cv-ana-gomez.pdf',
            estadoPostulacion: 'Recibida',
            habilidades: ['Selenium', 'Java', 'JMeter'],
            experiencia: '4 años en Empresa Z'
        }
    ];

    getVacantes(): Observable<Vacante[]> {
        return this.vacantesSubject.asObservable();
    }

    getVacanteById(id: number): Observable<Vacante | undefined> {
        const vac = this.vacantesSubject.value.find(v => v.id === id);
        return of(vac);
    }

    createVacante(vacante: Vacante): Observable<void> {
        const current = this.vacantesSubject.value;
        vacante.id = current.length ? Math.max(...current.map(v => v.id)) + 1 : 1;
        this.vacantesSubject.next([...current, vacante]);
        return of();
    }

    updateVacante(vacante: Vacante): Observable<void> {
        const list = this.vacantesSubject.value.map(v => v.id === vacante.id ? vacante : v);
        this.vacantesSubject.next(list);
        return of();
    }

    deleteVacante(id: number): Observable<void> {
        const list = this.vacantesSubject.value.filter(v => v.id !== id);
        this.vacantesSubject.next(list);
        return of();
    }

    getAspirantesByVacante(vacanteId: number): Observable<Aspirante[]> {
        return of(this.aspirantes.filter(a => a.vacanteId === vacanteId));
    }

    registerAspirante(aspirante: Aspirante): Observable<void> {
        aspirante.id = this.aspirantes.length
            ? Math.max(...this.aspirantes.map(a => a.id)) + 1
            : 1;
        this.aspirantes.push(aspirante);
        return of();
    }

    updateAspiranteEstado(id: number, estado: 'Aceptada' | 'Rechazada' | 'En Revisión'): Observable<void> {
        const idx = this.aspirantes.findIndex(a => a.id === id);
        if (idx !== -1) {
            this.aspirantes[idx].estadoPostulacion = estado;
        }
        return of();
    }

    filterAspirantes(criteria: {
        experiencia?: string;
        habilidad?: string;
        estado?: string;
    }): Observable<Aspirante[]> {
        let result = this.aspirantes;
        if (criteria.experiencia) {
            result = result.filter(a => a.experiencia.includes(criteria.experiencia!));
        }
        if (criteria.habilidad) {
            result = result.filter(a => a.habilidades.includes(criteria.habilidad!));
        }
        if (criteria.estado) {
            result = result.filter(a => a.estadoPostulacion === criteria.estado);
        }
        return of(result);
    }

    exportVacantesPDF(): void {
        alert('Exportando vacantes a PDF...');
    }

    exportAspirantesExcel(): void {
        alert('Exportando aspirantes a Excel...');
    }
}