import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule ,Routes } from '@angular/router';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';



import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AddskillComponent } from './addskill/addskill.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { AllskillsComponent } from './allskills/allskills.component';
import { MydirectiveDirective } from './mydirective.directive';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { DetailsComponent } from './details/details.component';
import { UserprofileComponent } from './userprofile/userprofile.component';



const routes:Routes=[
  {path:'' ,redirectTo:'home' ,pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path: 'addskill',component:AddskillComponent},
  {path: 'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'myskills',component:MyskillsComponent},
  {path: 'allskills',component:AllskillsComponent},
  {path:'myprofile',component:MyprofileComponent},
  {path:'details/:id',component:DetailsComponent},
  {path:'userprofile',component:UserprofileComponent}
  
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddskillComponent,
    LoginComponent,
    RegisterComponent,
    AllskillsComponent,
    MydirectiveDirective,
    MyskillsComponent,
    MyprofileComponent,
    DetailsComponent,
    UserprofileComponent
  
    
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
