import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpClientXsrfModule } from '@angular/common/http'; // Import HttpClientXsrfModule
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FormsModule, HttpClientModule,NavbarComponent,CommonModule,HttpClientXsrfModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  products: any[] = [];

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.http.get<any[]>('http://localhost/foodi/fetchProducts.php')
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
