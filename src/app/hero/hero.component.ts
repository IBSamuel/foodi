import { Component } from '@angular/core';
import { AdvertComponent } from '../advert/advert.component';
import { CategoriesComponent } from '../categories/categories.component';



@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [AdvertComponent,CategoriesComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
