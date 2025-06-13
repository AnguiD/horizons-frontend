// editar-usuario.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

interface Usuario {
    id: number;
    nombre: string;
    telefono: string;
    correo: string;
    puestoActual: string;
    salario: string;
    equipo: string;
}

@Component({
    selector: 'app-editar-usuario',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule, HeaderComponent, SidebarComponent],
    templateUrl: './editarUsuarios.component.html',
    styleUrls: ['./editarUsuarios.component.css']
})
export class EditarUsuarioComponent implements OnInit {
    usuarios: Usuario[] = [
        { id: 1, nombre: 'Juan Pérez Gómez', telefono: 'No disponible', correo: 'taco@example.com', puestoActual: 'No disponible', salario: '$15000.5 MXN', equipo: 'NS-2025-001' },
        { id: 2, nombre: 'Ana Suarez Lopez', telefono: 'No disponible', correo: 'tacote@example.com', puestoActual: 'No disponible', salario: '$15000.5 MXN', equipo: 'NS-2025-002' },
        { id: 3, nombre: 'Javier Macotela Medina', telefono: 'No disponible', correo: 'chapo@badak.com', puestoActual: 'No disponible', salario: '$18000 MXN', equipo: 'AJH-5689' },
        { id: 4, nombre: 'Javier Macotela Medina', telefono: 'No disponible', correo: 'ariel@gmail.com', puestoActual: 'No disponible', salario: '$18000 MXN', equipo: 'SN123456789' },
        { id: 5, nombre: 'Juan Pérez Gómez', telefono: 'No disponible', correo: 'suavitel@gmail.com', puestoActual: 'No disponible', salario: '$15000 MXN', equipo: 'SN123456789' }
    ];

    user: Usuario = {
        id: 0,
        nombre: '',
        telefono: '',
        correo: '',
        puestoActual: '',
        salario: '',
        equipo: ''
    };

    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        const idParam = this.route.snapshot.paramMap.get('id');
        const id = idParam ? parseInt(idParam, 10) : null;
        if (id !== null) {
            const found = this.usuarios.find(u => u.id === id);
            if (found) {
                this.user = { ...found };
            }
        }
    }

    onSave() {
        alert('Usuario actualizado:\n' + JSON.stringify(this.user, null, 2));
        this.router.navigate(['/usuarios']);
    }

    onCancel() {
        this.router.navigate(['/usuarios']);
    }
}