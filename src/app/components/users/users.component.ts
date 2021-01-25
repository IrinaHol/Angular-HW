import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {UserService} from '../../services/user.service';
import {IUser} from '../../interfaces/User';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value);
  }
  getChosenUser(users: IUser[]): void {
    this.users = users;
  }
}
