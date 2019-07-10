import { Component } from '@angular/core';
import { Post } from './models/post';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
public post1: Post;
public post2: Post;
public post3: Post;

public posts: Array<Post> = [];

constructor() {
  var firebaseConfig = {
    apiKey: "AIzaSyDpSWHm7P0m3TmVwav1HUS9eLoRV118Tcs",
    authDomain: "angular-bibliotheque-87bfc.firebaseapp.com",
    databaseURL: "https://angular-bibliotheque-87bfc.firebaseio.com",
    projectId: "angular-bibliotheque-87bfc",
    storageBucket: "angular-bibliotheque-87bfc.appspot.com",
    messagingSenderId: "883259554274",
    appId: "1:883259554274:web:ba75167870c67dc1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}
  

}
