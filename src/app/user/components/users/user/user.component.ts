import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../../interfaces/user';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
@Input()
user: IUser;

constructor(private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }
  goTo(): void {
    this.router.navigate([this.user.id], {relativeTo: this.activatedRouter, state: this.user});
  }

}
