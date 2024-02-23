import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  public popularCategoryCardArray:any[] = []
ngOnInit(){
  this.popularCategoryCardArray = [
    {
      name: "Main Dish",
      NumberOfDish: '86 dishes',
      image: 'https://img.freepik.com/free-photo/delicious-burguer-isolated-white-background_125540-3368.jpg?w=740&t=st=1704903582~exp=1704904182~hmac=f0371b7a033f2ce3f93c69da1ee81f1d7ef0bcf2f414fcf35c6a03b326bbf8ee',
    },
    {
      name: "Brake Fast",
      NumberOfDish: '12 break',
      image: 'https://img.freepik.com/free-photo/dessert-fruit-cake-with-black-coffee_144627-6128.jpg?w=826&t=st=1704903489~exp=1704904089~hmac=276f9f52caa2ff9b45b06a54eb4fae6d33c27415139199753dce28e787bb8ca8',
    },
    {
      name: "Dessert",
      NumberOfDish: '48 dessert',
      image: 'https://img.freepik.com/free-photo/cupcake-with-grated-chocolate_144627-9000.jpg?w=826&t=st=1704903423~exp=1704904023~hmac=d8dec95539dea6764aa4e3380781a9cc0082156342cff9fe4d09ec86f8c1b463',
    },
    {
      name: "Browse All",
      NumberOfDish: '255 items',
      image: 'https://img.freepik.com/free-photo/front-view-fruit-cocktails-with-fresh-cherries-orange-slicec-ice-cooling-white-drink-juice-cocktail-fruit-color_140725-24800.jpg?w=826&t=st=1704903642~exp=1704904242~hmac=959a4c4877f016ae03f097e0e4db19920a9a2001544d5140357abda60a8c3933',
    }
  ];
}
}
