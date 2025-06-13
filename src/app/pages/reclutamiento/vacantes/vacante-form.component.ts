// vacante-form.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReclutamientoService, Vacante } from '../reclutamiento.service';
import { HeaderComponent } from "../../header/header.component";
import { SidebarComponent } from "../../sidebar/sidebar.component";

@Component({
    selector: 'app-vacante-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, HeaderComponent, SidebarComponent],
    templateUrl: './vacante-form.component.html',
    styleUrls: ['./vacante-form.component.css']
})
export class VacanteFormComponent implements OnInit {
    vacanteForm!: FormGroup;
    vacanteId: number | null = null;
    esEdicion = false;

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private reclutamientoService: ReclutamientoService
    ) { }

    ngOnInit(): void {
        this.vacanteForm = this.fb.group({
            titulo: ['', [Validators.required]],
            descripcion: ['', [Validators.required]],
            requisitos: ['', [Validators.required]],
            fechaInicio: ['', [Validators.required]],
            fechaFin: ['', [Validators.required]],
            area: ['', [Validators.required]],
            estado: ['Activa', [Validators.required]]
        });

        const idParam = this.route.snapshot.paramMap.get('id');
        if (idParam) {
            this.vacanteId = +idParam;
            this.esEdicion = true;
            this.reclutamientoService.getVacanteById(this.vacanteId).subscribe(vac => {
                if (vac) {
                    this.vacanteForm.patchValue({
                        titulo: vac.titulo,
                        descripcion: vac.descripcion,
                        requisitos: vac.requisitos,
                        fechaInicio: this.toInputDate(vac.fechaInicio),
                        fechaFin: this.toInputDate(vac.fechaFin),
                        area: vac.area,
                        estado: vac.estado
                    });
                }
            });
        }
    }

    private toInputDate(d: Date): string {
        const yyyy = d.getFullYear();
        const mm = ('0' + (d.getMonth() + 1)).slice(-2);
        const dd = ('0' + d.getDate()).slice(-2);
        return `${yyyy}-${mm}-${dd}`;
    }

    onSubmit(): void {
        if (this.vacanteForm.invalid) return;
        const formValue = this.vacanteForm.value;
        const vacProps: Vacante = {
            id: this.vacanteId ?? 0,
            titulo: formValue.titulo,
            descripcion: formValue.descripcion,
            requisitos: formValue.requisitos,
            fechaInicio: new Date(formValue.fechaInicio),
            fechaFin: new Date(formValue.fechaFin),
            area: formValue.area,
            estado: formValue.estado
        };

        if (this.esEdicion && this.vacanteId !== null) {
            vacProps.id = this.vacanteId;
            this.reclutamientoService.updateVacante(vacProps).subscribe(() => {
                this.router.navigate(['/vacantes']);
            });
        } else {
            this.reclutamientoService.createVacante(vacProps).subscribe(() => {
                this.router.navigate(['/vacantes']);
            });
        }
    }

    cancelar(): void {
        this.router.navigate(['/vacantes']);
    }
}
