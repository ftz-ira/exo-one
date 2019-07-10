import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../service/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.html',
  styleUrls: ['./post-list-component.scss']
})
export class PostListComponent implements OnInit {

  posts = [];
  postsSubscription: Subscription;

  constructor(private postService: PostService) { 
  }

  ngOnInit() {

    this.postsSubscription = this.postService.postsSubject.subscribe(
      (posts: Post[]) => { this.posts = posts}
    );
    
    this.postService.emitePostSubject();
  }

}
