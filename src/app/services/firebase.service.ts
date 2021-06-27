import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject, Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  public currentUser: BehaviorSubject<string> = new BehaviorSubject('');
  public isLogged: boolean = false;

  constructor(
    private _firebaseAuth: AngularFireAuth
  ) { }

  public async singin(email: string, password: string): Promise<any> {
    await this._firebaseAuth.signInWithEmailAndPassword(email, password).then(
      (response) => {
        this.isLogged = true;
        localStorage.setItem('user', JSON.stringify(response.user));
        this.currentUser.next(response.user.email);
      },
      (error) => {}
    );
  }

  public async singup(email: string, password: string) {
    await this._firebaseAuth.createUserWithEmailAndPassword(email, password).then(
      (response) => {
        this.isLogged = true;
        localStorage.setItem('user', JSON.stringify(response.user));
        this.currentUser.next(response.user.email);
      }
    );
  }

  public logout() {
    this._firebaseAuth.signOut();
    localStorage.removeItem('user');
    this.currentUser.next('');
  }
}
