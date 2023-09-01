import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit{

  validForm = false;

  auth : FormGroup = new FormGroup({
    "user": new FormControl("", [Validators.required]),
    "password": new FormControl("", [Validators.required]),
    "rePassword": new FormControl("", [Validators.required])});

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.auth.valueChanges.subscribe(() =>{
      if(this.auth.value['password'] === this.auth.value['rePassword'] && this.auth.value['rePassword'] && !localStorage.getItem(this.auth.value['user'])) {
        this.validForm = true
      } else this.validForm = false
    })
  }

  onSubmit() {
    if(this.validForm) {
      localStorage.setItem(this.auth.value['user'], this.auth.value['password'])
      this.router.navigate(['/login'])
    }
  }
}
