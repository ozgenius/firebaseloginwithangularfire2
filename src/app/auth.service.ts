import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthGuard implements CanActivate {
  user: Observable<firebase.User>;
  constructor(private auth: AngularFireAuth, private router: Router) {
    this.user = auth.authState;
  }

  canActivate(): Observable<boolean> {

    return this.auth.authState
      .take(1)
      .map(authState => !!authState)
      .do(auth => !auth ? this.router.navigate(['/login']) : true);
  }


}
