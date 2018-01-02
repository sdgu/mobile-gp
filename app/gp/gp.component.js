"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var page_1 = require("ui/page");
// import { RadListView } from "nativescript-pro-ui/listview";
var application_settings_1 = require("application-settings");
var GpComponent = (function () {
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
        this.showLimit = 200;
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
                // console.log(this.displayArray);
            }
            // 		// else
            // 		// {
            // 		// 	console.log("params not new")
            // 		// 	// console.log(getString("displayStr0"));
            // 		// 	this.displayArray = this.getArrayFromStrings();
            // 		// 	// console.log(this.displayArray);
            // 		// }
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
    GpComponent.prototype.increaseLimit = function () {
        this.showLimit += 200;
    };
    GpComponent.prototype.ngOnInit = function () {
        // this.testArr = [{"text": "test"}, {"text": "hi"}]
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
        // console.log(this.tapped);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3AuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ3AuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUEwRTtBQUUxRSxzREFBOEQ7QUFFOUQsZ0NBQStCO0FBRS9CLDhEQUE4RDtBQUM5RCw2REFVOEI7QUFXOUI7SUFvRkMscUJBQTJCLEtBQXFCLEVBQVUsTUFBYyxFQUFVLGdCQUFrQyxFQUFVLElBQVU7UUFBeEksaUJBeUNDO1FBekMwQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQS9FakksVUFBSyxHQUFrQixFQUFFLENBQUM7UUFDMUIsaUJBQVksR0FBa0IsRUFBRSxDQUFDO1FBR2pDLGdCQUFXLEdBQUcsNkJBQTZCLENBQUM7UUFDNUMsaUJBQVksR0FBRyxrQkFBa0IsQ0FBQztRQUNsQyxtQkFBYyxHQUFHLGlDQUFpQyxDQUFDO1FBQ25ELG9CQUFlLEdBQUcsd0JBQXdCLENBQUM7UUEwQ2xELHVDQUF1QztRQUN2QyxJQUFJO1FBQ0osc0RBQXNEO1FBQ3RELGlCQUFpQjtRQUNqQixjQUFjO1FBQ2Qsd0RBQXdEO1FBQ3hELHVCQUF1QjtRQUN2QixxREFBcUQ7UUFDckQsc0JBQXNCO1FBQ3RCLDJEQUEyRDtRQUMzRCxLQUFLO1FBQ0wseUNBQXlDO1FBQ3pDLG9CQUFvQjtRQUNwQixpQkFBaUI7UUFDakIsU0FBUztRQUNULE1BQU07UUFDTixlQUFlO1FBQ2YsSUFBSTtRQUNKLGNBQVMsR0FBRyxHQUFHLENBQUM7UUFzRGYsU0FBUztRQUNULElBQUk7UUFDSixrQ0FBa0M7UUFDbEMsOENBQThDO1FBQzlDLE1BQU07UUFDTixtQkFBbUI7UUFDbkIsUUFBUTtRQUNSLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIsUUFBUTtRQUVSLE9B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R0FBYixVQUFjLENBQVM7UUFFdEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQVksT0FBTyxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFDLElBQUksSUFBSSxTQUFTLENBQUM7SUFFckIsQ0FBQztJQXpTVyxXQUFXO1FBVHZCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsSUFBSTtZQUNkLHVCQUF1QjtZQUN2QixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixFQUFFLHFCQUFxQixDQUFDO1NBQzVELENBQUM7eUNBd0ZpQyx1QkFBYyxFQUFrQixlQUFNLEVBQTRCLHlCQUFnQixFQUFnQixXQUFJO09BcEY1SCxXQUFXLENBNlN2QjtJQUFELGtCQUFDO0NBQUEsQUE3U0QsSUE2U0M7QUE3U1ksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkV4dHJhcywgQWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVGV4dFZpZXcgfSBmcm9tIFwidWkvdGV4dC12aWV3XCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCJcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IEdwIH0gZnJvbSBcIi4vZ3BcIjtcclxuLy8gaW1wb3J0IHsgUmFkTGlzdFZpZXcgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlld1wiO1xyXG5pbXBvcnQge1xyXG4gICAgZ2V0Qm9vbGVhbixcclxuICAgIHNldEJvb2xlYW4sXHJcbiAgICBnZXROdW1iZXIsXHJcbiAgICBzZXROdW1iZXIsXHJcbiAgICBnZXRTdHJpbmcsXHJcbiAgICBzZXRTdHJpbmcsXHJcbiAgICBoYXNLZXksXHJcbiAgICByZW1vdmUsXHJcbiAgICBjbGVhclxyXG59IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiOyBcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImdwXCIsXHJcbiAgLy8gbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogXCIuL2dwL2dwLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2dwL2dwLmNvbXBvbmVudC5jc3NcIiwgXCIuL2FwcC5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBHcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdFxyXG57XHJcblx0cHJpdmF0ZSB0ZXN0OiBBcnJheTxHcD47XHJcblxyXG5cdHB1YmxpYyB0ZXh0OiBzdHJpbmc7XHJcblx0cHVibGljIHdvcmRzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcblx0cHVibGljIGRpc3BsYXlBcnJheTogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG5cclxuXHJcblx0cHVibGljIGh0bWxBZGRPcGVuID0gXCI8c3Ryb25nPjxmb250IGNvbG9yPSdibHVlJz5cIjtcclxuXHRwdWJsaWMgaHRtbEFkZENsb3NlID0gXCI8L2ZvbnQ+PC9zdHJvbmc+XCI7XHJcblx0cHVibGljIGh0bWxSZW1vdmVPcGVuID0gXCI8ZGVsPjxzdHJvbmc+PGZvbnQgY29sb3I9J3JlZCc+XCI7XHJcblx0cHVibGljIGh0bWxSZW1vdmVDbG9zZSA9IFwiPC9mb250Pjwvc3Ryb25nPjwvZGVsPlwiO1xyXG5cclxuXHRzYXZlQXJyYXlUb1N0cmluZyhhcnI6IEFycmF5PHN0cmluZz4pXHJcblx0e1xyXG5cdFx0bGV0IHMgPSBhcnIuam9pbihcIiQjQFwiKTsvLy5yZXBsYWNlKC88YnI+L2csIFwiXFxuXCIpO1xyXG5cdFx0c2V0U3RyaW5nKFwiZGlzcFN0clwiLCBzKTtcclxuXHRcdC8vIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKVxyXG5cdFx0Ly8ge1xyXG5cdFx0Ly8gXHRzZXRTdHJpbmcoXCJkaXNwbGF5U3RyXCIgKyBpLCBhcnJbaV0pO1xyXG5cdFx0Ly8gXHQvLyBjb25zb2xlLmxvZyhnZXRTdHJpbmcoXCJkaXNwbGF5U3RyMFwiKSk7XHJcblx0XHQvLyB9XHJcblx0fVxyXG5cdHNhdmVUYXBUb1N0cmluZyhhcnI6IEFycmF5PHN0cmluZz4pXHJcblx0e1xyXG5cdFx0bGV0IHMgPSBhcnIuam9pbihcIiQlJVwiKTtcclxuXHRcdHNldFN0cmluZyhcInRhcFN0clwiLCBzKTtcclxuXHR9XHJcblxyXG5cdGdvQmFjaygpXHJcblx0e1xyXG5cdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcclxuXHR9XHJcblxyXG5cdGdldEJCKClcclxuXHR7XHJcblx0ICBsZXQgZGlzcEFyciA9IHRoaXMuZGlzcGxheUFycmF5O1xyXG5cdCAgbGV0IHRhcEFyciA9IHRoaXMudGFwcGVkO1xyXG4gICAgICBcclxuICAgICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSBcclxuICAgICAge1xyXG4gICAgICAgIHF1ZXJ5UGFyYW1zOlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwibmV3XCI6IHRydWUsXHJcbiAgICAgICAgICBcImRpc3BBcnJcIjogZGlzcEFycixcclxuICAgICAgICAgIFwidGFwQXJyXCI6IHRhcEFyclxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImJiXCJdLCBuYXZpZ2F0aW9uRXh0cmFzKTtcclxuICAgIH1cclxuXHRcclxuXHJcblx0Ly8gZ2V0QXJyYXlGcm9tU3RyaW5ncygpOiBBcnJheTxzdHJpbmc+XHJcblx0Ly8ge1xyXG5cdC8vIFx0Y29uc29sZS5sb2coXCJlbnRlcmVkIGdldGFycmF5ZnJvbXN0cmluZ3MgZnJvbSBncFwiKVxyXG5cdC8vIFx0bGV0IGFyciA9IFtdO1xyXG5cdC8vIFx0bGV0IGkgPSAwO1xyXG5cdC8vIFx0Ly8gbGV0IHMyID0gZ2V0U3RyaW5nKFwiZGlzcGxheVN0cjBcIiwgXCJub3QgcHJlc2VudFwiKTtcclxuXHQvLyBcdC8vIGNvbnNvbGUubG9nKHMyKTtcclxuXHQvLyBcdC8vIGxldCBzMyA9IGdldFN0cmluZyhcImRpbGFvZXN0XCIsIFwibm90IHByZXNlbnRcIik7XHJcblx0Ly8gXHQvLyBjb25zb2xlLmxvZyhzMylcclxuXHQvLyBcdHdoaWxlKGdldFN0cmluZyhcImRpc3BsYXlTdHJcIiArIGksIFwiZmFsc2VcIikgIT09IFwiZmFsc2VcIilcclxuXHQvLyBcdHtcclxuXHQvLyBcdFx0bGV0IHMgPSBnZXRTdHJpbmcoXCJkaXNwbGF5U3RyXCIgKyBpKTtcclxuXHQvLyBcdFx0Y29uc29sZS5sb2cocyk7XHJcblx0Ly8gXHRcdGFyci5wdXNoKHMpO1xyXG5cdC8vIFx0XHRpKys7XHJcblx0Ly8gXHR9O1xyXG5cdC8vIFx0cmV0dXJuIGFycjtcclxuXHQvLyB9XHJcblx0c2hvd0xpbWl0ID0gMjAwO1xyXG5cdGluY3JlYXNlTGltaXQoKVxyXG5cdHtcclxuXHRcdHRoaXMuc2hvd0xpbWl0ICs9IDIwMDtcclxuXHR9XHJcblxyXG5cdHRlc3RBcnI6IEFycmF5PEdwPjtcclxuXHRuZ09uSW5pdCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gdGhpcy50ZXN0QXJyID0gW3tcInRleHRcIjogXCJ0ZXN0XCJ9LCB7XCJ0ZXh0XCI6IFwiaGlcIn1dXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBwYWdlOiBQYWdlKVxyXG5cdHtcclxuXHRcdHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKFxyXG5cdFx0XHRwYXJhbXMgPT5cclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGlmIChwYXJhbXNbXCJuZXdcIl0pXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy50ZXh0ID0gcGFyYW1zW1widGV4dFwiXTtcclxuXHRcdFx0XHRcdHRoaXMud29yZHMgPSB0aGlzLnRleHQuc3BsaXQoXCIkI0BcIik7Ly8ucmVwbGFjZSgvXFxuL2csIFwiPGJyPlwiKS5zcGxpdChcIiQjQFwiKTtcclxuXHRcdFx0XHRcdC8vIHRoaXMuZGlzcGxheUFycmF5ID0gdGhpcy53b3JkcztcclxuXHRcdFx0XHRcdC8vIHRoaXMud29yZHMubWFwKHggPT4gXCI8Zm9udCBzaXplPScyMCc+XCIgKyB4ICsgXCI8L2ZvbnQ+XCIpO1xyXG5cdFx0XHRcdFx0dGhpcy50YXBwZWQgPSBwYXJhbXNbXCJ0YXBcIl0uc3BsaXQoXCIkJSVcIik7XHJcblx0XHRcdFx0XHR0aGlzLmRpc3BsYXlBcnJheSA9IHRoaXMud29yZHM7Ly8ubWFwKHggPT4gXCIgXCIgKyB4ICsgXCIgXCIpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRjbGVhcigpO1xyXG5cdFx0XHRcdFx0dGhpcy5zYXZlQXJyYXlUb1N0cmluZyh0aGlzLmRpc3BsYXlBcnJheSk7XHJcblx0XHRcdFx0XHR0aGlzLnNhdmVUYXBUb1N0cmluZyh0aGlzLnRhcHBlZCk7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhnZXRTdHJpbmcoXCJkaXNwbGF5U3RyMFwiKSk7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcInBhcmFtcyBuZXdcIilcclxuXHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLmRpc3BsYXlBcnJheSk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHQvLyBcdFx0Ly8gZWxzZVxyXG5cdFx0Ly8gXHRcdC8vIHtcclxuXHRcdC8vIFx0XHQvLyBcdGNvbnNvbGUubG9nKFwicGFyYW1zIG5vdCBuZXdcIilcclxuXHRcdC8vIFx0XHQvLyBcdC8vIGNvbnNvbGUubG9nKGdldFN0cmluZyhcImRpc3BsYXlTdHIwXCIpKTtcclxuXHRcdC8vIFx0XHQvLyBcdHRoaXMuZGlzcGxheUFycmF5ID0gdGhpcy5nZXRBcnJheUZyb21TdHJpbmdzKCk7XHJcblx0XHQvLyBcdFx0Ly8gXHQvLyBjb25zb2xlLmxvZyh0aGlzLmRpc3BsYXlBcnJheSk7XHJcblx0XHQvLyBcdFx0Ly8gfVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9KVxyXG5cclxuXHJcblx0XHQvLyB0aGlzLnJvdXRlLnFQYXJzLnN1YnNjcmliZShcclxuXHRcdC8vIFx0cCA9PlxyXG5cdFx0Ly8gXHR7XHJcblx0XHQvLyBcdFx0Y29uc29sZS5sb2coXCJub3QgbmV3XCIpO1xyXG5cdFx0Ly8gXHRcdHRoaXMuZGlzcGxheUFycmF5ID0gdGhpcy5nZXRBcnJheUZyb21TdHJpbmdzKCk7XHJcblx0XHQvLyBcdFx0Y29uc29sZS5sb2codGhpcy5kaXNwbGF5QXJyYXkpO1xyXG5cdFx0Ly8gXHR9KVxyXG5cdH1cclxuICAvLyBiYWNrKClcclxuICAvLyB7XHJcbiAgLy8gICAvLyBhbGVydCh0aGlzLnRleHRUb1ByZXBhcmUpO1xyXG4gIC8vICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSBcclxuICAvLyAgIHtcclxuICAvLyAgICAgcXVlcnlQYXJhbXM6XHJcbiAgLy8gICAgIHtcclxuICAvLyAgICAgICBcIm5ld1wiOiB0cnVlLFxyXG4gIC8vICAgICAgIFwidGV4dFwiOiBcIlwiXHJcbiAgLy8gICAgIH1cclxuXHJcbiAgLy8gICB9O1xyXG4gIC8vICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiXCJdLCBuYXZpZ2F0aW9uRXh0cmFzKTtcclxuICAvLyB9XHJcbiAgICB0YXBwZWQ6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICBcdGdldENvbChpOiBudW1iZXIpOiBzdHJpbmdcclxuICBcdHtcclxuICBcdFx0aWYgKHRoaXMudGFwcGVkW2ldID09PSBcInJlbW92ZVwiKVxyXG4gIFx0XHR7XHJcbiAgXHRcdFx0cmV0dXJuIFwicmVkXCI7XHJcbiAgXHRcdH1cclxuICBcdFx0ZWxzZSBpZiAodGhpcy50YXBwZWRbaV0gPT09IFwiYWRkXCIpXHJcbiAgXHRcdHtcclxuICBcdFx0XHRyZXR1cm4gXCJibHVlXCI7XHJcbiAgXHRcdH1cclxuICBcdFx0ZWxzZSBpZiAodGhpcy50YXBwZWRbaV0gPT09IFwiY29tbWVudFwiKVxyXG4gIFx0XHR7XHJcbiAgXHRcdFx0cmV0dXJuIFwiZ3JlZW5cIjtcclxuICBcdFx0fVxyXG4gIFx0XHRlbHNlXHJcbiAgXHRcdHtcclxuICBcdFx0XHRyZXR1cm4gXCJibGFja1wiO1xyXG4gIFx0XHR9XHJcbiAgXHRcdFxyXG4gIFx0fVxyXG5cdHByb2Nlc3NXb3JkKGk6IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy50YXBwZWRbaV0gPT09IFwicmVtb3ZlXCIpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMudGFwcGVkW2ldID0gXCJuZXV0cmFsXCI7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICh0aGlzLnRhcHBlZFtpXSA9PT0gXCJhZGRcIilcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5kaXNwbGF5QXJyYXkuc3BsaWNlKGksIDEpO1xyXG5cdFx0XHR0aGlzLnRhcHBlZC5zcGxpY2UoaSwgMSk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICh0aGlzLnRhcHBlZFtpXSA9PT0gXCJjb21tZW50XCIpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuZGlzcGxheUFycmF5LnNwbGljZShpLCAxKTtcclxuXHRcdFx0dGhpcy50YXBwZWQuc3BsaWNlKGksIDEpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnRhcHBlZFtpXSA9IFwicmVtb3ZlXCI7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8vIGFsZXJ0KGkpO1xyXG5cdFx0Ly8gYWxlcnQoZ2V0U3RyaW5nKFwidGVzdDFcIiwgXCJub3QgcHJlc2VudFwiKSlcclxuXHRcdC8vIGlmICh0aGlzLmRpc3BsYXlBcnJheVtpXS5pbmRleE9mKHRoaXMuaHRtbFJlbW92ZU9wZW4pID4gLTEpXHJcblx0XHQvLyB7XHJcblx0XHQvLyBcdHRoaXMuZGlzcGxheUFycmF5W2ldID0gdGhpcy5kaXNwbGF5QXJyYXlbaV0ucmVwbGFjZShuZXcgUmVnRXhwKHRoaXMuaHRtbFJlbW92ZU9wZW4sIFwiZ1wiKSwgXCJcIik7XHJcblx0XHQvLyBcdHRoaXMuZGlzcGxheUFycmF5W2ldID0gdGhpcy5kaXNwbGF5QXJyYXlbaV0ucmVwbGFjZShuZXcgUmVnRXhwKHRoaXMuaHRtbFJlbW92ZUNsb3NlLCBcImdcIiksIFwiXCIpO1xyXG5cdFx0Ly8gfVxyXG5cdFx0Ly8gZWxzZSBpZiAodGhpcy5kaXNwbGF5QXJyYXlbaV0uaW5kZXhPZih0aGlzLmh0bWxBZGRPcGVuKSA+IC0xKVxyXG5cdFx0Ly8ge1xyXG5cdFx0Ly8gXHR0aGlzLmRpc3BsYXlBcnJheVtpXSA9IHRoaXMuZGlzcGxheUFycmF5W2ldLnJlcGxhY2UobmV3IFJlZ0V4cCh0aGlzLmh0bWxBZGRPcGVuLCBcImdcIiksIFwiXCIpO1xyXG5cdFx0Ly8gXHR0aGlzLmRpc3BsYXlBcnJheVtpXSA9IHRoaXMuZGlzcGxheUFycmF5W2ldLnJlcGxhY2UobmV3IFJlZ0V4cCh0aGlzLmh0bWxBZGRDbG9zZSwgXCJnXCIpLCBcIlwiKTtcclxuXHJcblx0XHQvLyB9XHJcblx0XHQvLyBlbHNlXHJcblx0XHQvLyB7XHJcblx0XHQvLyBcdHRoaXMuZGlzcGxheUFycmF5W2ldID0gdGhpcy5odG1sUmVtb3ZlT3BlbiArIHRoaXMuZGlzcGxheUFycmF5W2ldICsgdGhpcy5odG1sUmVtb3ZlQ2xvc2U7XHJcblxyXG5cdFx0Ly8gfVxyXG5cdFx0dGhpcy5zYXZlQXJyYXlUb1N0cmluZyh0aGlzLmRpc3BsYXlBcnJheSk7XHJcblx0XHR0aGlzLnNhdmVUYXBUb1N0cmluZyh0aGlzLnRhcHBlZCk7XHJcblx0fVxyXG5cclxuXHRzZWxlY3RlZFdvcmRJbmRleDogbnVtYmVyID0gLTE7XHJcblxyXG5cdHByb2Nlc3NTd2lwZShpOiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWRXb3JkSW5kZXggPT09IC0xKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkV29yZEluZGV4ID0gaTtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5wYWdlLmdldFZpZXdCeUlkPFRleHRGaWVsZD4oXCJteUFkZFwiKS5mb2N1cygpXHJcblx0XHRcdH0sIDEwMClcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZFdvcmRJbmRleCA9IGk7XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IHMgPSB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8VGV4dEZpZWxkPihcIm15QWRkXCIpO1xyXG5cdFx0XHRcdHMudGV4dCA9IFwiXCI7XHJcblx0XHRcdFx0cy5mb2N1cygpXHJcblx0XHRcdH0sIDEwMClcclxuXHRcdH1cclxuXHJcblx0XHRcclxuXHRcdC8vIGNvbnNvbGUubG9nKGkpO1xyXG5cdFx0Ly8gY29uc29sZS5sb2codGhpcy5zZWxlY3RlZFdvcmRJbmRleCk7XHJcblxyXG5cdFx0Ly8gbGV0IG15QWRkOiBUZXh0RmllbGQgPSA8VGV4dEZpZWxkPiB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQoXCJteUFkZFwiKTtcclxuXHRcdC8vIG15QWRkLmZvY3VzKCk7XHJcblxyXG5cclxuXHRcdC8vIGFsZXJ0KGkpO1xyXG5cdFx0Ly8gdGhpcy5kaXNwbGF5QXJyYXkuc3BsaWNlKGkgKyAxLCAwLCBcInRlc3RcIik7XHJcblx0XHQvLyB0aGlzLnRhcHBlZC5zcGxpY2UoaSArIDEsIDAsIFwiYWRkXCIpO1xyXG5cdFx0Ly8gY29uc29sZS5sb2codGhpcy50YXBwZWQpXHJcblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLmRpc3BsYXlBcnJheSlcclxuXHRcdC8vIHRoaXMuc2F2ZUFycmF5VG9TdHJpbmcodGhpcy5kaXNwbGF5QXJyYXkpO1xyXG5cdFx0Ly8gdGhpcy5zYXZlVGFwVG9TdHJpbmcodGhpcy50YXBwZWQpO1xyXG5cdH1cclxuXHRpbnB1dFRleHQ6IHN0cmluZyA9IFwiXCI7XHJcblx0b25SZXR1cm4oaTogbnVtYmVyKVxyXG5cdHtcclxuXHRcdGxldCBzID0gdGhpcy5wYWdlLmdldFZpZXdCeUlkPFRleHRGaWVsZD4oXCJteUFkZFwiKTtcclxuXHRcdGxldCB2YWwgPSBzLnRleHQ7XHJcblxyXG5cdFx0bGV0IHZhbEFyciA9IHZhbC5zcGxpdChcIiBcIik7XHJcblx0XHRsZXQgc3RhcnQgPSAtMTtcclxuXHRcdGxldCBlbmQgPSAtMTtcclxuXHRcdGlmICh2YWxBcnJbMF0gIT09IFwiXCIpXHJcblx0XHR7XHJcblx0XHRcdGZvciAobGV0IGluZCA9IGk7IGluZCA8IGkgKyB2YWxBcnIubGVuZ3RoOyBpbmQrKylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuZGlzcGxheUFycmF5LnNwbGljZShpbmQgKyAxLCAwLCB2YWxBcnJbaW5kIC0gaV0pO1xyXG5cclxuXHRcdFx0XHRpZiAodmFsQXJyW2luZCAtIGldLmluZGV4T2YoXCJbY11cIikgPiAtMSkgc3RhcnQgPSBpbmQ7XHJcblx0XHRcdFx0aWYgKHZhbEFycltpbmQgLSBpXS5pbmRleE9mKFwiWy9jXVwiKSA+IC0xKSBlbmQgPSBpbmQ7XHJcblxyXG5cdFx0XHRcdC8vIHRoaXMudGFwcGVkLnNwbGljZShpbmQgKyAxLCAwLCBcImFkZFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zb2xlLmxvZyhzdGFydCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKGVuZCk7XHJcblx0XHRcdGZvciAobGV0IGluZCA9IGk7IGluZCA8IGkgKyB2YWxBcnIubGVuZ3RoOyBpbmQrKylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChpbmQgPj0gc3RhcnQgJiYgaW5kIDw9IGVuZClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLnRhcHBlZC5zcGxpY2UoaW5kICsgMSwgMCwgXCJjb21tZW50XCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy50YXBwZWQuc3BsaWNlKGluZCArIDEsIDAsIFwiYWRkXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHJcblx0XHRjb25zb2xlLmxvZyhzLnRleHQpO1xyXG5cdFx0Y29uc29sZS5sb2coXCJlbnRlcmVkXCIpO1xyXG5cdFx0Ly8gY29uc29sZS5sb2codGhpcy50YXBwZWQpO1xyXG5cdFx0Ly8gdGhpcy5kaXNwbGF5QXJyYXkuc3BsaWNlKGkgKyAxLCAwLCBcInRlc3RcIik7XHJcblx0XHQvLyB0aGlzLnRhcHBlZC5zcGxpY2UoaSArIDEsIDAsIFwiYWRkXCIpO1xyXG5cdFx0dGhpcy5zYXZlQXJyYXlUb1N0cmluZyh0aGlzLmRpc3BsYXlBcnJheSk7XHJcblx0XHR0aGlzLnNhdmVUYXBUb1N0cmluZyh0aGlzLnRhcHBlZCk7XHJcblx0XHR0aGlzLnNlbGVjdGVkV29yZEluZGV4ID0gLTE7XHJcblx0fVxyXG5cclxuXHRpbnNlcnRDb21tZW50KGk6IG51bWJlcilcclxuXHR7IFxyXG5cdFx0bGV0IHMgPSB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8VGV4dEZpZWxkPihcIm15QWRkXCIpO1xyXG5cdFx0cy50ZXh0ICs9IFwiW2NdWy9jXVwiOyBcclxuXHJcblx0fVxyXG5cclxuXHJcblxyXG59ICJdfQ==