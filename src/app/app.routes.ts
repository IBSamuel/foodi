import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';
import { CustomerSigninComponent } from './customer-signin/customer-signin.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UploadComponent } from './upload/upload.component';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'views', component: ViewProductComponent },
  { path: 'menu', component: MenuComponent },
  {
    path: 'customer',
    children: [
      { path: 'signup', component: CustomerSignupComponent },
      { path: 'signin', component: CustomerSigninComponent }
    ]
  },
  { path: 'uploads', component: UploadComponent },
  {
    path: 'admin',
    children: [
      { path: 'signup', component: AdminSignupComponent },
      { path: 'signin', component: AdminSigninComponent },
      { path: 'dashboard', component: AdminDashboardComponent }
    ]
  }
];
