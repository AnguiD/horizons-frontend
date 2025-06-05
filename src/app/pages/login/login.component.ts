import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  entrar() {
    this.router.navigate(['/dashboard']);
  }

  irAContacto() {
    this.router.navigate(['/contact']);
  }
}
