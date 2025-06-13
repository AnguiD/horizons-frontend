import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { ReclutamientoService, Aspirante } from '../reclutamiento.service';
import { HeaderComponent } from "../../header/header.component";
import { SidebarComponent } from "../../sidebar/sidebar.component";

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

    rechazarAspirante(id: number): void {
        this.reclutamientoService.updateAspiranteEstado(id, 'Rechazada').subscribe(() => {
            this.aplicarFiltros();
        });
    }

    exportarExcel(): void {
        this.reclutamientoService.exportAspirantesExcel();
    }
}
