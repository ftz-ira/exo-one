import { Component } from '@angular/core';
import { Post } from './post';

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
  this.post1 = new Post();
  this.post1.title = "titre 1"
  this.post1.content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at congue ante. Curabitur bibendum, ligula non rhoncus molestie"
  
  this.post2 = new Post();
  this.post2.title = "titre 2"
  this.post2.content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at congue ante. Curabitur bibendum, ligula non rhoncus molestie"
 
  this.post3 = new Post();
  this.post3.title = "titre "
  this.post2.content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at congue ante. Curabitur bibendum, ligula non rhoncus molestie"
 
  this.posts.push(this.post1,this.post2,this.post3);
}
  

}
