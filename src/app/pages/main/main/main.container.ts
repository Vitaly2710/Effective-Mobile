import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {State} from "../../../store/reducers";
import {Store} from "@ngrx/store";
import {Observable, take, takeWhile} from "rxjs";
import {Posts} from "../../../store/interfaces";
import {HttpService} from "../../../services";

@Component({
  selector: 'app-main-container',
  template: `
		<app-main
      [posts]="allPost"
      (currentPost)="upPost.emit($event)"
    >
		</app-main>
	`,
  providers: [HttpService]
})
export class MainComponentContainer {
  @Output() upPost: EventEmitter<Posts> = new EventEmitter()

  allPost: Posts[] = [];

  constructor(private store: Store <State>,private http: HttpService) {
    this.http.getData().pipe(take(1)).subscribe((elems) => this.allPost = elems as Posts[] )
  }

}
