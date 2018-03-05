import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { FormsModule } from '@angular/forms';

var firebaseConfig = {
  apiKey: "AIzaSyDbebJpiLCYRFJlIaovhKx1WEFj01Etncw",
    authDomain: "firestore-f61c2.firebaseapp.com",
    databaseURL: "https://firestore-f61c2.firebaseio.com",
    projectId: "firestore-f61c2",
    storageBucket: "firestore-f61c2.appspot.com",
    messagingSenderId: "687308772707"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }