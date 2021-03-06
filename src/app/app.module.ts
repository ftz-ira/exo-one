import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list-component';
import { PostItemComponent } from './post-item/post-item.component';
import { NewPostComponent } from './new-post/new-post.component';
import { NavComponent } from './nav/nav.component';

import { PostService } from './service/post.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'newPost', component: NewPostComponent },
  { path: 'home', component: PostListComponent },
  { path: '', component: PostListComponent },
  { path: '**', redirectTo: 'home'}
]

@NgModule({
 
 declarations: [
    NavComponent,
    NewPostComponent,
    AppComponent,
    PostListComponent,
    PostItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  

providers: [PostService,],
  bootstrap: [AppComponent]
})

export class AppModule { }
