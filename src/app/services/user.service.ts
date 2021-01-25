import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../interfaces/User';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this.url);
  }
  getUserById(id): Observable<IUser> {
    return this.httpClient.get<IUser>(`${this.url}${id}`);
  }
}
