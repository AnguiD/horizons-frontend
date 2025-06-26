import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { ReclutamientoService, Aspirante } from '../reclutamiento.service';
import { HeaderComponent } from "../../header/header.component";
import { SidebarComponent } from "../../sidebar/sidebar.component";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
    selector: 'app-seguimiento-aplicaciones',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, HeaderComponent, SidebarComponent],
    templateUrl: './seguimiento-aplicaciones.component.html',
    styleUrls: ['./seguimiento-aplicaciones.component.css']
})
export class SeguimientoAplicacionesComponent implements OnInit {
    formularioFiltro!: FormGroup;
    aspirantesFiltrados: Aspirante[] = [];

    constructor(
        private fb: FormBuilder,
        private reclutamientoService: ReclutamientoService
    ) { }

    ngOnInit(): void {
        this.formularioFiltro = this.fb.group({
            experiencia: [''],
            habilidad: [''],
            estado: ['']
        });
        this.aplicarFiltros();
    }

    aplicarFiltros(): void {
        const criteria = this.formularioFiltro.value;
        this.reclutamientoService
            .filterAspirantes(criteria)
            .subscribe(lista => (this.aspirantesFiltrados = lista));
    }

    aceptarAspirante(id: number): void {
        this.reclutamientoService.updateAspiranteEstado(id, 'Aceptada').subscribe(() => {
            this.aplicarFiltros();
        });
    }

    enRevisionAspirante(id: number): void {
        this.reclutamientoService.updateAspiranteEstado(id, 'En Revisión').subscribe(() => {
            this.aplicarFiltros();
        });
    }


    rechazarAspirante(id: number): void {
        this.reclutamientoService.updateAspiranteEstado(id, 'Rechazada').subscribe(() => {
            this.aplicarFiltros();
        });
    }

    exportarPDF(): void {
        const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
        const title = 'Seguimiento de Aspirantes';

        doc.setFontSize(18);
        doc.text(title, 14, 15);

        const headers = [[
            'ID', 'Vacante', 'Nombre', 'Correo', 'Teléfono',
            'Estado', 'Experiencia', 'Habilidades', 'CV'
        ]];

        const data = this.aspirantesFiltrados.map(a => ([
            a.id,
            a.vacante,
            a.nombre,
            a.correo,
            a.telefono,
            a.estadoPostulacion,
            a.experiencia,
            a.habilidades.join(', '),
        ]));

        const links: { rowIndex: number; columnIndex: number; url: string }[] = [];

        this.aspirantesFiltrados.forEach((a, index) => {
            links.push({
                rowIndex: index,
                columnIndex: 8,
                url: a.cvUrl
            });
        });

        autoTable(doc, {
            head: headers,
            body: data,
            startY: 25,
            styles: {
                fontSize: 8,
                overflow: 'linebreak',
            },
            headStyles: {
                fillColor: [238, 114, 2],
                textColor: 255,
            },
            columnStyles: {
                0: { cellWidth: 10 },
                1: { cellWidth: 30 },
                2: { cellWidth: 30 },
                3: { cellWidth: 40 },
                4: { cellWidth: 25 },
                5: { cellWidth: 25 },
                6: { cellWidth: 40 },
                7: { cellWidth: 40 },
                8: { cellWidth: 15 },
            },
            didDrawCell: (data) => {
                if (data.section === 'body' && data.column.index === 8) {
                    const link = links.find(
                        l => l.rowIndex === data.row.index && l.columnIndex === data.column.index
                    );
                    if (link) {
                        doc.setTextColor(0, 0, 255);
                        doc.textWithLink('Ver CV', data.cell.x + 2, data.cell.y + 4, { url: link.url });
                        doc.setTextColor(0, 0, 0);
                    }
                }
            }
        });

        doc.setFontSize(10);
        doc.text('Horizons 1.0.0 - Seguimiento de Aspirantes', 14, doc.internal.pageSize.height - 10);
        doc.save('aspirantes.pdf');
    }
}
