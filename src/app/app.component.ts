import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title = 'project';
  public logUser: boolean = false;

  constructor(
    private _firebaseService: FirebaseService
  ) {}

  ngOnInit(): void {
    this._firebaseService.currentUser.subscribe(
      (response) => {
        if (response) {
          this.logUser = true;
        } else {
          this.logUser = false;
        }
      }
    );
  }
}
