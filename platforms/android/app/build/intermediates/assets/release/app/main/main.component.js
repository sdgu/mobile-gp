"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var gpserv_service_1 = require("../gpserv/gpserv.service");
var page_1 = require("ui/page");
var application_settings_1 = require("application-settings");
var dialogs_1 = require("ui/dialogs");
var MainComponent = (function () {
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
    function MainComponent(router, page) {
        this.router = router;
        this.page = page;
        // Your TypeScript logic goes here 
        this.textToPrepare = ""; //"this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string "
    }
    MainComponent.prototype.ngOnInit = function () {
        var tv = this.page.getViewById("prepText");
        tv.dismissSoftInput();
    };
    MainComponent.prototype.prepare = function () {
        var _this = this;
        // alert(this.textToPrepare);
        // alert(this.testText);
        // if (confirm("Are you ready to start a new check? Previous data will be lost."))
        {
            var t = this.textToPrepare.split(" ").join("$#@");
            var p = Array(this.textToPrepare.split(" ").length).fill("neutral").join("$%%");
            var navigationExtras_1 = {
                queryParams: {
                    "new": true,
                    "text": t,
                    "tap": p
                }
            };
            var options = {
                title: "New check",
                message: "Are you ready to start a new check? Previous data will be lost.",
                okButtonText: "Yes",
                cancelButtonText: "No",
                neutralButtonText: "Cancel"
            };
            dialogs_1.confirm(options).then(function (result) {
                console.log(result);
                if (result) {
                    _this.router.navigate(["gp"], navigationExtras_1);
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
    };
    MainComponent.prototype.goToEditor = function () {
        var navigationExtras = {
            queryParams: {
                "new": false,
                "text": application_settings_1.getString("dispStr", ""),
                "tap": application_settings_1.getString("tapStr", "")
            }
        };
        this.router.navigate(["gp"], navigationExtras);
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            // template: `
            //   <ActionBar title="My App" class="action-bar"></ActionBar>
            //   <!-- Your UI components go here -->
            // `
            templateUrl: "./main/main.component.html",
            styleUrls: ["./main/main.component.css", "./app.component.css"],
            providers: [gpserv_service_1.GpservService]
        }),
        __metadata("design:paramtypes", [router_1.Router, page_1.Page])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
