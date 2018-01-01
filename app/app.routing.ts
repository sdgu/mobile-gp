import { MainComponent } from "./main/main.component";
import { GpComponent } from "./gp/gp.component";
import {BbComponent} from "./bb/bb.component";


export const routes = [
{ path: "", component: MainComponent },
{ path: "gp", component: GpComponent },
{ path: "bb", component: BbComponent }

];

export const navigatableComponents = 
[
	MainComponent,
	GpComponent,
	BbComponent

];





