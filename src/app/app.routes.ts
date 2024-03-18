import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';

export const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'views', component:ViewProductComponent},
  {path:'customer',children:[
    {path:"signup", component:CustomerSignupComponent}
  ]}

];
