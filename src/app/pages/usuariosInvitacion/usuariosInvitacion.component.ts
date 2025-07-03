import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // 👈 Importa Router
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

interface UsuarioInvitado {
    correo: string;
    id_rol: number;
    nombre: string;
    apPaterno: string;
    apMaterno: string;
    salarioBase: number;
    ultimoPorcentajeAumento: number;
    fechaInicioTrabajo: string;
    numeroSerie: string;
    marca: string;
    especificaciones: string;
    rfc: string;
    curp: string;
    fechaNacimiento: string;
    gradoEstudios: string;
    ultimoTrabajo: string;
    telefono: string;
    direccion: string;
    puestoActual: string;
    fechaActualizacionSalario: string;
    estatus: 'Activo' | 'Inactivo' | 'Pendiente';
    recursos: string;
}

@Component({
    selector: 'app-invitar-usuario',
    standalone: true,
    imports: [CommonModule, FormsModule, HeaderComponent, SidebarComponent],
    templateUrl: './usuariosInvitacion.component.html',
    styleUrls: ['./usuariosInvitacion.component.css']
})
export class UsuariosInvitacionComponent {

    constructor(private router: Router) { } // 👈 Inyecta Router

    roles = [
        { id: 1, nombre: 'Super Admin' },
        { id: 2, nombre: 'Owner' },
        { id: 3, nombre: 'Administrador' },
        { id: 4, nombre: 'Colaborador' }
    ];

    user: UsuarioInvitado = {
        correo: '',
        id_rol: 0,
        nombre: '',
        apPaterno: '',
        apMaterno: '',
        salarioBase: 0,
        ultimoPorcentajeAumento: 0,
        fechaInicioTrabajo: '',
        numeroSerie: '',
        marca: '',
        especificaciones: '',
        rfc: '',
        curp: '',
        fechaNacimiento: '',
        gradoEstudios: '',
        ultimoTrabajo: '',
        telefono: '',
        direccion: '',
        puestoActual: '',
        fechaActualizacionSalario: '',
        estatus: 'Activo',
        recursos: ''
    };

    onSubmit() {
        alert('Datos enviados:\n' + JSON.stringify(this.user, null, 2));

        this.router.navigate(['/usuarios']);
    }

    cancelar() {
        this.router.navigate(['/usuarios']);
    }
}

