import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SafeUrlPipe } from '../pipes/safe-url.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ayuda',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SidebarComponent, SafeUrlPipe],
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.css']
})
export class AyudaComponent {
  modalAbierto = false;
  pdfPreviewUrl: string | null = null;
  manualUrl = '/assets/Manual/manual-usuario.pdf';

  constructor(private router: Router) {}

  abrirModal() {
    this.pdfPreviewUrl = this.manualUrl;
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
    this.pdfPreviewUrl = null;
  }

  irASoporte() {
    this.router.navigate(['/empleado/soporte']);
  }
}

