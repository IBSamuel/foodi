import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../services/service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-signup',
  standalone: true,
  imports: [FormsModule, HttpClientModule,RouterLink],
  templateUrl: './admin-signup.component.html',
  styleUrl: './admin-signup.component.css'
})
export class AdminSignupComponent {
  constructor(public http: HttpClient, public service: ServiceService) { }

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
    this.http.post(`${this.service.backendUrl}/admin.php`, adminInfo).subscribe(data=>{
      console.log(data);
    });
  }
}
