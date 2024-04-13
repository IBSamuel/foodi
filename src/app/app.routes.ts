import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';
import { CustomerSigninComponent } from './customer-signin/customer-signin.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'views', component:ViewProductComponent},
  {path:'customer',children:[
    {path:"signup", component:CustomerSignupComponent},
    {path:"signin", component:CustomerSigninComponent}
  ]},
  {path:'admin',children:[
    {path:"signup", component:AdminSignupComponent},
    {path:"signin", component:AdminSigninComponent},
    {path:"dashboard", component:AdminDashboardComponent}
  ]}

];
