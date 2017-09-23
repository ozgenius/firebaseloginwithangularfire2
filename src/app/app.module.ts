import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';


//angularfire2 import dosyaları
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AuthorizationService} from "./services/authorization.service";
import { LoginComponent } from './components/login/login.component';
import { EmailComponent } from './components/email/email.component';
import { SignupComponent } from './components/signup/signup.component';
import { MembersComponent } from './components/members/members.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { LoginPhoneComponent } from './components/login-phone/login-phone.component';
import {WindowService} from "./services/window.service";

//firebaseconfig
export const firebaseConfig = {
  apiKey: "AIzaSyCxxXe_RWo6WPW2ejzFhoaZqQAfuUInLRQ",
  authDomain: "fir-example-e5692.firebaseapp.com",
  databaseURL: "https://fir-example-e5692.firebaseio.com",
  storageBucket: "fir-example-e5692.appspot.com",
  messagingSenderId: "479029097404"
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    ResetpasswordComponent,
    LoginPhoneComponent
  ],
  imports: [
    routes,
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthorizationService,AuthGuard,WindowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
