import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPost} from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
private baseUrl = 'https://jsonplaceholder.typicode.com';
  constructor(private httpClient: HttpClient) { }

  getAllPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(`${this.baseUrl}/posts`);
  }
}
