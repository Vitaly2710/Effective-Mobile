import {NgModule} from "@angular/core";
import {MainComponentContainer} from "./main.container";
import {MainComponent} from "./main.component";
import {CommonModule} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";

@NgModule({
  declarations: [MainComponentContainer,MainComponent],
  exports:[MainComponentContainer],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink
  ],
})

export class MainModule {

}
