import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthorizationService} from "../../services/authorization.service";
import {fallIn, moveIn, moveInLeft} from "../../router.animations";
import {User} from "../../model";
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFireDatabase} from "angularfire2/database";

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class MembersComponent implements OnInit {
  name: any="adem";
  state: string = '';
  userr:User;
  constructor(private db:AngularFireDatabase,private authService:AuthorizationService,private router: Router, private af:AngularFireAuth) {

  }
  logout() {
    this.authService.logout();
    console.log('logged out');
    this.router.navigateByUrl('/login');
  }
  ngOnInit() {
    console.log(this.af.auth.currentUser.email)
    this.name=this.af.auth.currentUser.email;
    const items = this.db.list('/items');
    items.push({ name: "adem" });

  }

}
