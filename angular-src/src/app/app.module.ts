import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule   } from '@angular/common/http';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import { ValidateService } from './services/validate.service';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGaurd } from './gaurds/auth.gaurd';

const appRoutes =  [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent}, 
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGaurd]},
  {path: 'profile', component: ProfileComponent, canActivate:[AuthGaurd]},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: ()=>{
          return localStorage.getItem('id_token');
        },
        allowedDomains:['localhost']
        
      },
      
    })
  ],
  providers: [ValidateService,
    AuthGaurd
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
