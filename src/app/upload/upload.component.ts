import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  constructor(public http: HttpClient, public service: ServiceService) { }
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
    this.http.post(`${this.service.backendUrl}/product.php`, response).subscribe(data=>{
      console.log(data);

    })
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
