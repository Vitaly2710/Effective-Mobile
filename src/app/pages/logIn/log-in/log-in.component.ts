import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  myForm : FormGroup = new FormGroup({

    "userName": new FormControl(),
    "userEmail": new FormControl(),
    "userPhone": new FormControl()
  });
}
