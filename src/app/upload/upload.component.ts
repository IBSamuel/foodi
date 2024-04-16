import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports:[FormsModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {
  foodName: string = '';
  foodAmount: string = '';
  numberOfPlates: string = '';
  foodId: string = '';
  foodIngredient: string = '';
  foodDescription: string = '';
  image1: File | null = null; // For image 1
  image2: File | null = null; // For image 2
  image3: File | null = null; // For image 3

  submitForm() {
    const response = {
      foodName: this.foodName,
      foodAmount: this.foodAmount,
      numberOfPlates: this.numberOfPlates,
      foodId: this.foodId,
      foodIngredient: this.foodIngredient,
      foodDescription: this.foodDescription,
      image1: this.image1 ? this.image1.name : null,
      image2: this.image2 ? this.image2.name : null,
      image3: this.image3 ? this.image3.name : null
    };

    // Push all details into a single array
    const allDetails: any[] = [response];

    // // Log all three images
    // if (this.image1) {
    //   allDetails.push(this.image1);
    // }
    // if (this.image2) {
    //   allDetails.push(this.image2);
    // }
    // if (this.image3) {
    //   allDetails.push(this.image3);
    // }

    console.log('All Details:', allDetails);
  }

  onFileSelected(event: any, imageNumber: string) {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      switch (imageNumber) {
        case 'image1':
          this.image1 = file;
          break;
        case 'image2':
          this.image2 = file;
          break;
        case 'image3':
          this.image3 = file;
          break;
        // Add cases for additional images if needed
      }
    }
  }
}
