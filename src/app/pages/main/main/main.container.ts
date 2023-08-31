import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {State} from "../../../store/reducers";
import {Store} from "@ngrx/store";
import {add} from "../../../store/actions";
import {Observable} from "rxjs";
import {Posts} from "../../../store/interfaces";
import {selectFeatureCount} from "../../../store/selectors";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-main-container',
  template: `
		<app-main
      [posts]="stateStatus$ | async"
      (addNew)="addSms()"
    >
		</app-main>
	`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponentContainer {

  stateStatus$:Observable<number>;

  allPost: Posts[] = [];

  constructor(private store: Store <State>,) {
    this.stateStatus$ = this.store.select(selectFeatureCount)

  }

  addSms() {
    this.store.dispatch(add())
    console.error('wwwww')
  }
}
