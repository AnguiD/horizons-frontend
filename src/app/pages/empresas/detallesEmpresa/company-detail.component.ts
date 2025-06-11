import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { HeaderComponent } from "../../header/header.component";

interface Company {
  nombre: string;
  direccion: string;
  telefono: string;
  email: string;
}

@Component({
  selector: 'app-company-detail',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  id!: number;
  empresa: Company = { nombre: '', direccion: '', telefono: '', email: '' };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id')!;

    this.empresa = {
      nombre: 'Demo Corp.',
      direccion: 'Demo 123',
      telefono: '55-2222-3333',
      email: 'demo@demo.com'
    };
  }

  goBack() {
    this.router.navigate(['/empresas']);
  }
}

