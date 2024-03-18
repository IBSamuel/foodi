import { Component } from '@angular/core';
import { AdvertComponent } from '../advert/advert.component';
import { CategoriesComponent } from '../categories/categories.component';
import { TetimonialsComponent } from '../tetimonials/tetimonials.component';
import { StandoutdishesComponent } from '../standoutdishes/standoutdishes.component';
import { OurStoryComponent } from '../our-story/our-story.component';



@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [AdvertComponent,CategoriesComponent,TetimonialsComponent,StandoutdishesComponent,OurStoryComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
