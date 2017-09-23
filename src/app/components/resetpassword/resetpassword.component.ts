import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from "../../services/authorization.service";
import {User} from "../../model";

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  public message: any;
  user:User;
  constructor(private authService:AuthorizationService) { }

  ngOnInit() {
  }
  onSubmit(formData) {
    if(formData.valid) {
      console.log('Submission worked');
      this.user=formData.value;
      this.authService.reset(this.user)
        .then( (response) => {
          console.log('Sent successfully');
          this.message = 'Check your email for reset link';
        })
        .catch( (error) => {
          this.message = error;
          console.log(error);
        })
    }
  }
}
