import {Component, Input, OnInit} from '@angular/core';
import {IPost} from '../../../interfaces/post.interface';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: IPost;

  chosenPost: IPost;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  getFromChosenPost(post): void {
    this.router.navigate([post.id], {relativeTo: this.activatedRoute, state: post});
  }

  closePost(): void {
    this.chosenPost = null;
  }
  ngOnInit(): void {
  }

}
