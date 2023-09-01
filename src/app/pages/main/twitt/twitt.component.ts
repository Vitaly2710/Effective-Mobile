import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {Posts} from "../../../store/interfaces";
import {startPost} from "../../../shared/config";
import {CurrentPostService} from "../../../services/currentPost.service";
import {select, Store} from "@ngrx/store";
import {PostStore} from "../../../store/reducers";
import {data} from "../../../store/selectors";
import * as _ from 'lodash';

@Component({
  selector: 'app-twitt',
  templateUrl: './twitt.component.html',
  styleUrls: ['./twitt.component.css'],
  providers: [CurrentPostService]
})
export class TwittComponent implements OnInit{
  twitt: Posts = startPost;

  constructor(private CP:CurrentPostService, private store: Store) {}

  ngOnInit() {
    this.twitt = this.CP.getPost();
    this.store.select(data).subscribe((elem) => this.twitt = elem)
  }

}
