import {Component, OnInit} from '@angular/core';
import {IUser} from '../../interfaces/User';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-chosen-user',
  templateUrl: './chosen-user.component.html',
  styleUrls: ['./chosen-user.component.css']
})
export class ChosenUserComponent implements OnInit {
  chosenUser: IUser;

  // chosenId: number;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
  }

  // ngOnInit(user: IUser): void {
  //   this.activatedRoute.params.subscribe(value => {
  //     console.log(value);
  //     // this.chosenId = +value.id;
  //     // this.chosenUser = null;
  //     this.userService.getUserById(this.chosenId).subscribe(value => {
  //     //   this.chosenUser = user;
  //     });
  getUserId(user: IUser): void {
    this.activatedRoute.params.subscribe(valueId => {
        console.log(valueId);

        this.userService.getUserById(valueId).subscribe(userr => {
            this.chosenUser = userr;

            // this.chosenId = +value.id;
            // this.chosenUser = null;
          }
        );
      }
    );
  }
}
