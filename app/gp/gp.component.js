"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var page_1 = require("ui/page");
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
        // 	this.displayArray = ["test", "hi"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3AuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ3AuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUEwRTtBQUUxRSxzREFBOEQ7QUFFOUQsZ0NBQStCO0FBRS9CLDZEQVU4QjtBQVc5QjtJQWlGQyxxQkFBMkIsS0FBcUIsRUFBVSxNQUFjLEVBQVUsZ0JBQWtDLEVBQVUsSUFBVTtRQUF4SSxpQkF5Q0M7UUF6QzBCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBOUVqSSxVQUFLLEdBQWtCLEVBQUUsQ0FBQztRQUMxQixpQkFBWSxHQUFrQixFQUFFLENBQUM7UUFHakMsZ0JBQVcsR0FBRyw2QkFBNkIsQ0FBQztRQUM1QyxpQkFBWSxHQUFHLGtCQUFrQixDQUFDO1FBQ2xDLG1CQUFjLEdBQUcsaUNBQWlDLENBQUM7UUFDbkQsb0JBQWUsR0FBRyx3QkFBd0IsQ0FBQztRQTBDbEQsdUNBQXVDO1FBQ3ZDLElBQUk7UUFDSixzREFBc0Q7UUFDdEQsaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCx3REFBd0Q7UUFDeEQsdUJBQXVCO1FBQ3ZCLHFEQUFxRDtRQUNyRCxzQkFBc0I7UUFDdEIsMkRBQTJEO1FBQzNELEtBQUs7UUFDTCx5Q0FBeUM7UUFDekMsb0JBQW9CO1FBQ3BCLGlCQUFpQjtRQUNqQixTQUFTO1FBQ1QsTUFBTTtRQUNOLGVBQWU7UUFDZixJQUFJO1FBQ0osY0FBUyxHQUFHLEdBQUcsQ0FBQztRQXFEZixTQUFTO1FBQ1QsSUFBSTtRQUNKLGtDQUFrQztRQUNsQyw4Q0FBOEM7UUFDOUMsTUFBTTtRQUNOLG1CQUFtQjtRQUNuQixRQUFRO1FBQ1IscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQixRQUFRO1FBRVIsT0FBTztRQUNQLGtEQUFr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UztRQUV0QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBWSxPQUFPLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQztJQUVyQixDQUFDO0lBdFNXLFdBQVc7UUFUdkIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxJQUFJO1lBQ2QsdUJBQXVCO1lBQ3ZCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLEVBQUUscUJBQXFCLENBQUM7U0FDNUQsQ0FBQzt5Q0FxRmlDLHVCQUFjLEVBQWtCLGVBQU0sRUFBNEIseUJBQWdCLEVBQWdCLFdBQUk7T0FqRjVILFdBQVcsQ0EwU3ZCO0lBQUQsa0JBQUM7Q0FBQSxBQTFTRCxJQTBTQztBQTFTWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzLCBBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBUZXh0VmlldyB9IGZyb20gXCJ1aS90ZXh0LXZpZXdcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIlxyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBnZXRCb29sZWFuLFxyXG4gICAgc2V0Qm9vbGVhbixcclxuICAgIGdldE51bWJlcixcclxuICAgIHNldE51bWJlcixcclxuICAgIGdldFN0cmluZyxcclxuICAgIHNldFN0cmluZyxcclxuICAgIGhhc0tleSxcclxuICAgIHJlbW92ZSxcclxuICAgIGNsZWFyXHJcbn0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJncFwiLFxyXG4gIC8vIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9ncC9ncC5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9ncC9ncC5jb21wb25lbnQuY3NzXCIsIFwiLi9hcHAuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgR3BDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXRcclxue1xyXG5cdHB1YmxpYyB0ZXh0OiBzdHJpbmc7XHJcblx0cHVibGljIHdvcmRzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcblx0cHVibGljIGRpc3BsYXlBcnJheTogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG5cclxuXHJcblx0cHVibGljIGh0bWxBZGRPcGVuID0gXCI8c3Ryb25nPjxmb250IGNvbG9yPSdibHVlJz5cIjtcclxuXHRwdWJsaWMgaHRtbEFkZENsb3NlID0gXCI8L2ZvbnQ+PC9zdHJvbmc+XCI7XHJcblx0cHVibGljIGh0bWxSZW1vdmVPcGVuID0gXCI8ZGVsPjxzdHJvbmc+PGZvbnQgY29sb3I9J3JlZCc+XCI7XHJcblx0cHVibGljIGh0bWxSZW1vdmVDbG9zZSA9IFwiPC9mb250Pjwvc3Ryb25nPjwvZGVsPlwiO1xyXG5cclxuXHRzYXZlQXJyYXlUb1N0cmluZyhhcnI6IEFycmF5PHN0cmluZz4pXHJcblx0e1xyXG5cdFx0bGV0IHMgPSBhcnIuam9pbihcIiQjQFwiKTsvLy5yZXBsYWNlKC88YnI+L2csIFwiXFxuXCIpO1xyXG5cdFx0c2V0U3RyaW5nKFwiZGlzcFN0clwiLCBzKTtcclxuXHRcdC8vIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKVxyXG5cdFx0Ly8ge1xyXG5cdFx0Ly8gXHRzZXRTdHJpbmcoXCJkaXNwbGF5U3RyXCIgKyBpLCBhcnJbaV0pO1xyXG5cdFx0Ly8gXHQvLyBjb25zb2xlLmxvZyhnZXRTdHJpbmcoXCJkaXNwbGF5U3RyMFwiKSk7XHJcblx0XHQvLyB9XHJcblx0fVxyXG5cdHNhdmVUYXBUb1N0cmluZyhhcnI6IEFycmF5PHN0cmluZz4pXHJcblx0e1xyXG5cdFx0bGV0IHMgPSBhcnIuam9pbihcIiQlJVwiKTtcclxuXHRcdHNldFN0cmluZyhcInRhcFN0clwiLCBzKTtcclxuXHR9XHJcblxyXG5cdGdvQmFjaygpXHJcblx0e1xyXG5cdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcclxuXHR9XHJcblxyXG5cdGdldEJCKClcclxuXHR7XHJcblx0ICBsZXQgZGlzcEFyciA9IHRoaXMuZGlzcGxheUFycmF5O1xyXG5cdCAgbGV0IHRhcEFyciA9IHRoaXMudGFwcGVkO1xyXG4gICAgICBcclxuICAgICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSBcclxuICAgICAge1xyXG4gICAgICAgIHF1ZXJ5UGFyYW1zOlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwibmV3XCI6IHRydWUsXHJcbiAgICAgICAgICBcImRpc3BBcnJcIjogZGlzcEFycixcclxuICAgICAgICAgIFwidGFwQXJyXCI6IHRhcEFyclxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImJiXCJdLCBuYXZpZ2F0aW9uRXh0cmFzKTtcclxuICAgIH1cclxuXHRcclxuXHJcblx0Ly8gZ2V0QXJyYXlGcm9tU3RyaW5ncygpOiBBcnJheTxzdHJpbmc+XHJcblx0Ly8ge1xyXG5cdC8vIFx0Y29uc29sZS5sb2coXCJlbnRlcmVkIGdldGFycmF5ZnJvbXN0cmluZ3MgZnJvbSBncFwiKVxyXG5cdC8vIFx0bGV0IGFyciA9IFtdO1xyXG5cdC8vIFx0bGV0IGkgPSAwO1xyXG5cdC8vIFx0Ly8gbGV0IHMyID0gZ2V0U3RyaW5nKFwiZGlzcGxheVN0cjBcIiwgXCJub3QgcHJlc2VudFwiKTtcclxuXHQvLyBcdC8vIGNvbnNvbGUubG9nKHMyKTtcclxuXHQvLyBcdC8vIGxldCBzMyA9IGdldFN0cmluZyhcImRpbGFvZXN0XCIsIFwibm90IHByZXNlbnRcIik7XHJcblx0Ly8gXHQvLyBjb25zb2xlLmxvZyhzMylcclxuXHQvLyBcdHdoaWxlKGdldFN0cmluZyhcImRpc3BsYXlTdHJcIiArIGksIFwiZmFsc2VcIikgIT09IFwiZmFsc2VcIilcclxuXHQvLyBcdHtcclxuXHQvLyBcdFx0bGV0IHMgPSBnZXRTdHJpbmcoXCJkaXNwbGF5U3RyXCIgKyBpKTtcclxuXHQvLyBcdFx0Y29uc29sZS5sb2cocyk7XHJcblx0Ly8gXHRcdGFyci5wdXNoKHMpO1xyXG5cdC8vIFx0XHRpKys7XHJcblx0Ly8gXHR9O1xyXG5cdC8vIFx0cmV0dXJuIGFycjtcclxuXHQvLyB9XHJcblx0c2hvd0xpbWl0ID0gMjAwO1xyXG5cdGluY3JlYXNlTGltaXQoKVxyXG5cdHtcclxuXHRcdHRoaXMuc2hvd0xpbWl0ICs9IDIwMDtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCk6IHZvaWRcclxuXHR7XHJcblx0Ly8gXHR0aGlzLmRpc3BsYXlBcnJheSA9IFtcInRlc3RcIiwgXCJoaVwiXVxyXG5cdH1cclxuXHJcblx0cHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcGFnZTogUGFnZSlcclxuXHR7XHJcblx0XHR0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShcclxuXHRcdFx0cGFyYW1zID0+XHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBpZiAocGFyYW1zW1wibmV3XCJdKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMudGV4dCA9IHBhcmFtc1tcInRleHRcIl07XHJcblx0XHRcdFx0XHR0aGlzLndvcmRzID0gdGhpcy50ZXh0LnNwbGl0KFwiJCNAXCIpOy8vLnJlcGxhY2UoL1xcbi9nLCBcIjxicj5cIikuc3BsaXQoXCIkI0BcIik7XHJcblx0XHRcdFx0XHQvLyB0aGlzLmRpc3BsYXlBcnJheSA9IHRoaXMud29yZHM7XHJcblx0XHRcdFx0XHQvLyB0aGlzLndvcmRzLm1hcCh4ID0+IFwiPGZvbnQgc2l6ZT0nMjAnPlwiICsgeCArIFwiPC9mb250PlwiKTtcclxuXHRcdFx0XHRcdHRoaXMudGFwcGVkID0gcGFyYW1zW1widGFwXCJdLnNwbGl0KFwiJCUlXCIpO1xyXG5cdFx0XHRcdFx0dGhpcy5kaXNwbGF5QXJyYXkgPSB0aGlzLndvcmRzOy8vLm1hcCh4ID0+IFwiIFwiICsgeCArIFwiIFwiKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Y2xlYXIoKTtcclxuXHRcdFx0XHRcdHRoaXMuc2F2ZUFycmF5VG9TdHJpbmcodGhpcy5kaXNwbGF5QXJyYXkpO1xyXG5cdFx0XHRcdFx0dGhpcy5zYXZlVGFwVG9TdHJpbmcodGhpcy50YXBwZWQpO1xyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZ2V0U3RyaW5nKFwiZGlzcGxheVN0cjBcIikpO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJwYXJhbXMgbmV3XCIpXHJcblxyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhpcy5kaXNwbGF5QXJyYXkpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0Ly8gXHRcdC8vIGVsc2VcclxuXHRcdC8vIFx0XHQvLyB7XHJcblx0XHQvLyBcdFx0Ly8gXHRjb25zb2xlLmxvZyhcInBhcmFtcyBub3QgbmV3XCIpXHJcblx0XHQvLyBcdFx0Ly8gXHQvLyBjb25zb2xlLmxvZyhnZXRTdHJpbmcoXCJkaXNwbGF5U3RyMFwiKSk7XHJcblx0XHQvLyBcdFx0Ly8gXHR0aGlzLmRpc3BsYXlBcnJheSA9IHRoaXMuZ2V0QXJyYXlGcm9tU3RyaW5ncygpO1xyXG5cdFx0Ly8gXHRcdC8vIFx0Ly8gY29uc29sZS5sb2codGhpcy5kaXNwbGF5QXJyYXkpO1xyXG5cdFx0Ly8gXHRcdC8vIH1cclxuXHRcdFx0XHRcclxuXHRcdFx0fSlcclxuXHJcblxyXG5cdFx0Ly8gdGhpcy5yb3V0ZS5xUGFycy5zdWJzY3JpYmUoXHJcblx0XHQvLyBcdHAgPT5cclxuXHRcdC8vIFx0e1xyXG5cdFx0Ly8gXHRcdGNvbnNvbGUubG9nKFwibm90IG5ld1wiKTtcclxuXHRcdC8vIFx0XHR0aGlzLmRpc3BsYXlBcnJheSA9IHRoaXMuZ2V0QXJyYXlGcm9tU3RyaW5ncygpO1xyXG5cdFx0Ly8gXHRcdGNvbnNvbGUubG9nKHRoaXMuZGlzcGxheUFycmF5KTtcclxuXHRcdC8vIFx0fSlcclxuXHR9XHJcbiAgLy8gYmFjaygpXHJcbiAgLy8ge1xyXG4gIC8vICAgLy8gYWxlcnQodGhpcy50ZXh0VG9QcmVwYXJlKTtcclxuICAvLyAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0gXHJcbiAgLy8gICB7XHJcbiAgLy8gICAgIHF1ZXJ5UGFyYW1zOlxyXG4gIC8vICAgICB7XHJcbiAgLy8gICAgICAgXCJuZXdcIjogdHJ1ZSxcclxuICAvLyAgICAgICBcInRleHRcIjogXCJcIlxyXG4gIC8vICAgICB9XHJcblxyXG4gIC8vICAgfTtcclxuICAvLyAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIlwiXSwgbmF2aWdhdGlvbkV4dHJhcyk7XHJcbiAgLy8gfVxyXG4gICAgdGFwcGVkOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgXHRnZXRDb2woaTogbnVtYmVyKTogc3RyaW5nXHJcbiAgXHR7XHJcbiAgXHRcdGlmICh0aGlzLnRhcHBlZFtpXSA9PT0gXCJyZW1vdmVcIilcclxuICBcdFx0e1xyXG4gIFx0XHRcdHJldHVybiBcInJlZFwiO1xyXG4gIFx0XHR9XHJcbiAgXHRcdGVsc2UgaWYgKHRoaXMudGFwcGVkW2ldID09PSBcImFkZFwiKVxyXG4gIFx0XHR7XHJcbiAgXHRcdFx0cmV0dXJuIFwiYmx1ZVwiO1xyXG4gIFx0XHR9XHJcbiAgXHRcdGVsc2UgaWYgKHRoaXMudGFwcGVkW2ldID09PSBcImNvbW1lbnRcIilcclxuICBcdFx0e1xyXG4gIFx0XHRcdHJldHVybiBcImdyZWVuXCI7XHJcbiAgXHRcdH1cclxuICBcdFx0ZWxzZVxyXG4gIFx0XHR7XHJcbiAgXHRcdFx0cmV0dXJuIFwiYmxhY2tcIjtcclxuICBcdFx0fVxyXG4gIFx0XHRcclxuICBcdH1cclxuXHRwcm9jZXNzV29yZChpOiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMudGFwcGVkW2ldID09PSBcInJlbW92ZVwiKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnRhcHBlZFtpXSA9IFwibmV1dHJhbFwiO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodGhpcy50YXBwZWRbaV0gPT09IFwiYWRkXCIpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuZGlzcGxheUFycmF5LnNwbGljZShpLCAxKTtcclxuXHRcdFx0dGhpcy50YXBwZWQuc3BsaWNlKGksIDEpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodGhpcy50YXBwZWRbaV0gPT09IFwiY29tbWVudFwiKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmRpc3BsYXlBcnJheS5zcGxpY2UoaSwgMSk7XHJcblx0XHRcdHRoaXMudGFwcGVkLnNwbGljZShpLCAxKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0dGhpcy50YXBwZWRbaV0gPSBcInJlbW92ZVwiO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvLyBhbGVydChpKTtcclxuXHRcdC8vIGFsZXJ0KGdldFN0cmluZyhcInRlc3QxXCIsIFwibm90IHByZXNlbnRcIikpXHJcblx0XHQvLyBpZiAodGhpcy5kaXNwbGF5QXJyYXlbaV0uaW5kZXhPZih0aGlzLmh0bWxSZW1vdmVPcGVuKSA+IC0xKVxyXG5cdFx0Ly8ge1xyXG5cdFx0Ly8gXHR0aGlzLmRpc3BsYXlBcnJheVtpXSA9IHRoaXMuZGlzcGxheUFycmF5W2ldLnJlcGxhY2UobmV3IFJlZ0V4cCh0aGlzLmh0bWxSZW1vdmVPcGVuLCBcImdcIiksIFwiXCIpO1xyXG5cdFx0Ly8gXHR0aGlzLmRpc3BsYXlBcnJheVtpXSA9IHRoaXMuZGlzcGxheUFycmF5W2ldLnJlcGxhY2UobmV3IFJlZ0V4cCh0aGlzLmh0bWxSZW1vdmVDbG9zZSwgXCJnXCIpLCBcIlwiKTtcclxuXHRcdC8vIH1cclxuXHRcdC8vIGVsc2UgaWYgKHRoaXMuZGlzcGxheUFycmF5W2ldLmluZGV4T2YodGhpcy5odG1sQWRkT3BlbikgPiAtMSlcclxuXHRcdC8vIHtcclxuXHRcdC8vIFx0dGhpcy5kaXNwbGF5QXJyYXlbaV0gPSB0aGlzLmRpc3BsYXlBcnJheVtpXS5yZXBsYWNlKG5ldyBSZWdFeHAodGhpcy5odG1sQWRkT3BlbiwgXCJnXCIpLCBcIlwiKTtcclxuXHRcdC8vIFx0dGhpcy5kaXNwbGF5QXJyYXlbaV0gPSB0aGlzLmRpc3BsYXlBcnJheVtpXS5yZXBsYWNlKG5ldyBSZWdFeHAodGhpcy5odG1sQWRkQ2xvc2UsIFwiZ1wiKSwgXCJcIik7XHJcblxyXG5cdFx0Ly8gfVxyXG5cdFx0Ly8gZWxzZVxyXG5cdFx0Ly8ge1xyXG5cdFx0Ly8gXHR0aGlzLmRpc3BsYXlBcnJheVtpXSA9IHRoaXMuaHRtbFJlbW92ZU9wZW4gKyB0aGlzLmRpc3BsYXlBcnJheVtpXSArIHRoaXMuaHRtbFJlbW92ZUNsb3NlO1xyXG5cclxuXHRcdC8vIH1cclxuXHRcdHRoaXMuc2F2ZUFycmF5VG9TdHJpbmcodGhpcy5kaXNwbGF5QXJyYXkpO1xyXG5cdFx0dGhpcy5zYXZlVGFwVG9TdHJpbmcodGhpcy50YXBwZWQpO1xyXG5cdH1cclxuXHJcblx0c2VsZWN0ZWRXb3JkSW5kZXg6IG51bWJlciA9IC0xO1xyXG5cclxuXHRwcm9jZXNzU3dpcGUoaTogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnNlbGVjdGVkV29yZEluZGV4ID09PSAtMSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZFdvcmRJbmRleCA9IGk7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT5cclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMucGFnZS5nZXRWaWV3QnlJZDxUZXh0RmllbGQ+KFwibXlBZGRcIikuZm9jdXMoKVxyXG5cdFx0XHR9LCAxMDApXHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRXb3JkSW5kZXggPSBpO1xyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT5cclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBzID0gdGhpcy5wYWdlLmdldFZpZXdCeUlkPFRleHRGaWVsZD4oXCJteUFkZFwiKTtcclxuXHRcdFx0XHRzLnRleHQgPSBcIlwiO1xyXG5cdFx0XHRcdHMuZm9jdXMoKVxyXG5cdFx0XHR9LCAxMDApXHJcblx0XHR9XHJcblxyXG5cdFx0XHJcblx0XHQvLyBjb25zb2xlLmxvZyhpKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWRXb3JkSW5kZXgpO1xyXG5cclxuXHRcdC8vIGxldCBteUFkZDogVGV4dEZpZWxkID0gPFRleHRGaWVsZD4gdGhpcy5wYWdlLmdldFZpZXdCeUlkKFwibXlBZGRcIik7XHJcblx0XHQvLyBteUFkZC5mb2N1cygpO1xyXG5cclxuXHJcblx0XHQvLyBhbGVydChpKTtcclxuXHRcdC8vIHRoaXMuZGlzcGxheUFycmF5LnNwbGljZShpICsgMSwgMCwgXCJ0ZXN0XCIpO1xyXG5cdFx0Ly8gdGhpcy50YXBwZWQuc3BsaWNlKGkgKyAxLCAwLCBcImFkZFwiKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMudGFwcGVkKVxyXG5cdFx0Ly8gY29uc29sZS5sb2codGhpcy5kaXNwbGF5QXJyYXkpXHJcblx0XHQvLyB0aGlzLnNhdmVBcnJheVRvU3RyaW5nKHRoaXMuZGlzcGxheUFycmF5KTtcclxuXHRcdC8vIHRoaXMuc2F2ZVRhcFRvU3RyaW5nKHRoaXMudGFwcGVkKTtcclxuXHR9XHJcblx0aW5wdXRUZXh0OiBzdHJpbmcgPSBcIlwiO1xyXG5cdG9uUmV0dXJuKGk6IG51bWJlcilcclxuXHR7XHJcblx0XHRsZXQgcyA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxUZXh0RmllbGQ+KFwibXlBZGRcIik7XHJcblx0XHRsZXQgdmFsID0gcy50ZXh0O1xyXG5cclxuXHRcdGxldCB2YWxBcnIgPSB2YWwuc3BsaXQoXCIgXCIpO1xyXG5cdFx0bGV0IHN0YXJ0ID0gLTE7XHJcblx0XHRsZXQgZW5kID0gLTE7XHJcblx0XHRpZiAodmFsQXJyWzBdICE9PSBcIlwiKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IgKGxldCBpbmQgPSBpOyBpbmQgPCBpICsgdmFsQXJyLmxlbmd0aDsgaW5kKyspXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmRpc3BsYXlBcnJheS5zcGxpY2UoaW5kICsgMSwgMCwgdmFsQXJyW2luZCAtIGldKTtcclxuXHJcblx0XHRcdFx0aWYgKHZhbEFycltpbmQgLSBpXS5pbmRleE9mKFwiW2NdXCIpID4gLTEpIHN0YXJ0ID0gaW5kO1xyXG5cdFx0XHRcdGlmICh2YWxBcnJbaW5kIC0gaV0uaW5kZXhPZihcIlsvY11cIikgPiAtMSkgZW5kID0gaW5kO1xyXG5cclxuXHRcdFx0XHQvLyB0aGlzLnRhcHBlZC5zcGxpY2UoaW5kICsgMSwgMCwgXCJhZGRcIik7XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc29sZS5sb2coc3RhcnQpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlbmQpO1xyXG5cdFx0XHRmb3IgKGxldCBpbmQgPSBpOyBpbmQgPCBpICsgdmFsQXJyLmxlbmd0aDsgaW5kKyspXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoaW5kID49IHN0YXJ0ICYmIGluZCA8PSBlbmQpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy50YXBwZWQuc3BsaWNlKGluZCArIDEsIDAsIFwiY29tbWVudFwiKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMudGFwcGVkLnNwbGljZShpbmQgKyAxLCAwLCBcImFkZFwiKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc29sZS5sb2cocy50ZXh0KTtcclxuXHRcdGNvbnNvbGUubG9nKFwiZW50ZXJlZFwiKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMudGFwcGVkKTtcclxuXHRcdC8vIHRoaXMuZGlzcGxheUFycmF5LnNwbGljZShpICsgMSwgMCwgXCJ0ZXN0XCIpO1xyXG5cdFx0Ly8gdGhpcy50YXBwZWQuc3BsaWNlKGkgKyAxLCAwLCBcImFkZFwiKTtcclxuXHRcdHRoaXMuc2F2ZUFycmF5VG9TdHJpbmcodGhpcy5kaXNwbGF5QXJyYXkpO1xyXG5cdFx0dGhpcy5zYXZlVGFwVG9TdHJpbmcodGhpcy50YXBwZWQpO1xyXG5cdFx0dGhpcy5zZWxlY3RlZFdvcmRJbmRleCA9IC0xO1xyXG5cdH1cclxuXHJcblx0aW5zZXJ0Q29tbWVudChpOiBudW1iZXIpXHJcblx0eyBcclxuXHRcdGxldCBzID0gdGhpcy5wYWdlLmdldFZpZXdCeUlkPFRleHRGaWVsZD4oXCJteUFkZFwiKTtcclxuXHRcdHMudGV4dCArPSBcIltjXVsvY11cIjsgXHJcblxyXG5cdH1cclxuXHJcblxyXG5cclxufSAiXX0=