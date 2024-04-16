import { Component } from '@angular/core';
import { AdminSideNavbarComponent } from '../admin-side-navbar/admin-side-navbar.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [AdminSideNavbarComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

}
