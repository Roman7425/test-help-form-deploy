import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseService } from '../services/firebase.service';
import { LogComponent } from './log/log.component';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  public currentUser: string = '';

  constructor(
    private _matDialog: MatDialog,
    private _firebase: FirebaseService
  ) { }

  ngOnInit(): void {

    this._firebase.currentUser.subscribe(
      (response) => {
        if (response) {
          this.currentUser = response;
        }
      }
    );
  }

  public login(): void {
    const dialog = this._matDialog.open(LogComponent, {
      panelClass: 'log.component',
      disableClose: true,
      data: 'login'
    });
  }

  public logout(): void {
    this._firebase.logout();
    this.currentUser = null;
  }

  public reg(): void {
    const dialog = this._matDialog.open(LogComponent, {
      panelClass: 'log.component',
      disableClose: true,
      data: 'reg'
    });
  }

}
