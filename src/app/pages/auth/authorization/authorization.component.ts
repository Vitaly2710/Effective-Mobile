import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent{

  validForm = true;

  auth : FormGroup = new FormGroup({
    "user": new FormControl("", [Validators.required]),
    "password": new FormControl("", [Validators.required]),
    "rePassword": new FormControl("", [Validators.required])});

  onSubmit() {
    localStorage.setItem(this.auth.value?.user, this.auth.value?.password)
  }
}
