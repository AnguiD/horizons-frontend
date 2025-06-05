// invitar-usuario.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

interface UsuarioInvitado {
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
export class UsuariosInvitacionComponent{
    user: UsuarioInvitado = {
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
    }
}
