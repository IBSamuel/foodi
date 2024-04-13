import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  dropArea: HTMLElement | null;
  button: HTMLButtonElement | null; // Change type to HTMLButtonElement
  input: HTMLInputElement | null;

  constructor() {
    this.dropArea = document.querySelector(".drop_box");
    this.button = this.dropArea?.querySelector("button") as HTMLButtonElement | null; // Explicit type assertion
    this.input = this.dropArea?.querySelector("input") as HTMLInputElement | null; // Explicit type assertion

    if (this.button && this.input) {
      this.button.onclick = () => {
        this.input?.click();
      };

      this.input.addEventListener("change", this.handleInputChange.bind(this));
    }
  }

  private handleInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files[0]) {
      const fileName = inputElement.files[0].name;
      const filedata = `
        <form action="" method="post">
          <div class="form">
            <h4>${fileName}</h4>
            <input type="email" placeholder="Enter email upload file">
            <button class="btn">Upload</button>
          </div>
        </form>`;
      const dropArea = document.querySelector('.drop_box');
      if (dropArea) {
        dropArea.innerHTML = filedata;
      }
    }
  }
}
