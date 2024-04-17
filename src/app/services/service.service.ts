import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  backendUrl = "http://localhost/foodi";
  constructor() {
  }
  
}
