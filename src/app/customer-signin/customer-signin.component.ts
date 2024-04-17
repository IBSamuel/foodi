import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-customer-signin',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './customer-signin.component.html',
  styleUrl: './customer-signin.component.css'
})
export class CustomerSigninComponent {
  email: string = '';
  password: string = '';

  constructor(public http: HttpClient, public service: ServiceService) { }

  signIn() {
    const userData = {
      email: this.email,
      password: this.password
    };
    console.log('User Data:', userData);
    this.http.post(`${this.service.backendUrl}/users.php`, userData).subscribe(data=>{
      console.log(data);
    });
  }
}
