import {Component, Input, OnInit} from '@angular/core';
import {IPost} from '../../../interfaces/post.interface';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-chosen-post',
  templateUrl: './chosen-post.component.html',
  styleUrls: ['./chosen-post.component.css']
})
export class ChosenPostComponent implements OnInit {
  @Input()
  post: IPost;

  constructor(private router: Router, activatedRouter: ActivatedRoute) {
    activatedRouter.params.subscribe(() => {
      this.post = router.getCurrentNavigation().extras.state as IPost;
    });
  }

  ngOnInit(): void {
  }
  closePost(): void {
   this.post = null;
  }
}
