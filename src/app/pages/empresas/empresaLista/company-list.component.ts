import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { HeaderComponent } from "../../header/header.component";

interface Company {
  id: number;
  nombre: string;
  direccion: string;
  telefono: string;
  email: string;
}

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule, SidebarComponent, HeaderComponent],
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];

  constructor(private router: Router) {}

  ngOnInit() {

    this.companies = [
      { id: 1, nombre: 'Acme S.A.',    direccion: 'Av. Siempre Viva 123', telefono: '55-1234-5678', email: 'contacto@acme.com' },
      { id: 2, nombre: 'Globex Corp.', direccion: 'Calle Falsa 456',      telefono: '55-8765-4321', email: 'info@globex.com' },
      { id: 3, nombre: 'Initech',      direccion: 'Paseo de la Reforma 789', telefono: '55-1122-3344', email: 'ventas@initech.mx' }
    ];
  }

  goToCreate()      { this.router.navigate(['/empresas/crear']); }
  viewCompany(id: number)  { this.router.navigate(['/empresas', id]); }
  editCompany(id: number)  { this.router.navigate(['/empresas/editar', id]); }
  deleteCompany(id: number) {
    console.log(`Eliminar empresa con ID ${id}`);
    this.companies = this.companies.filter(e => e.id !== id);
  }
}

