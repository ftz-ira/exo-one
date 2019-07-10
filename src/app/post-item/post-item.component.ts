import { Component, OnInit, Input, } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent {

  @Input() title: string;
  @Input() content: string;
  @Input() like: number;
  @Input() created_at: Date;
  @Input() id: number;

  constructor(private postService: PostService) {}

  onVote(value:string) :void{ 
     (value === 'up') ? this.like ++ : this.like --;
     
     this.postService.like(this);
  }

  onDeletePost() {
    this.postService.deletePost(this);
  }

}
