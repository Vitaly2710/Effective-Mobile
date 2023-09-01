import {Component, Input} from "@angular/core";
import {Posts} from "../../../store/interfaces";
import {startPost} from "../../../shared/config";

@Component({
  selector: 'app-twitt',
  templateUrl: './twitt.component.html',
  styleUrls: ['./twitt.component.css']
})
export class TwittComponent {
  @Input() twitt: Posts = startPost;

}
