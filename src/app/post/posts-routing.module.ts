import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsComponent} from './components/posts/posts.component';
import {PostResolver} from './services/resolve/post.resolver';
import {ChosenPostComponent} from './components/posts/chosen-post/chosen-post.component';

const routes: Routes = [
  {path: '', component: PostsComponent, resolve: {postData: PostResolver}, children: [
      {path: ':id', component: ChosenPostComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
