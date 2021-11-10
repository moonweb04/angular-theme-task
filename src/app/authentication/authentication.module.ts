import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetComponent } from './forget/forget.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutAuthComponent } from '../layouts/layout-auth/layout-auth.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgetComponent, LayoutAuthComponent],
  // entryComponents: [
  //   LayoutAuthComponent
  // ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  
})
export class AuthenticationModule { }
