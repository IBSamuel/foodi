import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './customer-signup.component.html',
  styleUrl: './customer-signup.component.css'
})
export class CustomerSignupComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';

  signUp() {
    const customerInfo = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    };
    console.log('Customer Info:', customerInfo);
  }
}
