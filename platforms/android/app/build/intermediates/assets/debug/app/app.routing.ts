import { MainComponent } from "./main/main.component";
import { GpComponent } from "./gp/gp.component";


export const routes = [
{ path: "", component: MainComponent },
{ path: "gp", component: GpComponent }

];

export const navigatableComponents = 
[
	MainComponent,
	GpComponent

];





