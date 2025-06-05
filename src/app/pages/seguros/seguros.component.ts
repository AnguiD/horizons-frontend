import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
    selector: 'app-seguros',
    standalone: true,
    imports: [CommonModule, HeaderComponent, SidebarComponent],
    templateUrl: './seguros.component.html',
    styleUrls: ['./seguros.component.css']
})
export class SegurosComponent {
    contactosEmergencia = [
        { icono: '📞', titulo: 'Emergencias Médicas', valor: '911 / (55) 5555-1234' },
        { icono: '🏥', titulo: 'Hospital Preferente', valor: 'Hospital ABC Santa Fe' },
        { icono: '📋', titulo: 'Número de Póliza', valor: 'POL-2024-001234' }
    ];

    resumenSeguros = [
        { icono: '🏥', nombre: 'Seguro Médico', estado: 'Activo' },
        { icono: '🦷', nombre: 'Seguro Dental', estado: 'Activo' },
        { icono: '👁️', nombre: 'Seguro de Visión', estado: 'Pendiente' },
        { icono: '💼', nombre: 'Seguro de Vida', estado: 'Activo' }
    ];

    seguros = [
        {
            id: 1,
            tipo: 'Médico',
            icono: '🏥',
            nombre: 'Seguro Médico Mayor',
            proveedor: 'Seguros Monterrey',
            estado: 'Activo',
            politza: 'POL-2024-001234',
            vigencia: '01 Ene 2024 - 31 Dic 2024',
            sumaAsegurada: '$2,000,000 MXN',
            deducible: '$15,000 MXN',
            coberturas: [
                'Hospitalización',
                'Cirugías',
                'Consultas médicas',
                'Medicamentos',
                'Estudios de laboratorio',
                'Maternidad'
            ]
        },
        {
            id: 2,
            tipo: 'Vida',
            icono: '💼',
            nombre: 'Seguro de Vida',
            proveedor: 'MetLife México',
            estado: 'Activo',
            politza: 'VID-2024-005678',
            vigencia: '01 Ene 2024 - 31 Dic 2024',
            sumaAsegurada: '$1,500,000 MXN',
            beneficiarios: 2,
            coberturas: [
                'Muerte natural',
                'Muerte accidental',
                'Invalidez total',
                'Enfermedades graves'
            ]
        }
    ];

    viewPolicy(id: number) {
        alert(`Viendo póliza ${id}`);
    }

    downloadCard(id: number) {
        alert(`Descargando tarjeta del seguro ${id}`);
    }

    findProviders(id: number) {
        alert(`Buscando proveedores para seguro ${id}`);
    }

    manageBeneficiaries(id: number) {
        alert(`Gestionando beneficiarios del seguro ${id}`);
    }

    requestClaim(id: number) {
        alert(`Solicitando siniestro para seguro ${id}`);
    }

    secondaryAction(id: number, tipo: string) {
        if (tipo === 'Médico') {
            this.findProviders(id);
        } else {
            this.requestClaim(id);
        }
    }
}
