import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {IUser} from '../../../interfaces/User';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: IUser;
  @Input()
  chosenUser: IUser;

  @Output()
  eventEmitter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  // choseUser(chosenUser: IUser): void
  // {
  //   this.eventEmitter.emit(chosenUser);
  // }
  choseUser(chosenUser: IUser): void
  {
    this.eventEmitter.emit(chosenUser);
  }
}
