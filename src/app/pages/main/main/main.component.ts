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

  constructor(private PS: CurrentPostService, private store: Store) {
  }

  ngOnChanges() {
    this.updatePosts = _.cloneDeep(this.posts);
  }

  getPostById(id:number):void {
    const post: Posts = this.updatePosts.filter((elem) => elem.id === id)[0]
    this.PS.setPost(post)
    this.store.dispatch(add({post:post}))
  }
}
