import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'Nosotros', component: AboutComponent},
    { path: 'login', component: LoginComponent},
    { path: 'registerUser', component: RegisterUserComponent},
    { path: 'contact', component: ContactComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
