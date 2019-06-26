import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';

@NgModule({
 
 declarations: [
    AppComponent,
    PostListComponentComponent,
    PostListItemComponent
  ],
  imports: [
    BrowserModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
