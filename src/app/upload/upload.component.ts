import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  constructor(public http: HttpClient, public service: ServiceService,public router :Router) { }
  foodName: string = '';
  foodAmount: string = '';
  numberOfPlates: string = '';
  foodId: string = '';
  foodIngredient: string = '';
  foodDescription: string = '';
  image1Data: string | null = null;
  image2Data: string | null = null;
  image3Data: string | null = null;

  submitForm() {
    const response = {
      foodName: this.foodName,
      foodAmount: this.foodAmount,
      numberOfPlates: this.numberOfPlates,
      foodId: this.foodId,
      foodIngredient: this.foodIngredient,
      foodDescription: this.foodDescription,
      image1Data: this.image1Data,
      image2Data: this.image2Data,
      image3Data: this.image3Data,
    };
    console.log('All Details:', response);
    this.http.post(`${this.service.backendUrl}/product.php`, response).subscribe(data => {
      console.log(data);
      alert('Image uploaded successfully');
      this.clearForm();
    });
    this.router.navigate(["/menu"]);
  }

  clearForm() {
    this.foodName = '';
    this.foodAmount = '';
    this.numberOfPlates = '';
    this.foodId = '';
    this.foodIngredient = '';
    this.foodDescription = '';
    this.image1Data = null;
    this.image2Data = null;
    this.image3Data = null;
  }

  onFileSelected(event: any, imageNumber: string) {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const base64Data = reader.result as string;
        switch (imageNumber) {
          case 'image1':
            this.image1Data = base64Data;
            break;
          case 'image2':
            this.image2Data = base64Data;
            break;
          case 'image3':
            this.image3Data = base64Data;
            break;
        }
      };
      reader.readAsDataURL(file);
    }
  }
}
