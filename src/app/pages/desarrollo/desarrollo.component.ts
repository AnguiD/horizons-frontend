import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-desarrollo',
  imports: [SidebarComponent, HeaderComponent],
  templateUrl: './desarrollo.component.html',
  styleUrl: './desarrollo.component.css'
})
export class DesarrolloComponent {}
