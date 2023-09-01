import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {State} from "../../../store/reducers";
import {Store} from "@ngrx/store";
import {add} from "../../../store/actions";
import {Observable, take, takeWhile} from "rxjs";
import {Posts} from "../../../store/interfaces";
import {selectFeatureCount} from "../../../store/selectors";
import {HttpClient} from "@angular/common/http";
import {HttpService} from "../../../services";

@Component({
  selector: 'app-main-container',
  template: `
		<app-main
      [posts]="allPost"
    >
		</app-main>
	`,
  providers: [HttpService]
})
export class MainComponentContainer {
  allPost: Posts[] = [];

  constructor(private store: Store <State>,private http: HttpService) {
    this.http.getData().pipe(take(1)).subscribe((elems) => this.allPost = elems as Posts[] )
  }
}
