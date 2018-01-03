import { Component, OnInit, ViewContainerRef } from "@angular/core";
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

import { TestFile } from "../testFile";
import { ModalComponent } from "../app.modal";
import { ModalDialogService } from "nativescript-angular/directives/dialogs";

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


	public get _displayArray(): Array<string> {
        return this.displayArray;
    }


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
	  let da = this.displayArray;
	  let ta = this.tapped;
      
      let navigationExtras: NavigationExtras = 
      {
        queryParams:
        {
          "new": true,
          "dispArr": da,
          "tapArr": ta
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

	testArr: Array<TestFile>;
	ngOnInit(): void
	{

		// this.testArr = [["hi", "4", "aou"], ["cool", "2", "3"]]
		// this.testArr = [{"text": "test"}, {"text": "hi"}]
	}


	reshapeArr(arr: Array<string>, n: number, s: string)
	{
		let newarr = arr;
		if (arr.length % n === 1)
		{
			newarr.push(s, s);
		}
		else if (arr.length % n === 2)
		{
			newarr.push(s);
		}
		return newarr;
	}

	reshapeForCol(arr: Array<string>, n: number, s: string)
	{
		let outarr = [];
		let newarr = this.reshapeArr(arr, n, s);
		for (let i = 0; i < newarr.length; i += 3)
		{

			outarr.push({"one": newarr[i], "two": newarr[i+1], "three": newarr[i+2]});
			if (newarr[i] === "Practice")
			{
				// console.log(i);
				// console.dir(outarr);
			}
		}
		if (newarr[0] === "neutral")
		{
			// console.dir(outarr);
		}
		
		return [newarr, outarr];
	}


	testTap: Array<TestFile>;
	public constructor(private route: ActivatedRoute, private modal: ModalDialogService, private vcRef: ViewContainerRef, private router: Router, private routerExtensions: RouterExtensions, private page: Page)
	{
		this.route.queryParams.subscribe(
			params =>
			{
				// if (params["new"])
				{
					// this.testArr = [{"one": "hi", "two": "4", "three": "aou"}, {"one": "hai", "two": "e4", "three": "aoou"}]
					

					// this.testArr = [["hi", "4", "aou"], ["cool", "2", "3"]]
					this.text = params["text"];
					this.words = this.text.split("$#@");//.replace(/\n/g, "<br>").split("$#@");
					// this.displayArray = this.words;
					// this.words.map(x => "<font size='20'>" + x + "</font>");
					this.tapped = params["tap"].split("$%%");
					this.displayArray = this.words;//.map(x => " " + x + " ");
					
					let oarr = this.reshapeForCol(this.displayArray, 3, "");
					this.displayArray = oarr[0]
					this.testArr = oarr[1];

					let tarr = this.reshapeForCol(this.tapped, 3, "neutral");
					this.tapped = tarr[0]
					this.testTap = tarr[1];

					// console.dir(this.testTap[789]);
					// console.dir(this.testTap.slice(790, 800));
					// console.log(this.tapped.slice(790*3));
					// console.log(this.displayArray.slice(790*3))
					// console.dir(this.testTap[791]);
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
  	getCol(i: number, n: string): string
  	{
  		
  		if (this.testTap[i] === undefined)
  		{
  			// console.log(i);
  			// console.dir(this.testTap[790]);
  			// console.dir(this.testArr[790]);
  		}
  		// console.dir(this.testTap[i]["one"]);
  		if (this.testTap[i][n] === "remove")
  		{
  			return "red";
  		}
  		else if (this.testTap[i][n] === "add")
  		{
  			return "blue";
  		}
  		else if (this.testTap[i][n] === "comment")
  		{
  			return "green";
  		}
  		else
  		{
  			return "black";
  		}
  		
  	}

  	private numToSpell = {"one": 0, "two": 1, "three": 2};

	processWord(i: number, n: string): void
	{

		let i2 = i * 3 + this.numToSpell[n];

		if (this.testTap[i][n] === "remove")
		{
			this.testTap[i][n] = "neutral";
			this.tapped[i2] = "neutral";
		}
		else if (this.testTap[i][n] === "add")
		{
			this.displayArray.splice(i2, 1);
			this.tapped.splice(i2, 1);
			let oarr = this.reshapeForCol(this.displayArray, 3, "");
			let tarr = this.reshapeForCol(this.tapped, 3, "neutral");
			this.displayArray = oarr[0];
			this.tapped = tarr[0];
			this.testArr = oarr[1];
			this.testTap = tarr[1];
					
		}
		else if (this.testTap[i][n] === "comment")
		{
			this.displayArray.splice(i2, 1);
			this.tapped.splice(i2, 1);
			let oarr = this.reshapeForCol(this.displayArray, 3, "");
			let tarr = this.reshapeForCol(this.tapped, 3, "neutral");
			this.displayArray = oarr[0];
			this.tapped = tarr[0];
			this.testArr = oarr[1];
			this.testTap = tarr[1];
		}
		else
		{
			this.testTap[i][n] = "remove";
			this.tapped[i2] = "remove";
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
	selectedCol: string = "";

	processSwipe(i: number, n: string): void
	{
		if (this.selectedWordIndex === -1)
		{
			this.selectedWordIndex = i;
			this.selectedCol = n;
			setTimeout(() =>
			{
				this.page.getViewById<TextField>("myAdd").focus()
			}, 100)
		}
		else
		{
			this.selectedWordIndex = i;
			this.selectedCol = n;
			
			setTimeout(() =>
			{
				let s = this.page.getViewById<TextField>("myAdd");
				s.text = "";
				s.focus()
			}, 100)
		}

        // let options = {
        //     context: {},
        //     fullscreen: false,
        //     viewContainerRef: this.vcRef
        // };
        // this.modal.showModal(ModalComponent, options).then(res => {
        //     console.log(res);
        //     if (res)
        //     {
        //       this.onReturn(i, n, res);
        //     }

        // });

		
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
	onReturn(i: number, n: string)
	{
		let i2 = i * 3 + this.numToSpell[n];
		let s = this.page.getViewById<TextField>("myAdd");
		let val = s.text;

		let valArr = val.split(" ");
		let start = -1;
		let end = -1;
		if (valArr[0] !== "")
		{
			this.displayArray.splice(i2 + 1, 0, ...valArr);

			for (let ind = i2; ind < i2 + valArr.length; ind++)
			{
				// this.displayArray.splice(ind + 1, 0, valArr[ind - i]);

				if (valArr[ind - i2].indexOf("[c]") > -1) start = ind;
				if (valArr[ind - i2].indexOf("[/c]") > -1) end = ind;

				// this.tapped.splice(ind + 1, 0, "add");
			}
			console.log(start);
			console.log(end);
			for (let ind = i2; ind < i2 + valArr.length; ind++)
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
			let oarr = this.reshapeForCol(this.displayArray, 3, "");
			let tarr = this.reshapeForCol(this.tapped, 3, "neutral");
			this.displayArray = oarr[0];
			this.tapped = tarr[0];
			this.testArr = oarr[1];
			this.testTap = tarr[1];
			
		}
		// console.log(i);
		// console.log(n);
		// console.log(s.text);
		console.log("entered");
		// console.log(this.tapped);
		// this.displayArray.splice(i + 1, 0, "test");
		// this.tapped.splice(i + 1, 0, "add");
		this.saveArrayToString(this.displayArray);
		this.saveTapToString(this.tapped);
		this.selectedWordIndex = -1;
		this.selectedCol = "";
	}

	showInputs(i: number, n: string)
	{
		return this.selectedWordIndex === i && this.selectedCol === n;
	}

	insertComment(i: number)
	{ 
		let s = this.page.getViewById<TextField>("myAdd");
		s.text += "[c]  [/c] "; 

	}



} 