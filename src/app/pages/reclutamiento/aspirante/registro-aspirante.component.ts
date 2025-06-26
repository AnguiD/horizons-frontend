import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReclutamientoService, Aspirante } from '../reclutamiento.service';
import { HeaderComponent } from "../../header/header.component";
import { SidebarComponent } from "../../sidebar/sidebar.component";

@Component({
    selector: 'app-registro-aspirante',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, HeaderComponent, SidebarComponent],
    templateUrl: './registro-aspirante.component.html',
    styleUrls: ['./registro-aspirante.component.css']
})
export class RegistroAspiranteComponent implements OnInit {
    aspiranteForm!: FormGroup;
    vacante!: string;

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private reclutamientoService: ReclutamientoService
    ) { }

    ngOnInit(): void {
        this.vacante = this.route.snapshot.paramMap.get('vacante')!;
        this.aspiranteForm = this.fb.group({
            nombre: ['', [Validators.required]],
            correo: ['', [Validators.required, Validators.email]],
            telefono: ['', [Validators.required]],
            experiencia: ['', [Validators.required]],
            habilidades: ['', [Validators.required]],
            cvUrl: ['', [Validators.required]]
        });
    }

    onSubmit(): void {
        if (this.aspiranteForm.invalid) return;
        const formValue = this.aspiranteForm.value;
        const nuevoAspirante: Aspirante = {
            id: 0,
            vacante: this.vacante,
            nombre: formValue.nombre,
            correo: formValue.correo,
            telefono: formValue.telefono,
            experiencia: formValue.experiencia,
            habilidades: formValue.habilidades.split(',').map((h: string) => h.trim()),
            cvUrl: formValue.cvUrl,
            estadoPostulacion: 'Recibida'
        };
        this.reclutamientoService.registerAspirante(nuevoAspirante).subscribe(() => {
            alert('Registro exitoso. ¡Gracias por postular!');
            this.router.navigate(['/vacantes']);
        });
    }

    cancelar(): void {
        this.router.navigate(['/vacantes']);
    }
}