import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
    private _firestoreService: AngularFirestore
  ) { }


  public async createMessage(message: any) {
    await this._firestoreService.collection('messages').add(message).then(
      (response) => {
      }
    );
  }

  public async getAllMessages() {
    const snapshot = await this._firestoreService.collection('messages').ref.get();
    return snapshot.docs.map(doc => doc.data());
  }
}
