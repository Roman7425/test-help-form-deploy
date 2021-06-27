import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { MatDialogModule } from "@angular/material/dialog";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { CdkTableModule} from '@angular/cdk/table';
import { DataSource } from '@angular/cdk/table';
import { MatTableModule } from "@angular/material/table";

import { AppComponent } from './app.component';
import { HelpFormComponent } from './help-form/help-form.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { FirebaseService } from './services/firebase.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogComponent } from './main-header/log/log.component';
import { DatabaseService } from './services/database.service';
import { ListMessagesComponent } from './list-messages/list-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    HelpFormComponent,
    MainHeaderComponent,
    LogComponent,
    ListMessagesComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCsWwLInpjEGkbAd1rtlQDeyk3dRReVSJY",
      authDomain: "project-71708.firebaseapp.com",
      databaseURL: "https://project-71708-default-rtdb.firebaseio.com",
      projectId: "project-71708",
      storageBucket: "project-71708.appspot.com",
      messagingSenderId: "1089644411347",
      appId: "1:1089644411347:web:53ead188c280eefd201726"
    }),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CdkTableModule,
    MatTableModule
  ],
  providers: [
    FirebaseService,
    DatabaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
