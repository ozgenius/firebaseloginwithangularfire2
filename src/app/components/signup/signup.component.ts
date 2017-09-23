import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User} from "../../model";
import {AuthorizationService} from "../../services/authorization.service";
import {fallIn, moveIn} from "../../router.animations";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class SignupComponent implements OnInit {
  state: string = '';
  error: any;
  user:User;
  constructor(private authService:AuthorizationService,private router: Router) { }

  ngOnInit() {
  }
  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.user=formData.value;
      this.authService.signup(this.user).then(
        (success) => {
          console.log(success);
          this.router.navigate(['/login'])
        }).catch(
        (err) => {
          console.log(err);
          this.error = err;
        })
    }
  }

}
