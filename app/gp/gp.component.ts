import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras, ActivatedRoute} from "@angular/router";
import { TextView } from "ui/text-view";
import { RouterExtensions } from "nativescript-angular/router"
import { TextField } from "ui/text-field";
import { Page } from "ui/page";
import { Gp } from "./gp";
// import { RadListView } from "nativescript-pro-ui/listview";
import {
    getBoolean,
    setBoolean,
    getNumber,
    setNumber,
    getString,
    setString,
    hasKey,
    remove,
    clear
} from "application-settings"; 

@Component({
  selector: "gp",
  // moduleId: module.id,
  templateUrl: "./gp/gp.component.html",
  styleUrls: ["./gp/gp.component.css", "./app.component.css"]
})



export class GpComponent implements OnInit
{
	private test: Array<Gp>;

	public text: string;
	public words: Array<string> = [];
	public displayArray: Array<string> = [];


	public htmlAddOpen = "<strong><font color='blue'>";
	public htmlAddClose = "</font></strong>";
	public htmlRemoveOpen = "<del><strong><font color='red'>";
	public htmlRemoveClose = "</font></strong></del>";

	saveArrayToString(arr: Array<string>)
	{
		let s = arr.join("$#@");//.replace(/<br>/g, "\n");
		setString("dispStr", s);
		// for (var i = 0; i < arr.length; i++)
		// {
		// 	setString("displayStr" + i, arr[i]);
		// 	// console.log(getString("displayStr0"));
		// }
	}
	saveTapToString(arr: Array<string>)
	{
		let s = arr.join("$%%");
		setString("tapStr", s);
	}

	goBack()
	{
		this.routerExtensions.back();
	}

	getBB()
	{
	  let dispArr = this.displayArray;
	  let tapArr = this.tapped;
      
      let navigationExtras: NavigationExtras = 
      {
        queryParams:
        {
          "new": true,
          "dispArr": dispArr,
          "tapArr": tapArr
        }

      };
      this.router.navigate(["bb"], navigationExtras);
    }
	

	// getArrayFromStrings(): Array<string>
	// {
	// 	console.log("entered getarrayfromstrings from gp")
	// 	let arr = [];
	// 	let i = 0;
	// 	// let s2 = getString("displayStr0", "not present");
	// 	// console.log(s2);
	// 	// let s3 = getString("dilaoest", "not present");
	// 	// console.log(s3)
	// 	while(getString("displayStr" + i, "false") !== "false")
	// 	{
	// 		let s = getString("displayStr" + i);
	// 		console.log(s);
	// 		arr.push(s);
	// 		i++;
	// 	};
	// 	return arr;
	// }
	showLimit = 200;
	increaseLimit()
	{
		this.showLimit += 200;
	}

	testArr: Array<Gp>;
	ngOnInit(): void
	{
		// this.testArr = [{"text": "test"}, {"text": "hi"}]
	}

	public constructor(private route: ActivatedRoute, private router: Router, private routerExtensions: RouterExtensions, private page: Page)
	{
		this.route.queryParams.subscribe(
			params =>
			{
				// if (params["new"])
				{
					this.text = params["text"];
					this.words = this.text.split("$#@");//.replace(/\n/g, "<br>").split("$#@");
					// this.displayArray = this.words;
					// this.words.map(x => "<font size='20'>" + x + "</font>");
					this.tapped = params["tap"].split("$%%");
					this.displayArray = this.words;//.map(x => " " + x + " ");
					
					clear();
					this.saveArrayToString(this.displayArray);
					this.saveTapToString(this.tapped);
					// console.log(getString("displayStr0"));
					console.log("params new")

					// console.log(this.displayArray);
					
				}
		// 		// else
		// 		// {
		// 		// 	console.log("params not new")
		// 		// 	// console.log(getString("displayStr0"));
		// 		// 	this.displayArray = this.getArrayFromStrings();
		// 		// 	// console.log(this.displayArray);
		// 		// }
				
			})


		// this.route.qPars.subscribe(
		// 	p =>
		// 	{
		// 		console.log("not new");
		// 		this.displayArray = this.getArrayFromStrings();
		// 		console.log(this.displayArray);
		// 	})
	}
  // back()
  // {
  //   // alert(this.textToPrepare);
  //   let navigationExtras: NavigationExtras = 
  //   {
  //     queryParams:
  //     {
  //       "new": true,
  //       "text": ""
  //     }

  //   };
  //   this.router.navigate([""], navigationExtras);
  // }
    tapped: Array<string> = [];
  	getCol(i: number): string
  	{
  		if (this.tapped[i] === "remove")
  		{
  			return "red";
  		}
  		else if (this.tapped[i] === "add")
  		{
  			return "blue";
  		}
  		else if (this.tapped[i] === "comment")
  		{
  			return "green";
  		}
  		else
  		{
  			return "black";
  		}
  		
  	}
	processWord(i: number): void
	{
		if (this.tapped[i] === "remove")
		{
			this.tapped[i] = "neutral";
		}
		else if (this.tapped[i] === "add")
		{
			this.displayArray.splice(i, 1);
			this.tapped.splice(i, 1);
		}
		else if (this.tapped[i] === "comment")
		{
			this.displayArray.splice(i, 1);
			this.tapped.splice(i, 1);
		}
		else
		{
			this.tapped[i] = "remove";
		}
		
		// alert(i);
		// alert(getString("test1", "not present"))
		// if (this.displayArray[i].indexOf(this.htmlRemoveOpen) > -1)
		// {
		// 	this.displayArray[i] = this.displayArray[i].replace(new RegExp(this.htmlRemoveOpen, "g"), "");
		// 	this.displayArray[i] = this.displayArray[i].replace(new RegExp(this.htmlRemoveClose, "g"), "");
		// }
		// else if (this.displayArray[i].indexOf(this.htmlAddOpen) > -1)
		// {
		// 	this.displayArray[i] = this.displayArray[i].replace(new RegExp(this.htmlAddOpen, "g"), "");
		// 	this.displayArray[i] = this.displayArray[i].replace(new RegExp(this.htmlAddClose, "g"), "");

		// }
		// else
		// {
		// 	this.displayArray[i] = this.htmlRemoveOpen + this.displayArray[i] + this.htmlRemoveClose;

		// }
		this.saveArrayToString(this.displayArray);
		this.saveTapToString(this.tapped);
	}

	selectedWordIndex: number = -1;

	processSwipe(i: number): void
	{
		if (this.selectedWordIndex === -1)
		{
			this.selectedWordIndex = i;
			setTimeout(() =>
			{
				this.page.getViewById<TextField>("myAdd").focus()
			}, 100)
		}
		else
		{
			this.selectedWordIndex = i;
			
			
			setTimeout(() =>
			{
				let s = this.page.getViewById<TextField>("myAdd");
				s.text = "";
				s.focus()
			}, 100)
		}

		
		// console.log(i);
		// console.log(this.selectedWordIndex);

		// let myAdd: TextField = <TextField> this.page.getViewById("myAdd");
		// myAdd.focus();


		// alert(i);
		// this.displayArray.splice(i + 1, 0, "test");
		// this.tapped.splice(i + 1, 0, "add");
		// console.log(this.tapped)
		// console.log(this.displayArray)
		// this.saveArrayToString(this.displayArray);
		// this.saveTapToString(this.tapped);
	}
	inputText: string = "";
	onReturn(i: number)
	{
		let s = this.page.getViewById<TextField>("myAdd");
		let val = s.text;

		let valArr = val.split(" ");
		let start = -1;
		let end = -1;
		if (valArr[0] !== "")
		{
			for (let ind = i; ind < i + valArr.length; ind++)
			{
				this.displayArray.splice(ind + 1, 0, valArr[ind - i]);

				if (valArr[ind - i].indexOf("[c]") > -1) start = ind;
				if (valArr[ind - i].indexOf("[/c]") > -1) end = ind;

				// this.tapped.splice(ind + 1, 0, "add");
			}
			console.log(start);
			console.log(end);
			for (let ind = i; ind < i + valArr.length; ind++)
			{
				if (ind >= start && ind <= end)
				{
					this.tapped.splice(ind + 1, 0, "comment");
				}
				else
				{
					this.tapped.splice(ind + 1, 0, "add");
				}
				
			}
			
		}

		console.log(s.text);
		console.log("entered");
		// console.log(this.tapped);
		// this.displayArray.splice(i + 1, 0, "test");
		// this.tapped.splice(i + 1, 0, "add");
		this.saveArrayToString(this.displayArray);
		this.saveTapToString(this.tapped);
		this.selectedWordIndex = -1;
	}

	insertComment(i: number)
	{ 
		let s = this.page.getViewById<TextField>("myAdd");
		s.text += "[c][/c]"; 

	}



} 