import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AuthRoutingModule } from './auth-routing.module';
import { SinginComponent } from './singin/singin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'


@NgModule({
  declarations: [SinginComponent, SignupComponent, AuthLayoutComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
 
})
export class AuthModule { }
