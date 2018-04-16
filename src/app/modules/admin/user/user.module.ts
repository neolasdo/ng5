import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {UserRoutingModule} from './user-routing.module';
import { RequestPasswordComponent } from './request-password/request-password.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [LoginComponent, RequestPasswordComponent]
})
export class UserModule { }
