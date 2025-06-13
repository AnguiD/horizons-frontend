// vacantes.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReclutamientoService, Vacante } from '../reclutamiento.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../header/header.component";
import { SidebarComponent } from "../../sidebar/sidebar.component";

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
                // ya se actualiza automáticamente el BehaviorSubject
            });
        }
    }

    exportarPDF(): void {
        this.reclutamientoService.exportVacantesPDF();
    }

    verAspirantes(vacId: number): void {
        this.router.navigate(['/aspirantes/seguimiento'], { queryParams: { vacanteId: vacId } });
    }
}
