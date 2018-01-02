import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptHttpModule } from "nativescript-angular/http";
// import { NativeScriptUIListViewModule } from "nativescript-pro-ui/listview/angular";
// import { GridViewModule } from "nativescript-grid-view/angular"
// import { RadListView } from "nativescript-pro-ui/listview"
import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";
import { GpComponent } from "./gp/gp.component";
import { BbComponent } from "./bb/bb.component";
import { routes, navigatableComponents } from "./app.routing";


@NgModule({
  declarations: [AppComponent,
  	...navigatableComponents
  		],
  bootstrap: [AppComponent],
  imports: 
  [
  	NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes),
    // NativeScriptUIListViewModule
    // GridViewModule

  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
