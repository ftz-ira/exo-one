import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // posts = [
  //   {
  //     "title": "",
  //     "content": "",
  //     "like": 0,
  //     "created_at": new Date()
  //   },
  //   {
  //     "title": "",
  //     "content": "",
  //     "like": 0,
  //     "created_at": new Date()
  //   },
  //   {
  //     "title": "",
  //     "content": "",
  //     "like": 0,
  //     "created_at": new Date()
  //   },
  // ];
  posts: Post[];

}
