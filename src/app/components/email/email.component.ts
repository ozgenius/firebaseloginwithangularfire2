import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {fallIn, moveIn} from "../../router.animations";
import {AuthorizationService} from "../../services/authorization.service";
import {User} from "../../model";

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class EmailComponent implements OnInit {

  state: string = '';
  error: any;
  user:User;
  constructor(public authService:AuthorizationService,private router: Router) {
    this.authService.user.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl('/members');
      }
    });
  }


  onSubmit(formData) {
    if(formData.valid) {
        console.log(formData.value);
        this.user=formData.value;
        this.authService.loginEmailandPassword(this.user).then(
          (success) => {
            console.log(success);
            this.router.navigate(['/members'])
          }).catch(
          (err) => {
            console.log(err);
            this.error = err;
          })
    }
  }

  ngOnInit() {
  }

}
