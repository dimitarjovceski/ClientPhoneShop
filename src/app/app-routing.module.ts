import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutFinishComponent } from './checkout-finish/checkout-finish.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search/:searchTerm', component: HomeComponent},
  {path: 'category/:category', component: HomeComponent},
  {path: 'phone-detail/:id', component: PhoneDetailComponent},
  {path: 'cart-page', component: CartPageComponent},
  {path: 'checkout', component: CheckoutFinishComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
