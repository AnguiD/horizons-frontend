// vacantes.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReclutamientoService, Vacante } from '../reclutamiento.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../header/header.component";
import { SidebarComponent } from "../../sidebar/sidebar.component";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
    selector: 'app-vacantes',
    standalone: true,
    imports: [CommonModule, HeaderComponent, SidebarComponent],
    templateUrl: './vacantes.component.html',
    styleUrls: ['./vacantes.component.css']
})
export class VacantesComponent implements OnInit {
    vacantes: Vacante[] = [];

    constructor(
        private reclutamientoService: ReclutamientoService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.reclutamientoService.getVacantes().subscribe(vs => this.vacantes = vs);
    }

    nuevoVacante(): void {
        this.router.navigate(['/vacantes/nuevo']);
    }

    editarVacante(id: number): void {
        this.router.navigate(['/vacantes/editar', id]);
    }

    eliminarVacante(id: number): void {
        if (confirm(`¿Desea eliminar la vacante ID ${id}?`)) {
            this.reclutamientoService.deleteVacante(id).subscribe(() => {
                this.vacantes = this.vacantes.filter(v => v.id !== id);
                alert('Vacante eliminada correctamente');
            });
        }
    }

    exportarPDF(): void {
        const doc = new jsPDF();
        const title = 'Listado de Vacantes';


        doc.setFontSize(18);
        doc.text(title, 14, 15);

        const headers = [['ID', 'Título', 'Área', 'Descripción', 'Requisitos', 'Fecha Inicio', 'Fecha Fin', 'Estado']];

        const data = this.vacantes.map(v => [
            v.id,
            v.titulo,
            v.area,
            v.descripcion,
            v.requisitos,
            this.formatFecha(v.fechaInicio),
            this.formatFecha(v.fechaFin),
            v.estado
        ]);

        autoTable(doc, {
            head: headers,
            body: data,
            startY: 25,
            styles: {
                cellPadding: 3,
                fontSize: 9,
            },
            headStyles: {
                fillColor: [238, 114, 2],
                textColor: [255, 255, 255],
            },
        });

        // Pie de página
        doc.setFontSize(10);
        doc.text('Horizons 1.0.0 - Gestión de Vacantes', 14, doc.internal.pageSize.height - 10);

        doc.save('vacantes.pdf');
    }

    private formatFecha(fecha: Date | string): string {
        const f = new Date(fecha);
        return f.toLocaleDateString('es-MX', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
    }

    verAspirantes(vacId: number): void {
        this.router.navigate(['/aspirantes/seguimiento'], { queryParams: { vacanteId: vacId } });
    }
}
