import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras, ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router"
import { GpservService } from "../gpserv/gpserv.service";
import { TextField } from "ui/text-field";
import { Page } from "ui/page";
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
  selector: "bb",
  // template: `
  //   <ActionBar title="My App" class="action-bar"></ActionBar>
  //   <!-- Your UI components go here -->
  // `
  templateUrl: "./bb/bb.component.html",
  styleUrls: ["./bb/bb.component.css", "./app.component.css"],
  providers: [GpservService]
})
export class BbComponent 
{
  dispArr: Array<string> = [];
  tapped: Array<string> = [];

  bbStr: string = "";


  arrToBB(d: Array<string>, t: Array<string>)
  {

  }

  public constructor(private route: ActivatedRoute, private router: Router, private routerExtensions: RouterExtensions, private page: Page)
  {
    this.route.queryParams.subscribe(
      params =>
      {
        this.dispArr = params["dispArr"];
        this.tapped = params["tapArr"];
        let bbArr = this.dispArr;
        let adds = [];
        let rems = [];
        let coms = [];
        let start = -1;
        let end = -1;
        let prev = this.tapped[0];

        for (let i = 1; i < this.dispArr.length; i++)
        {
          if (prev !== "add" && this.tapped[i] === "add")
          {
            start = i;
            adds.push(start);
          }
          if (this.tapped[i] !== "add" && prev === "add")
          {
            end = i - 1;
            adds.push(end);
          }
         
          prev = this.tapped[i];
        }
        console.log(adds);
        for (let i = 1; i < this.dispArr.length; i++)
        {
          if (prev !== "remove" && this.tapped[i] === "remove")
          {
            start = i;
            rems.push(start);
          }
          if (this.tapped[i] !== "remove" && prev === "remove")
          {
            end = i - 1;
            rems.push(end);
          }
         
          prev = this.tapped[i];
        }
        console.log(rems);
        for (let i = 1; i < this.dispArr.length; i++)
        {
          if (prev !== "comment" && this.tapped[i] === "comment")
          {
            start = i;
            coms.push(start);
          }
          if (this.tapped[i] !== "comment" && prev === "comment")
          {
            end = i - 1;
            coms.push(end);
          }
         
          prev = this.tapped[i];
        }
        console.log(coms);

        for (let i = 0; i < adds.length; i+=2)
        {
          bbArr[adds[i]] = "[b][color='blue']" + bbArr[adds[i]];
          bbArr[adds[i+1]] = bbArr[adds[i+1]] + "[/color][/b]"
        }
        for (let i = 0; i < rems.length; i+=2)
        {
          bbArr[rems[i]] = "[s][b][color='red']" + bbArr[rems[i]];
          bbArr[rems[i+1]] = bbArr[rems[i+1]] + "[/color][/b][/s]"
        }
        for (let i = 0; i < coms.length; i+=2)
        {
          bbArr[coms[i]] = "[b][color='green']" + bbArr[coms[i]].replace("[c]", "");
          bbArr[coms[i+1]] = bbArr[coms[i+1]].replace("[/c]", "") + "[/color][/b]"
        }
        // for (let i = 0; i < this.dispArr.length; i++)
        // {
          
        // }
          
        this.bbStr = bbArr.join(" ");
      }
        
  )}
  

  goBack()
  {
    this.routerExtensions.back();
  }
}