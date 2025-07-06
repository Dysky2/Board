import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../../assets/angular-material/angular-material.module';
import { AppRoutingModule } from '../../app-routing.module';


@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    AppRoutingModule,
  ]
})
export class LoginModule { }
