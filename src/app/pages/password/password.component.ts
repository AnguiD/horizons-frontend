// recuperar-password.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-password',
  standalone: true,
  imports: [],
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class RecuperarPasswordComponent {
  constructor(private router: Router) {}

  sendRecoveryLink(email: string) {
    if (!email) {
      console.warn('El correo es requerido');
      return;
    }
    console.log(`Enviando enlace de recuperación a ${email}`);
    this.router.navigate(['/login']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
