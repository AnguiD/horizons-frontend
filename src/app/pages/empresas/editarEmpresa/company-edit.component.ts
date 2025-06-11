import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  selector: 'app-company-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {
  empresa: CompanyPayload = { nombre: '', direccion: '', telefono: '', email: '' };
  id!: number;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    // Datos de ejemplo precargados
    this.empresa = {
      nombre: 'Demo Corp.',
      direccion: 'Demo 123',
      telefono: '55-2222-3333',
      email: 'demo@demo.com'
    };
  }

  update() {
    console.log(`Actualizando empresa ${this.id}:`, this.empresa);
    this.router.navigate(['/empresas']);
  }

  cancel() {
    this.router.navigate(['/empresas']);
  }
}
