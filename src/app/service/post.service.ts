
import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/post';
import * as firebase from 'firebase';
import { del } from 'selenium-webdriver/http';

@Injectable()
export class PostService implements OnInit, OnDestroy {

    ngOnDestroy(): void {
        this.postsSubject.unsubscribe();
    }
    ngOnInit(): void {
       this.getPosts();
    }

    posts= [];
    postsSubject = new Subject<Post[]>();

    constructor() {
        this.getPosts();
     }

    getPosts() {
        firebase.database().ref('/posts').on(
            'value', (data: firebase.database.DataSnapshot)=> { 
                this.posts = data.val() ? data.val() : [];
                this.emitePostSubject();
            });
    }

    savePost() {
        firebase.database().ref('/posts').set(this.posts).then(
            (success) => {
                console.log('save post methode');
            }, (error) => {
                console.log('erreur de sauvegarde => ', error);
            }
        );
    }

    newPost(post: Post) {
        this.posts.push(post);
        this.savePost();
        this.emitePostSubject;
    }

    deletePost(post: Post) {

        const deletedPost = this.posts.findIndex(
            (postEl) => {
                if(postEl === post) {
                  return true;
                }
              }
        );
        
        this.posts.splice(deletedPost, 1);
        this.savePost();
        this.emitePostSubject()
    }

    like(post) {
        this.posts[post.id].like = post.like;
        this.savePost();
        this.emitePostSubject();
    }

    emitePostSubject() {
        this.postsSubject.next(this.posts);
     }
    

}