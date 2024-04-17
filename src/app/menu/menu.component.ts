import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FormsModule, HttpClientModule, NavbarComponent, CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  products: any[] = [];

  constructor(public http: HttpClient,public service:ServiceService) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.http.get<any[]>(`${this.service.backendUrl}/fetchProducts.php`)
      .subscribe(
        (response) => {
          this.products = response;
          console.log(this.products);
        },
        (error) => {
          console.error('Error fetching products:', error);
        }
      );
  }
}
