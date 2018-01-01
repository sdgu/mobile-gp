"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var application_settings_1 = require("application-settings");
var GpComponent = (function () {
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
    function GpComponent(route, router, routerExtensions, page) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.page = page;
        this.words = [];
        this.displayArray = [];
        this.htmlAddOpen = "<strong><font color='blue'>";
        this.htmlAddClose = "</font></strong>";
        this.htmlRemoveOpen = "<del><strong><font color='red'>";
        this.htmlRemoveClose = "</font></strong></del>";
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
        this.tapped = [];
        this.selectedWordIndex = -1;
        this.inputText = "";
        this.route.queryParams.subscribe(function (params) {
            // if (params["new"])
            {
                _this.text = params["text"];
                _this.words = _this.text.split("$#@"); //.replace(/\n/g, "<br>").split("$#@");
                // this.displayArray = this.words;
                // this.words.map(x => "<font size='20'>" + x + "</font>");
                _this.tapped = params["tap"].split("$%%");
                _this.displayArray = _this.words; //.map(x => " " + x + " ");
                application_settings_1.clear();
                _this.saveArrayToString(_this.displayArray);
                _this.saveTapToString(_this.tapped);
                // console.log(getString("displayStr0"));
                console.log("params new");
                console.log(_this.displayArray);
            }
            // else
            // {
            // 	console.log("params not new")
            // 	// console.log(getString("displayStr0"));
            // 	this.displayArray = this.getArrayFromStrings();
            // 	// console.log(this.displayArray);
            // }
        });
        // this.route.qPars.subscribe(
        // 	p =>
        // 	{
        // 		console.log("not new");
        // 		this.displayArray = this.getArrayFromStrings();
        // 		console.log(this.displayArray);
        // 	})
    }
    GpComponent.prototype.saveArrayToString = function (arr) {
        var s = arr.join("$#@"); //.replace(/<br>/g, "\n");
        application_settings_1.setString("dispStr", s);
        // for (var i = 0; i < arr.length; i++)
        // {
        // 	setString("displayStr" + i, arr[i]);
        // 	// console.log(getString("displayStr0"));
        // }
    };
    GpComponent.prototype.saveTapToString = function (arr) {
        var s = arr.join("$%%");
        application_settings_1.setString("tapStr", s);
    };
    GpComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    GpComponent.prototype.getBB = function () {
        var dispArr = this.displayArray;
        var tapArr = this.tapped;
        var navigationExtras = {
            queryParams: {
                "new": true,
                "dispArr": dispArr,
                "tapArr": tapArr
            }
        };
        this.router.navigate(["bb"], navigationExtras);
    };
    GpComponent.prototype.getCol = function (i) {
        if (this.tapped[i] === "remove") {
            return "red";
        }
        else if (this.tapped[i] === "add") {
            return "blue";
        }
        else if (this.tapped[i] === "comment") {
            return "green";
        }
        else {
            return "black";
        }
    };
    GpComponent.prototype.processWord = function (i) {
        if (this.tapped[i] === "remove") {
            this.tapped[i] = "neutral";
        }
        else if (this.tapped[i] === "add") {
            this.displayArray.splice(i, 1);
            this.tapped.splice(i, 1);
        }
        else if (this.tapped[i] === "comment") {
            this.displayArray.splice(i, 1);
            this.tapped.splice(i, 1);
        }
        else {
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
    };
    GpComponent.prototype.processSwipe = function (i) {
        var _this = this;
        if (this.selectedWordIndex === -1) {
            this.selectedWordIndex = i;
            setTimeout(function () {
                _this.page.getViewById("myAdd").focus();
            }, 100);
        }
        else {
            this.selectedWordIndex = i;
            setTimeout(function () {
                var s = _this.page.getViewById("myAdd");
                s.text = "";
                s.focus();
            }, 100);
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
    };
    GpComponent.prototype.onReturn = function (i) {
        var s = this.page.getViewById("myAdd");
        var val = s.text;
        var valArr = val.split(" ");
        var start = -1;
        var end = -1;
        if (valArr[0] !== "") {
            for (var ind = i; ind < i + valArr.length; ind++) {
                this.displayArray.splice(ind + 1, 0, valArr[ind - i]);
                if (valArr[ind - i].indexOf("[c]") > -1)
                    start = ind;
                if (valArr[ind - i].indexOf("[/c]") > -1)
                    end = ind;
                // this.tapped.splice(ind + 1, 0, "add");
            }
            console.log(start);
            console.log(end);
            for (var ind = i; ind < i + valArr.length; ind++) {
                if (ind >= start && ind <= end) {
                    this.tapped.splice(ind + 1, 0, "comment");
                }
                else {
                    this.tapped.splice(ind + 1, 0, "add");
                }
            }
        }
        console.log(s.text);
        console.log("entered");
        console.log(this.tapped);
        // this.displayArray.splice(i + 1, 0, "test");
        // this.tapped.splice(i + 1, 0, "add");
        this.saveArrayToString(this.displayArray);
        this.saveTapToString(this.tapped);
        this.selectedWordIndex = -1;
    };
    GpComponent.prototype.insertComment = function (i) {
        var s = this.page.getViewById("myAdd");
        s.text += "[c][/c]";
    };
    GpComponent = __decorate([
        core_1.Component({
            selector: "gp",
            // moduleId: module.id,
            templateUrl: "./gp/gp.component.html",
            styleUrls: ["./gp/gp.component.css", "./app.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, router_2.RouterExtensions, page_1.Page])
    ], GpComponent);
    return GpComponent;
}());
exports.GpComponent = GpComponent;
