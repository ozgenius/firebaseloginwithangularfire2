import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from "../../services/authorization.service";
import { Router } from '@angular/router';
import {moveIn} from "../../router.animations";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class LoginComponent {
  error: any;
  constructor(private authService:AuthorizationService,private router: Router) {
    this.authService.user.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl('/members');
      }
    });
  }
  loginFb(){
    this.authService.loginFb().then(
      (success) => {
        this.router.navigate(['/members']);
      }).catch(
      (err) => {
        this.error = err;
      })
  }
  loginAnonim(){
    this.authService.loginAnonim().then(
      (success) => {
        this.router.navigate(['/members']);
      }).catch(
      (err) => {
        this.error = err;
      })
  }
  loginGithub(){
    this.authService.loginGithub().then(
      (success) => {
        this.router.navigate(['/members']);
      }).catch(
      (err) => {
        this.error = err;
      })
  }
  loginGoogle(){
    this.authService.loginGoogle().then(
      (success) => {
        this.router.navigate(['/members']);
      }).catch(
      (err) => {
        this.error = err;
      })
  }

}
