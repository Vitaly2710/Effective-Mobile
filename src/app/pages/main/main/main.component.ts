import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {Posts} from "../../../store/interfaces";
import {ChangeDetection} from "@angular/cli/lib/config/workspace-schema";
import * as _ from 'lodash';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

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
  constructor(private activateRoute: ActivatedRoute) {
  }

  ngOnChanges() {
    this.updatePosts = _.cloneDeep(this.posts);
  }

  getPostById(id:number):void {
    this.currentPost.emit(this.updatePosts.find((elem) => elem.id === id))
  }
}
