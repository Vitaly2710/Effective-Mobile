import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthorizationComponent } from './pages/auth/authorization/authorization.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LogInComponent } from './pages/logIn/log-in/log-in.component';
import { MainComponent } from './pages/main/main/main.component';
import {StoreModule} from "@ngrx/store";
import {counterReducer} from "./store/reducers";
import {MainComponentContainer} from "./pages/main/main/main.container";
import {MainModule} from "./pages/main/main/main.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    AuthorizationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({count: counterReducer}),
    MainModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
