import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../models/post';
import { PostService } from '../service/post.service';
import { Router } from '@angular/router';

@Component({
selector: 'new-post-component',
templateUrl: './new-post.component.html',
styleUrls: ['./new-post.component.scss']
})

export class NewPostComponent implements OnInit {
    
    postForm: FormGroup;

constructor(private postService: PostService, private formBuilder: FormBuilder, private router: Router) {
}

ngOnInit(){
    this.intiForm();
}
intiForm() {
    this.postForm = this.formBuilder.group( {
        title: ['', Validators.required],
        content: ['', Validators.minLength(3)]
    });
}

onSavePost(){
 const title = this.postForm.get('title').value;
 const content = this.postForm.get('content').value;

 const post = new Post();
 post.title = title;
 post.content = content;

 this.postService.newPost(post);
 this.router.navigate(['/home']);
}


}