// usuarios.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

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
    selector: 'app-usuarios',
    standalone: true,
    imports: [CommonModule, HeaderComponent, SidebarComponent],
    templateUrl: './usuarios.component.html',
    styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
    usuarios: Usuario[] = [
        {
            id: 1,
            nombre: 'Juan Pérez Gómez',
            telefono: 'No disponible',
            correo: 'taco@example.com',
            puestoActual: 'No disponible',
            salario: '$15000.5 MXN',
            equipo: 'NS-2025-001'
        },
        {
            id: 2,
            nombre: 'Ana Suarez Lopez',
            telefono: 'No disponible',
            correo: 'tacote@example.com',
            puestoActual: 'No disponible',
            salario: '$15000.5 MXN',
            equipo: 'NS-2025-002'
        },
        {
            id: 3,
            nombre: 'Javier Macotela Medina',
            telefono: 'No disponible',
            correo: 'chapo@badak.com',
            puestoActual: 'No disponible',
            salario: '$18000 MXN',
            equipo: 'AJH-5689'
        },
        {
            id: 4,
            nombre: 'Javier Macotela Medina',
            telefono: 'No disponible',
            correo: 'ariel@gmail.com',
            puestoActual: 'No disponible',
            salario: '$18000 MXN',
            equipo: 'SN123456789'
        },
        {
            id: 5,
            nombre: 'Juan Pérez Gómez',
            telefono: 'No disponible',
            correo: 'suavitel@gmail.com',
            puestoActual: 'No disponible',
            salario: '$15000 MXN',
            equipo: 'SN123456789'
        }
    ];

    constructor(private router: Router) { }

    inviteUser(): void {
        this.router.navigate(['/invitarUsuario']);
    }

    editUser(id: number): void {
        this.router.navigate(['/editarUsuario', id]);
    }

    deleteUser(id: number): void {
        this.usuarios = this.usuarios.filter(user => user.id !== id);
        console.log(`Usuario con ID ${id} eliminado.`);
    }

    exportarUsuarios() {
        const doc = new jsPDF();
        const title = 'Listado de Usuarios';

        doc.setFontSize(18);
        doc.setTextColor(238, 114, 2);
        doc.setFont('helvetica', 'bold');
        doc.text(title, 14, 15);
        doc.setTextColor(0, 0, 0);
        doc.setFont('helvetica', 'normal');

        const headers = [['ID', 'Nombre', 'Teléfono', 'Correo', 'Puesto Actual', 'Salario', 'Equipo']];

        const data = this.usuarios.map(u => [
            u.id,
            u.nombre,
            u.telefono,
            u.correo,
            u.puestoActual,
            u.salario,
            u.equipo
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

        doc.setFontSize(10);
        doc.text('Horizons 1.0.0 - Gestión de Usuarios', 14, doc.internal.pageSize.height - 10);

        doc.save('UsuariosBadak.pdf');
    }

}