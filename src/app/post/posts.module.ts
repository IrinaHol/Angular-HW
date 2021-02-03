import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/posts/post/post.component';
import { ChosenPostComponent } from './components/posts/chosen-post/chosen-post.component';
import { HttpClientModule} from '@angular/common/http';
import {PostsService} from './services/posts.service';
import {PostResolver} from './services/resolve/post.resolver';


@NgModule({
  declarations: [PostsComponent, PostComponent, ChosenPostComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule
  ],
  providers: [PostsService,  PostResolver]
})
export class PostsModule { }
