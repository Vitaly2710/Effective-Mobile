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

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnChanges{
  @Input() posts: Posts[] = [];
  @Output() addNew = new EventEmitter();

  updatePosts: Posts[] = [];

  ngOnChanges() {
    this.updatePosts = _.cloneDeep(this.posts);
  }
}
