import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products/products.component';
import { WelcomeComponent } from './misc/welcome/welcome.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {path:"products", component:ProductsComponent, canActivate:[AuthGuard]},
  {path:"welcome", component:WelcomeComponent,canActivate:[AuthGuard]},
  {path:"login",component:LoginComponent},
  {path:"", redirectTo:"welcome",pathMatch:"full"},
  {path:"**", redirectTo:"welcome"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
