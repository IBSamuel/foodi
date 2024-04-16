import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-signup.component.html',
  styleUrl: './admin-signup.component.css'
})
export class AdminSignupComponent {
  fullName: string = '';
  userName: string = '';
  email: string = '';
  password: string = '';

  signUp() {
    const adminInfo = {
      fullName: this.fullName,
      userName: this.userName,
      email: this.email,
      password: this.password
    };
    console.log('Admin Info:', adminInfo);
  }
}
