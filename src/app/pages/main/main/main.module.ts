import {NgModule} from "@angular/core";
import {MainComponentContainer} from "./main.container";
import {MainComponent} from "./main.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [MainComponentContainer,MainComponent],
  exports:[MainComponentContainer],
    imports: [
        CommonModule
    ],
})

export class MainModule {

}
