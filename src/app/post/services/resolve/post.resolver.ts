import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {IPost} from '../../interfaces/post.interface';
import {PostsService} from '../posts.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<IPost[]> {

  constructor(private postService: PostsService) {
  }
resolve(): Observable<IPost[]> | Promise<IPost[]> | IPost[] {
    return this.postService.getAllPosts();
}

}

