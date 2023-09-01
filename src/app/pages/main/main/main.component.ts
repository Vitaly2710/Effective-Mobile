import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import {Posts} from "../../../store/interfaces";
import * as _ from 'lodash';
import {CurrentPostService} from "../../../services/currentPost.service";
import {Store} from "@ngrx/store";
import {add} from "../../../store/actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnChanges{
  @Input() posts: Posts[] = [];
  @Output() addNew = new EventEmitter();
  @Output() currentPost:EventEmitter<Posts> = new EventEmitter()

  updatePosts: Posts[] = [];

  auth = false

  constructor(private PS: CurrentPostService, private store: Store, private router: Router) {
  }

  ngOnChanges() {
    this.updatePosts = _.cloneDeep(this.posts);
    this.auth = Boolean(localStorage.getItem('auth'));
  }

  getPostById(id:number):void {
    const post: Posts = this.updatePosts.filter((elem) => elem.id === id)[0]
    this.PS.setPost(post)
    this.store.dispatch(add({post:post}))
  }

  getOut () {
    localStorage.setItem('auth', 'false')
    this.auth = false;
    this.router.navigate(['/login'])
  }
}
