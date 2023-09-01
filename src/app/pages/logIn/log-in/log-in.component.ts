import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  logIn : FormGroup = new FormGroup({
    "userEmail": new FormControl(),
    "password": new FormControl()
  });

  constructor(private router: Router) {
  }

  onSubmit() {
    if(localStorage.getItem(this.logIn.value['userEmail']) === this.logIn.value['password'] && localStorage.getItem(this.logIn.value['userEmail'])) {
      localStorage.setItem('auth','true');
      this.router.navigate(['/'])
    } else {
      alert('Неверный логин или пароль')
    }
  }

}
