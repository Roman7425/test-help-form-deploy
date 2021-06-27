import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {

  public logForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _firebaseService: FirebaseService,
    private _matDialog: MatDialogRef<LogComponent>
  ) { }

  ngOnInit(): void {
    this.logForm = new FormGroup({
      logEmail: new FormControl('', [Validators.required, Validators.email]),
      logPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  public async login() {
    if (this.data === 'login') {
      await this._firebaseService.singin(this.logForm.get('logEmail').value, this.logForm.get('logPassword').value).then(
        (response) => {
          this._matDialog.close();
        },
        (error) => { }
      );
    }

    if (this.data === 'reg') {
      await this._firebaseService.singup(this.logForm.get('logEmail').value, this.logForm.get('logPassword').value).then(
        (response) => {
          this._matDialog.close();
        },
        (error) => { }
      );
    }
  }

}
