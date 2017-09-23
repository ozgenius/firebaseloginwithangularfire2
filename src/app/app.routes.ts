import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthGuard } from './auth.service';
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import {EmailComponent} from "./components/email/email.component";
import {MembersComponent} from "./components/members/members.component";
import {ResetpasswordComponent} from "./components/resetpassword/resetpassword.component";
import {LoginPhoneComponent} from "./components/login-phone/login-phone.component";

export const router: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login-email', component: EmailComponent },
  { path: 'reset', component: ResetpasswordComponent },
  { path: 'login-phone', component: LoginPhoneComponent },
  { path: 'members', component: MembersComponent, canActivate: [AuthGuard] }

]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
