
import { Component } from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: "gp",
  // moduleId: module.id,
  templateUrl: "./gp/gp.component.html",
  styleUrls: ["./gp/gp.component.css", "./app.component.css"]
})



export class GpComponent
{
	public text: string;
	public words: Array<string> = [];
	public displayArray: Array<string> = [];


	public htmlAddOpen = "<strong><font color='blue'>";
	public htmlAddClose = "</font></strong>";
	public htmlRemoveOpen = "<del><strong><font color='red'>";
	public htmlRemoveClose = this.htmlAddClose + "</del>";

	public constructor(private route: ActivatedRoute)
	{
		this.route.queryParams.subscribe(
			params =>
			{
				this.text = params["text"];
				this.words = this.text.split(" ");
				// this.displayArray = this.words;
				// this.words.map(x => "<font size='20'>" + x + "</font>");
				this.displayArray = this.words.map(x => " " + x + " ");

				console.log(this.displayArray);
			})
	}

	processWord(i: number): void
	{
		// alert(i);

		if (this.displayArray[i].indexOf(this.htmlRemoveOpen) > -1)
		{
			this.displayArray[i] = this.displayArray[i].replace(new RegExp(this.htmlRemoveOpen, "g"), "");
			this.displayArray[i] = this.displayArray[i].replace(new RegExp(this.htmlRemoveClose, "g"), "");
		}
		else if (this.displayArray[i].indexOf(this.htmlAddOpen) > -1)
		{
			this.displayArray[i] = this.displayArray[i].replace(new RegExp(this.htmlAddOpen, "g"), "");
			this.displayArray[i] = this.displayArray[i].replace(new RegExp(this.htmlAddClose, "g"), "");

		}
		else
		{
			this.displayArray[i] = this.htmlRemoveOpen + this.displayArray[i] + this.htmlRemoveClose;

		}



	}

} 