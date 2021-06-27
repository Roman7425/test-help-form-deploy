import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../services/database.service';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-help-form',
  templateUrl: './help-form.component.html',
  styleUrls: ['./help-form.component.scss']
})
export class HelpFormComponent implements OnInit {

  public helpForm: FormGroup;
  public currentUser: string = '';

  constructor(
    private _firebaseService: FirebaseService,
    private _databaseService: DatabaseService
  ) { }

  ngOnInit(): void {
    this.helpForm = new FormGroup({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern("^[0-9]*$")]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required)
    });

    this.helpForm.get('phone').valueChanges.subscribe(
      (value) => {
      }
    );

    this._firebaseService.currentUser.subscribe(
      (response) => {
        if (response) {
          this.currentUser = response;
        }
      }
    );
  }

  public saveMessage(): void {
    let message = {};
    message['name'] = this.helpForm.get('name').value;
    message['phone'] = this.helpForm.get('phone').value;
    message['email'] = this.helpForm.get('email').value;
    message['message'] = this.helpForm.get('message').value;

    this._databaseService.createMessage(message);

    this.helpForm.reset();
  }

}
