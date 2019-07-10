import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() created_at: Date;
  @Input() like: number;

  constructor() {

   }

  ngOnInit() {
  }

  vote(value:string) :void{ 
    (value === 'up') ? this.like += 1 : this.like -= 1;
    console.log(this.like);
  }

}
