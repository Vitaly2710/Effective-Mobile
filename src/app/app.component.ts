import {ChangeDetectorRef, Component} from '@angular/core';
import {Observable} from "rxjs";
import { Store } from '@ngrx/store';
import {Posts} from "./store/interfaces";
import {startPost} from "./shared/config";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'test';
  currentPost: Posts = startPost

  constructor(private cd: ChangeDetectorRef) {
  }

  upDatePost(post: Posts) {
    this.currentPost = post
    console.log(this.currentPost)
    this.cd.detectChanges()
  }
}
