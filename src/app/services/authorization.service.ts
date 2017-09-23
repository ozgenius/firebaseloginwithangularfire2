import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';
import {Observable} from "rxjs/Observable";
import {User} from "../model";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";

@Injectable()
export class AuthorizationService {
  user: Observable<firebase.User>;
  userr:User;
  users: FirebaseListObservable<User[]> = null;
  constructor(public afAuth: AngularFireAuth,private db: AngularFireDatabase) {
    this.user=afAuth.authState;
  }
  loginGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  loginEmailandPassword(user:User){

    return this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
  }
  loginFb(){
    return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }
  loginGithub(){
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  }
  loginAnonim(){
    return this.afAuth.auth.signInAnonymously();
  }
  signup(user:User){

    return this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password).then(
      (auth)=>{
        auth.sendEmailVerification().then(
          (res)=>{
            console.log(res);
          }
        ).catch(
          (error)=>{
            console.log(error);
          }
        )
      }
    ).catch((error)=>{
      console.log(error);
    });

  }
  saveUsers(){
    let item:any = {
      name:"adem",
      email:"adem@gmail.com"
    }
    this.db.list("/users")
    this.users.push(item);
  }
  reset(user){
    return this.afAuth.auth.sendPasswordResetEmail(user.email);
  }
  logout(){
    return this.afAuth.auth.signOut();
  }
}
