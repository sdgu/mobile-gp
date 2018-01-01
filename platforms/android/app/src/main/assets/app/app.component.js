"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "main",
            template: "<page-router-outlet></page-router-outlet>",
            styleUrls: ["./app.component.css"]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
// import { Component } from "@angular/core";
// @Component({
//   selector: "my-app",
//   // template: `
//   //   <ActionBar title="My App" class="action-bar"></ActionBar>
//   //   <!-- Your UI components go here -->
//   // `
//   templateUrl: "./main/main.component.html",
//   styleUrls: ["./main/main.component.css"]
// })
// export class AppComponent 
// {
//   // Your TypeScript logic goes here
//   textToPrepare = "";
//   prepare()
//   {
//   	alert(this.textToPrepare)
//   }
// }
