import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ServiceService } from '../services/service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-signin',
  standalone: true,
  imports :[FormsModule,CommonModule,HttpClientModule,RouterLink],
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.css']
})
export class AdminSigninComponent {
  constructor(private http: HttpClient, private service: ServiceService,public router:Router) { }
  userName: string = '';
  password: string = '';
  errorMessage: string = ''; // Property to hold error message

  signIn() {
    const userDetails = {
      userName: this.userName,
      password: this.password
    };

    this.http.post(`${this.service.backendUrl}/fetchAdmin.php`, userDetails)
      .subscribe((data: any) => {
        console.log(data);
        if (data.message === "Login successful") {

          this.router.navigate(["/uploads"]);
        } else {
          this.errorMessage = "Invalid credentials";
        }
      }, (error) => {
        console.error('Error signing in:', error);
        this.errorMessage = "An error occurred"; // Set error message
      });
  }
}

