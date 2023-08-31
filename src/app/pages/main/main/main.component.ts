import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Posts} from "../../../store/interfaces";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @Input() posts: number | null = 0;
  @Output() addNew = new EventEmitter();


  console() {
    console.log(this.posts)
  }
}
