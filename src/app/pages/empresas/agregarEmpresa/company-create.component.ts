import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { HeaderComponent } from "../../header/header.component";

interface CompanyPayload {
  nombre: string;
  direccion: string;
  telefono: string;
  email: string;
}

@Component({
  selector: 'app-company-create',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.css']
})
export class CompanyCreateComponent {
  empresa: CompanyPayload = {
    nombre: 'Ejemplo S.A.',
    direccion: 'Av. Demo 100',
    telefono: '55-0000-1111',
    email: 'contacto@ejemplo.com'
  };

  constructor(private router: Router) {}

  save() {
    console.log('Creando empresa:', this.empresa);
    this.router.navigate(['/empresas']);
  }

  cancel() {
    this.router.navigate(['/empresas']);
  }
}
