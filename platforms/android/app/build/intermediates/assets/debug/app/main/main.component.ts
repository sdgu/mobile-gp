import { Component } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import { GpservService } from "../gpserv/gpserv.service";



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
export class MainComponent 
{
  // Your TypeScript logic goes here
  textToPrepare = "this is a first test string ez";

  public constructor(private router: Router) {}

  prepare()
  {
    // alert(this.textToPrepare);
    let navigationExtras: NavigationExtras = 
    {
      queryParams:
      {
        "text": this.textToPrepare
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
