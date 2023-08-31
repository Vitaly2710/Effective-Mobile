import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthorizationComponent } from './pages/auth/authorization/authorization.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LogInComponent } from './pages/logIn/log-in/log-in.component';
import { MainComponent } from './pages/main/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    AuthorizationComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
