import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent, HeaderComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  showModalPersonal = false;
  showModalContacto = false;

  formPersonal = {
    nombre: 'Javier Macotela Medina',
    rfc: '',
    curp: '',
    fechaNacimiento: ''
  };

  formContacto = {
    telefono: '',
    correo: 'javiermedina@gmail.com'
  };

  openModal(tipo: 'personal' | 'contacto') {
    if (tipo === 'personal') this.showModalPersonal = true;
    if (tipo === 'contacto') this.showModalContacto = true;
  }

  closeModal() {
    this.showModalPersonal = false;
    this.showModalContacto = false;
  }

  guardarPersonal() {
    this.closeModal();
  }

  guardarContacto() {
    this.closeModal();
  }
}

