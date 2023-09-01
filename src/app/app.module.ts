import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthorizationComponent } from './pages/auth/authorization/authorization.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LogInComponent } from './pages/logIn/log-in/log-in.component';
import { MainComponent } from './pages/main/main/main.component';
import {StoreModule} from "@ngrx/store";
import {postReducer} from "./store/reducers";
import {MainComponentContainer} from "./pages/main/main/main.container";
import {MainModule} from "./pages/main/main/main.module";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {TwittComponent} from "./pages/main/twitt/twitt.component";
import {RouterModule, Routes} from "@angular/router";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {environment} from "../environments/environment";
import {MatIconModule} from '@angular/material/icon';

const appRoutes: Routes =[
  { path: '', component: MainComponentContainer},
  { path: 'twitt/:id', component: TwittComponent},
  { path: 'login', component: LogInComponent },
  { path: 'auth', component: AuthorizationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    AuthorizationComponent,
    TwittComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({count: postReducer}),
    MainModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(appRoutes),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Demo App',
      logOnly: environment.production
    }),
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
