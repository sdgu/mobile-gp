import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras, ActivatedRoute } from "@angular/router";
import { GpservService } from "../gpserv/gpserv.service";
import { TextField } from "ui/text-field";
import { TextView } from "ui/text-view";
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

import { confirm } from "ui/dialogs";

@Component({
  selector: "my-app",
  // template: `
  //   <ActionBar title="My App" class="action-bar"></ActionBar>
  //   <!-- Your UI components go here -->
  // `
  templateUrl: "./main/main.component.html",
  styleUrls: ["./main/main.component.css", "./app.component.css"],
  providers: [GpservService]
})
export class MainComponent implements OnInit
{
  // Your TypeScript logic goes here 
  textToPrepare = "this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string "
    // testText = getString("displayStr0", "not present");

  // saveArrayToString(arr: Array<string>)
  // {
  //   for (var i = 0; i < arr.length; i++)
  //   {
  //     setString("displayStr" + i, arr[i]);
  //     // console.log(getString("displayStr0"));
  //   }
  // }

  // getArrayFromStrings(): Array<string>
  // {
  //   console.log("entered getarrayfromstrings from main")
  //   let arr = [];
  //   let i = 0;
  //   // let s2 = getString("displayStr0", "not present");
  //   // console.log(s2);
  //   // let s3 = getString("dilaoest", "not present");
  //   // console.log(s3)
  //   while(getString("displayStr" + i, "false") !== "false")
  //   {
  //     let s = getString("displayStr" + i); //.replace(/ /g, "");
  //     console.log(s);
  //     arr.push(s);
  //     i++;
  //   }
  //   return arr;
  // }

  public constructor(private router: Router, private page: Page) {}

  ngOnInit()
  {
    var tv: TextView = <TextView>this.page.getViewById("prepText")
    tv.dismissSoftInput();
  }

  prepare()
  {
    // alert(this.textToPrepare);
    // alert(this.testText);
    // if (confirm("Are you ready to start a new check? Previous data will be lost."))
    {
      let t = this.textToPrepare.split(" ").join("$#@")
      let p = Array(this.textToPrepare.split(" ").length).fill("neutral").join("$%%");
      let navigationExtras: NavigationExtras = 
      {
        queryParams:
        {
          "new": true,
          "text": t,
          "tap": p
        }

      };

    let options = {
        title: "New check",
        message: "Are you ready to start a new check? Previous data will be lost.",
        okButtonText: "Yes",
        cancelButtonText: "No",
        neutralButtonText: "Cancel"
    };

    confirm(options).then((result: boolean) => {
        console.log(result);
        if (result)
        {
          this.router.navigate(["gp"], navigationExtras);
        }
        
    });

      // if (confirm("Are you ready to start a new check? Previous data will be lost."))
      // {
      //   setTimeout(()=>
      //   {
          
      //   }, 100)
      // }
      // else
      // {

      // }
      
      }
    // else
    {

    }
  }

  goToEditor()
  {
    let navigationExtras: NavigationExtras = 
    {
      queryParams:
      {
        "new": false,
        "text": getString("dispStr", ""),
        "tap": getString("tapStr", "")
    
      }

    };
    this.router.navigate(["gp"], navigationExtras);
  }

// constructor(private router: Router, private gpservService: GpservService) 
// {
//   prepare()
//   {
//     alert(this.textToPrepare);
//     this.gpservService.prepare(str: String)
//       .subscribe(
//         () => this.router.navigate(["/gp"]),
//         (error) => alert("something went wrong")
//         );
    
//   }


// }




}
