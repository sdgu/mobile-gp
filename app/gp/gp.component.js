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
    Object.defineProperty(GpComponent.prototype, "_displayArray", {
        get: function () {
            return this.displayArray;
        },
        enumerable: true,
        configurable: true
    });
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
            (_a = this.displayArray).splice.apply(_a, [i + 1, 0].concat(valArr));
            for (var ind = i; ind < i + valArr.length; ind++) {
                // this.displayArray.splice(ind + 1, 0, valArr[ind - i]);
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
        var _a;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3AuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ3AuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUEwRTtBQUUxRSxzREFBOEQ7QUFFOUQsZ0NBQStCO0FBRS9CLDhEQUE4RDtBQUM5RCw2REFVOEI7QUFXOUI7SUEwRkMscUJBQTJCLEtBQXFCLEVBQVUsTUFBYyxFQUFVLGdCQUFrQyxFQUFVLElBQVU7UUFBeEksaUJBeUNDO1FBekMwQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQXJGakksVUFBSyxHQUFrQixFQUFFLENBQUM7UUFDMUIsaUJBQVksR0FBa0IsRUFBRSxDQUFDO1FBR2pDLGdCQUFXLEdBQUcsNkJBQTZCLENBQUM7UUFDNUMsaUJBQVksR0FBRyxrQkFBa0IsQ0FBQztRQUNsQyxtQkFBYyxHQUFHLGlDQUFpQyxDQUFDO1FBQ25ELG9CQUFlLEdBQUcsd0JBQXdCLENBQUM7UUFnRGxELHVDQUF1QztRQUN2QyxJQUFJO1FBQ0osc0RBQXNEO1FBQ3RELGlCQUFpQjtRQUNqQixjQUFjO1FBQ2Qsd0RBQXdEO1FBQ3hELHVCQUF1QjtRQUN2QixxREFBcUQ7UUFDckQsc0JBQXNCO1FBQ3RCLDJEQUEyRDtRQUMzRCxLQUFLO1FBQ0wseUNBQXlDO1FBQ3pDLG9CQUFvQjtRQUNwQixpQkFBaUI7UUFDakIsU0FBUztRQUNULE1BQU07UUFDTixlQUFlO1FBQ2YsSUFBSTtRQUNKLGNBQVMsR0FBRyxHQUFHLENBQUM7UUFzRGYsU0FBUztRQUNULElBQUk7UUFDSixrQ0FBa0M7UUFDbEMsOENBQThDO1FBQzlDLE1BQU07UUFDTixtQkFBbUI7UUFDbkIsUUFBUTtRQUNSLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIsUUFBUTtRQUVSLE9BQU87UUFDUCxrREFBa0Q7UUFDbEQsSUFBSTtRQUNGLFdBQU0sR0FBa0IsRUFBRSxDQUFDO1FBZ0U5QixzQkFBaUIsR0FBVyxDQUFDLENBQUMsQ0FBQztRQXlDL0IsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQS9KdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUMvQixVQUFBLE1BQU07WUFFTCxxQkFBcUI7WUFDckIsQ0FBQztnQkFDQSxLQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDM0IsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBLHVDQUF1QztnQkFDM0Usa0NBQWtDO2dCQUNsQywyREFBMkQ7Z0JBQzNELEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDekMsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUEsMkJBQTJCO2dCQUUxRCw0QkFBSyxFQUFFLENBQUM7Z0JBQ1IsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDMUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2xDLHlDQUF5QztnQkFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQTtnQkFFekIsa0NBQWtDO1lBRW5DLENBQUM7WUFDSCxZQUFZO1lBQ1osU0FBUztZQUNULHNDQUFzQztZQUN0QyxrREFBa0Q7WUFDbEQsd0RBQXdEO1lBQ3hELDJDQUEyQztZQUMzQyxTQUFTO1FBRVIsQ0FBQyxDQUFDLENBQUE7UUFHSCw4QkFBOEI7UUFDOUIsUUFBUTtRQUNSLEtBQUs7UUFDTCw0QkFBNEI7UUFDNUIsb0RBQW9EO1FBQ3BELG9DQUFvQztRQUNwQyxNQUFNO0lBQ1AsQ0FBQztJQXBIRCxzQkFBVyxzQ0FBYTthQUF4QjtZQUNPLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBR0osdUNBQWlCLEdBQWpCLFVBQWtCLEdBQWtCO1FBRW5DLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQSwwQkFBMEI7UUFDbEQsZ0NBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEIsdUNBQXVDO1FBQ3ZDLElBQUk7UUFDSix3Q0FBd0M7UUFDeEMsNkNBQTZDO1FBQzdDLElBQUk7SUFDTCxDQUFDO0lBQ0QscUNBQWUsR0FBZixVQUFnQixHQUFrQjtRQUVqQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLGdDQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCw0QkFBTSxHQUFOO1FBRUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCwyQkFBSyxHQUFMO1FBRUUsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNoQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRXRCLElBQUksZ0JBQWdCLEdBQ3BCO1lBQ0UsV0FBVyxFQUNYO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLFNBQVMsRUFBRSxPQUFPO2dCQUNsQixRQUFRLEVBQUUsTUFBTTthQUNqQjtTQUVGLENBQUM7UUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDakQsQ0FBQztJQXNCSixtQ0FBYSxHQUFiO1FBRUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxHQUFHLENBQUM7SUFDdkIsQ0FBQztJQUdELDhCQUFRLEdBQVI7UUFFQyxvREFBb0Q7SUFDckQsQ0FBQztJQTJEQyw0QkFBTSxHQUFOLFVBQU8sQ0FBUztRQUVmLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQ2hDLENBQUM7WUFDQSxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2QsQ0FBQztRQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUNsQyxDQUFDO1lBQ0EsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNmLENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FDdEMsQ0FBQztZQUNBLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDaEIsQ0FBQztRQUNELElBQUksQ0FDSixDQUFDO1lBQ0EsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNoQixDQUFDO0lBRUYsQ0FBQztJQUNILGlDQUFXLEdBQVgsVUFBWSxDQUFTO1FBRXBCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQ2hDLENBQUM7WUFDQSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztRQUM1QixDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQ2xDLENBQUM7WUFDQSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFCLENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FDdEMsQ0FBQztZQUNBLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUIsQ0FBQztRQUNELElBQUksQ0FDSixDQUFDO1lBQ0EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUM7UUFDM0IsQ0FBQztRQUVELFlBQVk7UUFDWiwyQ0FBMkM7UUFDM0MsOERBQThEO1FBQzlELElBQUk7UUFDSixrR0FBa0c7UUFDbEcsbUdBQW1HO1FBQ25HLElBQUk7UUFDSixnRUFBZ0U7UUFDaEUsSUFBSTtRQUNKLCtGQUErRjtRQUMvRixnR0FBZ0c7UUFFaEcsSUFBSTtRQUNKLE9BQU87UUFDUCxJQUFJO1FBQ0osNkZBQTZGO1FBRTdGLElBQUk7UUFDSixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFJRCxrQ0FBWSxHQUFaLFVBQWEsQ0FBUztRQUF0QixpQkFzQ0M7UUFwQ0EsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQ2xDLENBQUM7WUFDQSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLFVBQVUsQ0FBQztnQkFFVixLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBWSxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUNsRCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDUixDQUFDO1FBQ0QsSUFBSSxDQUNKLENBQUM7WUFDQSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO1lBRzNCLFVBQVUsQ0FBQztnQkFFVixJQUFJLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBWSxPQUFPLENBQUMsQ0FBQztnQkFDbEQsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7Z0JBQ1osQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ1YsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ1IsQ0FBQztRQUdELGtCQUFrQjtRQUNsQix1Q0FBdUM7UUFFdkMscUVBQXFFO1FBQ3JFLGlCQUFpQjtRQUdqQixZQUFZO1FBQ1osOENBQThDO1FBQzlDLHVDQUF1QztRQUN2QywyQkFBMkI7UUFDM0IsaUNBQWlDO1FBQ2pDLDZDQUE2QztRQUM3QyxxQ0FBcUM7SUFDdEMsQ0FBQztJQUVELDhCQUFRLEdBQVIsVUFBUyxDQUFTO1FBRWpCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFZLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFFakIsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNmLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2IsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUNyQixDQUFDO1lBQ0EsQ0FBQSxLQUFBLElBQUksQ0FBQyxZQUFZLENBQUEsQ0FBQyxNQUFNLFlBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFNBQUssTUFBTSxHQUFFO1lBQzlDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQ2hELENBQUM7Z0JBQ0EseURBQXlEO2dCQUV6RCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUNyRCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO2dCQUVwRCx5Q0FBeUM7WUFDMUMsQ0FBQztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUNoRCxDQUFDO2dCQUNBLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUMvQixDQUFDO29CQUNBLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO2dCQUNELElBQUksQ0FDSixDQUFDO29CQUNBLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUN2QyxDQUFDO1lBRUYsQ0FBQztRQUVGLENBQUM7UUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLDRCQUE0QjtRQUM1Qiw4Q0FBOEM7UUFDOUMsdUNBQXVDO1FBQ3ZDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxDQUFDOztJQUM3QixDQUFDO0lBRUQsbUNBQWEsR0FBYixVQUFjLENBQVM7UUFFdEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQVksT0FBTyxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFDLElBQUksSUFBSSxTQUFTLENBQUM7SUFFckIsQ0FBQztJQWhUVyxXQUFXO1FBVHZCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsSUFBSTtZQUNkLHVCQUF1QjtZQUN2QixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixFQUFFLHFCQUFxQixDQUFDO1NBQzVELENBQUM7eUNBOEZpQyx1QkFBYyxFQUFrQixlQUFNLEVBQTRCLHlCQUFnQixFQUFnQixXQUFJO09BMUY1SCxXQUFXLENBb1R2QjtJQUFELGtCQUFDO0NBQUEsQUFwVEQsSUFvVEM7QUFwVFksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkV4dHJhcywgQWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVGV4dFZpZXcgfSBmcm9tIFwidWkvdGV4dC12aWV3XCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCJcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7IFxyXG5pbXBvcnQgeyBHcCB9IGZyb20gXCIuL2dwXCI7XHJcbi8vIGltcG9ydCB7IFJhZExpc3RWaWV3IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvbGlzdHZpZXdcIjtcclxuaW1wb3J0IHtcclxuICAgIGdldEJvb2xlYW4sXHJcbiAgICBzZXRCb29sZWFuLFxyXG4gICAgZ2V0TnVtYmVyLFxyXG4gICAgc2V0TnVtYmVyLFxyXG4gICAgZ2V0U3RyaW5nLFxyXG4gICAgc2V0U3RyaW5nLFxyXG4gICAgaGFzS2V5LFxyXG4gICAgcmVtb3ZlLFxyXG4gICAgY2xlYXJcclxufSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjsgXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJncFwiLFxyXG4gIC8vIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9ncC9ncC5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9ncC9ncC5jb21wb25lbnQuY3NzXCIsIFwiLi9hcHAuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgR3BDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXRcclxue1xyXG5cdHByaXZhdGUgdGVzdDogQXJyYXk8R3A+O1xyXG5cclxuXHRwdWJsaWMgdGV4dDogc3RyaW5nO1xyXG5cdHB1YmxpYyB3b3JkczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG5cdHB1YmxpYyBkaXNwbGF5QXJyYXk6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuXHJcblxyXG5cdHB1YmxpYyBodG1sQWRkT3BlbiA9IFwiPHN0cm9uZz48Zm9udCBjb2xvcj0nYmx1ZSc+XCI7XHJcblx0cHVibGljIGh0bWxBZGRDbG9zZSA9IFwiPC9mb250Pjwvc3Ryb25nPlwiO1xyXG5cdHB1YmxpYyBodG1sUmVtb3ZlT3BlbiA9IFwiPGRlbD48c3Ryb25nPjxmb250IGNvbG9yPSdyZWQnPlwiO1xyXG5cdHB1YmxpYyBodG1sUmVtb3ZlQ2xvc2UgPSBcIjwvZm9udD48L3N0cm9uZz48L2RlbD5cIjtcclxuXHJcblxyXG5cdHB1YmxpYyBnZXQgX2Rpc3BsYXlBcnJheSgpOiBBcnJheTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kaXNwbGF5QXJyYXk7XHJcbiAgICB9XHJcblxyXG5cclxuXHRzYXZlQXJyYXlUb1N0cmluZyhhcnI6IEFycmF5PHN0cmluZz4pXHJcblx0e1xyXG5cdFx0bGV0IHMgPSBhcnIuam9pbihcIiQjQFwiKTsvLy5yZXBsYWNlKC88YnI+L2csIFwiXFxuXCIpO1xyXG5cdFx0c2V0U3RyaW5nKFwiZGlzcFN0clwiLCBzKTtcclxuXHRcdC8vIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKVxyXG5cdFx0Ly8ge1xyXG5cdFx0Ly8gXHRzZXRTdHJpbmcoXCJkaXNwbGF5U3RyXCIgKyBpLCBhcnJbaV0pO1xyXG5cdFx0Ly8gXHQvLyBjb25zb2xlLmxvZyhnZXRTdHJpbmcoXCJkaXNwbGF5U3RyMFwiKSk7XHJcblx0XHQvLyB9XHJcblx0fVxyXG5cdHNhdmVUYXBUb1N0cmluZyhhcnI6IEFycmF5PHN0cmluZz4pXHJcblx0e1xyXG5cdFx0bGV0IHMgPSBhcnIuam9pbihcIiQlJVwiKTtcclxuXHRcdHNldFN0cmluZyhcInRhcFN0clwiLCBzKTtcclxuXHR9XHJcblxyXG5cdGdvQmFjaygpXHJcblx0e1xyXG5cdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcclxuXHR9XHJcblxyXG5cdGdldEJCKClcclxuXHR7XHJcblx0ICBsZXQgZGlzcEFyciA9IHRoaXMuZGlzcGxheUFycmF5O1xyXG5cdCAgbGV0IHRhcEFyciA9IHRoaXMudGFwcGVkO1xyXG4gICAgICBcclxuICAgICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSBcclxuICAgICAge1xyXG4gICAgICAgIHF1ZXJ5UGFyYW1zOlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwibmV3XCI6IHRydWUsXHJcbiAgICAgICAgICBcImRpc3BBcnJcIjogZGlzcEFycixcclxuICAgICAgICAgIFwidGFwQXJyXCI6IHRhcEFyclxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImJiXCJdLCBuYXZpZ2F0aW9uRXh0cmFzKTtcclxuICAgIH1cclxuXHRcclxuXHJcblx0Ly8gZ2V0QXJyYXlGcm9tU3RyaW5ncygpOiBBcnJheTxzdHJpbmc+XHJcblx0Ly8ge1xyXG5cdC8vIFx0Y29uc29sZS5sb2coXCJlbnRlcmVkIGdldGFycmF5ZnJvbXN0cmluZ3MgZnJvbSBncFwiKVxyXG5cdC8vIFx0bGV0IGFyciA9IFtdO1xyXG5cdC8vIFx0bGV0IGkgPSAwO1xyXG5cdC8vIFx0Ly8gbGV0IHMyID0gZ2V0U3RyaW5nKFwiZGlzcGxheVN0cjBcIiwgXCJub3QgcHJlc2VudFwiKTtcclxuXHQvLyBcdC8vIGNvbnNvbGUubG9nKHMyKTtcclxuXHQvLyBcdC8vIGxldCBzMyA9IGdldFN0cmluZyhcImRpbGFvZXN0XCIsIFwibm90IHByZXNlbnRcIik7XHJcblx0Ly8gXHQvLyBjb25zb2xlLmxvZyhzMylcclxuXHQvLyBcdHdoaWxlKGdldFN0cmluZyhcImRpc3BsYXlTdHJcIiArIGksIFwiZmFsc2VcIikgIT09IFwiZmFsc2VcIilcclxuXHQvLyBcdHtcclxuXHQvLyBcdFx0bGV0IHMgPSBnZXRTdHJpbmcoXCJkaXNwbGF5U3RyXCIgKyBpKTtcclxuXHQvLyBcdFx0Y29uc29sZS5sb2cocyk7XHJcblx0Ly8gXHRcdGFyci5wdXNoKHMpO1xyXG5cdC8vIFx0XHRpKys7XHJcblx0Ly8gXHR9O1xyXG5cdC8vIFx0cmV0dXJuIGFycjtcclxuXHQvLyB9XHJcblx0c2hvd0xpbWl0ID0gMjAwO1xyXG5cdGluY3JlYXNlTGltaXQoKVxyXG5cdHtcclxuXHRcdHRoaXMuc2hvd0xpbWl0ICs9IDIwMDtcclxuXHR9XHJcblxyXG5cdHRlc3RBcnI6IEFycmF5PEdwPjtcclxuXHRuZ09uSW5pdCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gdGhpcy50ZXN0QXJyID0gW3tcInRleHRcIjogXCJ0ZXN0XCJ9LCB7XCJ0ZXh0XCI6IFwiaGlcIn1dXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBwYWdlOiBQYWdlKVxyXG5cdHtcclxuXHRcdHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKFxyXG5cdFx0XHRwYXJhbXMgPT5cclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGlmIChwYXJhbXNbXCJuZXdcIl0pXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy50ZXh0ID0gcGFyYW1zW1widGV4dFwiXTtcclxuXHRcdFx0XHRcdHRoaXMud29yZHMgPSB0aGlzLnRleHQuc3BsaXQoXCIkI0BcIik7Ly8ucmVwbGFjZSgvXFxuL2csIFwiPGJyPlwiKS5zcGxpdChcIiQjQFwiKTtcclxuXHRcdFx0XHRcdC8vIHRoaXMuZGlzcGxheUFycmF5ID0gdGhpcy53b3JkcztcclxuXHRcdFx0XHRcdC8vIHRoaXMud29yZHMubWFwKHggPT4gXCI8Zm9udCBzaXplPScyMCc+XCIgKyB4ICsgXCI8L2ZvbnQ+XCIpO1xyXG5cdFx0XHRcdFx0dGhpcy50YXBwZWQgPSBwYXJhbXNbXCJ0YXBcIl0uc3BsaXQoXCIkJSVcIik7XHJcblx0XHRcdFx0XHR0aGlzLmRpc3BsYXlBcnJheSA9IHRoaXMud29yZHM7Ly8ubWFwKHggPT4gXCIgXCIgKyB4ICsgXCIgXCIpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRjbGVhcigpOyBcclxuXHRcdFx0XHRcdHRoaXMuc2F2ZUFycmF5VG9TdHJpbmcodGhpcy5kaXNwbGF5QXJyYXkpO1xyXG5cdFx0XHRcdFx0dGhpcy5zYXZlVGFwVG9TdHJpbmcodGhpcy50YXBwZWQpO1xyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZ2V0U3RyaW5nKFwiZGlzcGxheVN0cjBcIikpO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJwYXJhbXMgbmV3XCIpXHJcblxyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhpcy5kaXNwbGF5QXJyYXkpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0Ly8gXHRcdC8vIGVsc2VcclxuXHRcdC8vIFx0XHQvLyB7XHJcblx0XHQvLyBcdFx0Ly8gXHRjb25zb2xlLmxvZyhcInBhcmFtcyBub3QgbmV3XCIpXHJcblx0XHQvLyBcdFx0Ly8gXHQvLyBjb25zb2xlLmxvZyhnZXRTdHJpbmcoXCJkaXNwbGF5U3RyMFwiKSk7XHJcblx0XHQvLyBcdFx0Ly8gXHR0aGlzLmRpc3BsYXlBcnJheSA9IHRoaXMuZ2V0QXJyYXlGcm9tU3RyaW5ncygpO1xyXG5cdFx0Ly8gXHRcdC8vIFx0Ly8gY29uc29sZS5sb2codGhpcy5kaXNwbGF5QXJyYXkpO1xyXG5cdFx0Ly8gXHRcdC8vIH1cclxuXHRcdFx0XHRcclxuXHRcdFx0fSlcclxuXHJcblxyXG5cdFx0Ly8gdGhpcy5yb3V0ZS5xUGFycy5zdWJzY3JpYmUoXHJcblx0XHQvLyBcdHAgPT5cclxuXHRcdC8vIFx0e1xyXG5cdFx0Ly8gXHRcdGNvbnNvbGUubG9nKFwibm90IG5ld1wiKTtcclxuXHRcdC8vIFx0XHR0aGlzLmRpc3BsYXlBcnJheSA9IHRoaXMuZ2V0QXJyYXlGcm9tU3RyaW5ncygpO1xyXG5cdFx0Ly8gXHRcdGNvbnNvbGUubG9nKHRoaXMuZGlzcGxheUFycmF5KTtcclxuXHRcdC8vIFx0fSlcclxuXHR9XHJcbiAgLy8gYmFjaygpXHJcbiAgLy8ge1xyXG4gIC8vICAgLy8gYWxlcnQodGhpcy50ZXh0VG9QcmVwYXJlKTtcclxuICAvLyAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0gXHJcbiAgLy8gICB7XHJcbiAgLy8gICAgIHF1ZXJ5UGFyYW1zOlxyXG4gIC8vICAgICB7XHJcbiAgLy8gICAgICAgXCJuZXdcIjogdHJ1ZSxcclxuICAvLyAgICAgICBcInRleHRcIjogXCJcIlxyXG4gIC8vICAgICB9XHJcblxyXG4gIC8vICAgfTtcclxuICAvLyAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIlwiXSwgbmF2aWdhdGlvbkV4dHJhcyk7XHJcbiAgLy8gfVxyXG4gICAgdGFwcGVkOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgXHRnZXRDb2woaTogbnVtYmVyKTogc3RyaW5nXHJcbiAgXHR7XHJcbiAgXHRcdGlmICh0aGlzLnRhcHBlZFtpXSA9PT0gXCJyZW1vdmVcIilcclxuICBcdFx0e1xyXG4gIFx0XHRcdHJldHVybiBcInJlZFwiO1xyXG4gIFx0XHR9XHJcbiAgXHRcdGVsc2UgaWYgKHRoaXMudGFwcGVkW2ldID09PSBcImFkZFwiKVxyXG4gIFx0XHR7XHJcbiAgXHRcdFx0cmV0dXJuIFwiYmx1ZVwiO1xyXG4gIFx0XHR9XHJcbiAgXHRcdGVsc2UgaWYgKHRoaXMudGFwcGVkW2ldID09PSBcImNvbW1lbnRcIilcclxuICBcdFx0e1xyXG4gIFx0XHRcdHJldHVybiBcImdyZWVuXCI7XHJcbiAgXHRcdH1cclxuICBcdFx0ZWxzZVxyXG4gIFx0XHR7XHJcbiAgXHRcdFx0cmV0dXJuIFwiYmxhY2tcIjtcclxuICBcdFx0fVxyXG4gIFx0XHRcclxuICBcdH1cclxuXHRwcm9jZXNzV29yZChpOiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMudGFwcGVkW2ldID09PSBcInJlbW92ZVwiKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnRhcHBlZFtpXSA9IFwibmV1dHJhbFwiO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodGhpcy50YXBwZWRbaV0gPT09IFwiYWRkXCIpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuZGlzcGxheUFycmF5LnNwbGljZShpLCAxKTtcclxuXHRcdFx0dGhpcy50YXBwZWQuc3BsaWNlKGksIDEpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodGhpcy50YXBwZWRbaV0gPT09IFwiY29tbWVudFwiKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmRpc3BsYXlBcnJheS5zcGxpY2UoaSwgMSk7XHJcblx0XHRcdHRoaXMudGFwcGVkLnNwbGljZShpLCAxKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0dGhpcy50YXBwZWRbaV0gPSBcInJlbW92ZVwiO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvLyBhbGVydChpKTtcclxuXHRcdC8vIGFsZXJ0KGdldFN0cmluZyhcInRlc3QxXCIsIFwibm90IHByZXNlbnRcIikpXHJcblx0XHQvLyBpZiAodGhpcy5kaXNwbGF5QXJyYXlbaV0uaW5kZXhPZih0aGlzLmh0bWxSZW1vdmVPcGVuKSA+IC0xKVxyXG5cdFx0Ly8ge1xyXG5cdFx0Ly8gXHR0aGlzLmRpc3BsYXlBcnJheVtpXSA9IHRoaXMuZGlzcGxheUFycmF5W2ldLnJlcGxhY2UobmV3IFJlZ0V4cCh0aGlzLmh0bWxSZW1vdmVPcGVuLCBcImdcIiksIFwiXCIpO1xyXG5cdFx0Ly8gXHR0aGlzLmRpc3BsYXlBcnJheVtpXSA9IHRoaXMuZGlzcGxheUFycmF5W2ldLnJlcGxhY2UobmV3IFJlZ0V4cCh0aGlzLmh0bWxSZW1vdmVDbG9zZSwgXCJnXCIpLCBcIlwiKTtcclxuXHRcdC8vIH1cclxuXHRcdC8vIGVsc2UgaWYgKHRoaXMuZGlzcGxheUFycmF5W2ldLmluZGV4T2YodGhpcy5odG1sQWRkT3BlbikgPiAtMSlcclxuXHRcdC8vIHtcclxuXHRcdC8vIFx0dGhpcy5kaXNwbGF5QXJyYXlbaV0gPSB0aGlzLmRpc3BsYXlBcnJheVtpXS5yZXBsYWNlKG5ldyBSZWdFeHAodGhpcy5odG1sQWRkT3BlbiwgXCJnXCIpLCBcIlwiKTtcclxuXHRcdC8vIFx0dGhpcy5kaXNwbGF5QXJyYXlbaV0gPSB0aGlzLmRpc3BsYXlBcnJheVtpXS5yZXBsYWNlKG5ldyBSZWdFeHAodGhpcy5odG1sQWRkQ2xvc2UsIFwiZ1wiKSwgXCJcIik7XHJcblxyXG5cdFx0Ly8gfVxyXG5cdFx0Ly8gZWxzZVxyXG5cdFx0Ly8ge1xyXG5cdFx0Ly8gXHR0aGlzLmRpc3BsYXlBcnJheVtpXSA9IHRoaXMuaHRtbFJlbW92ZU9wZW4gKyB0aGlzLmRpc3BsYXlBcnJheVtpXSArIHRoaXMuaHRtbFJlbW92ZUNsb3NlO1xyXG5cclxuXHRcdC8vIH1cclxuXHRcdHRoaXMuc2F2ZUFycmF5VG9TdHJpbmcodGhpcy5kaXNwbGF5QXJyYXkpO1xyXG5cdFx0dGhpcy5zYXZlVGFwVG9TdHJpbmcodGhpcy50YXBwZWQpO1xyXG5cdH1cclxuXHJcblx0c2VsZWN0ZWRXb3JkSW5kZXg6IG51bWJlciA9IC0xO1xyXG5cclxuXHRwcm9jZXNzU3dpcGUoaTogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnNlbGVjdGVkV29yZEluZGV4ID09PSAtMSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZFdvcmRJbmRleCA9IGk7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT5cclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMucGFnZS5nZXRWaWV3QnlJZDxUZXh0RmllbGQ+KFwibXlBZGRcIikuZm9jdXMoKVxyXG5cdFx0XHR9LCAxMDApXHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRXb3JkSW5kZXggPSBpO1xyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT5cclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBzID0gdGhpcy5wYWdlLmdldFZpZXdCeUlkPFRleHRGaWVsZD4oXCJteUFkZFwiKTtcclxuXHRcdFx0XHRzLnRleHQgPSBcIlwiO1xyXG5cdFx0XHRcdHMuZm9jdXMoKVxyXG5cdFx0XHR9LCAxMDApXHJcblx0XHR9XHJcblxyXG5cdFx0XHJcblx0XHQvLyBjb25zb2xlLmxvZyhpKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWRXb3JkSW5kZXgpO1xyXG5cclxuXHRcdC8vIGxldCBteUFkZDogVGV4dEZpZWxkID0gPFRleHRGaWVsZD4gdGhpcy5wYWdlLmdldFZpZXdCeUlkKFwibXlBZGRcIik7XHJcblx0XHQvLyBteUFkZC5mb2N1cygpO1xyXG5cclxuXHJcblx0XHQvLyBhbGVydChpKTtcclxuXHRcdC8vIHRoaXMuZGlzcGxheUFycmF5LnNwbGljZShpICsgMSwgMCwgXCJ0ZXN0XCIpO1xyXG5cdFx0Ly8gdGhpcy50YXBwZWQuc3BsaWNlKGkgKyAxLCAwLCBcImFkZFwiKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMudGFwcGVkKVxyXG5cdFx0Ly8gY29uc29sZS5sb2codGhpcy5kaXNwbGF5QXJyYXkpXHJcblx0XHQvLyB0aGlzLnNhdmVBcnJheVRvU3RyaW5nKHRoaXMuZGlzcGxheUFycmF5KTtcclxuXHRcdC8vIHRoaXMuc2F2ZVRhcFRvU3RyaW5nKHRoaXMudGFwcGVkKTtcclxuXHR9XHJcblx0aW5wdXRUZXh0OiBzdHJpbmcgPSBcIlwiOyBcclxuXHRvblJldHVybihpOiBudW1iZXIpXHJcblx0e1xyXG5cdFx0bGV0IHMgPSB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8VGV4dEZpZWxkPihcIm15QWRkXCIpO1xyXG5cdFx0bGV0IHZhbCA9IHMudGV4dDtcclxuXHJcblx0XHRsZXQgdmFsQXJyID0gdmFsLnNwbGl0KFwiIFwiKTtcclxuXHRcdGxldCBzdGFydCA9IC0xO1xyXG5cdFx0bGV0IGVuZCA9IC0xO1xyXG5cdFx0aWYgKHZhbEFyclswXSAhPT0gXCJcIilcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5kaXNwbGF5QXJyYXkuc3BsaWNlKGkgKyAxLCAwLCAuLi52YWxBcnIpO1xyXG5cdFx0XHRmb3IgKGxldCBpbmQgPSBpOyBpbmQgPCBpICsgdmFsQXJyLmxlbmd0aDsgaW5kKyspXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyB0aGlzLmRpc3BsYXlBcnJheS5zcGxpY2UoaW5kICsgMSwgMCwgdmFsQXJyW2luZCAtIGldKTtcclxuXHJcblx0XHRcdFx0aWYgKHZhbEFycltpbmQgLSBpXS5pbmRleE9mKFwiW2NdXCIpID4gLTEpIHN0YXJ0ID0gaW5kO1xyXG5cdFx0XHRcdGlmICh2YWxBcnJbaW5kIC0gaV0uaW5kZXhPZihcIlsvY11cIikgPiAtMSkgZW5kID0gaW5kO1xyXG5cclxuXHRcdFx0XHQvLyB0aGlzLnRhcHBlZC5zcGxpY2UoaW5kICsgMSwgMCwgXCJhZGRcIik7XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc29sZS5sb2coc3RhcnQpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlbmQpO1xyXG5cdFx0XHRmb3IgKGxldCBpbmQgPSBpOyBpbmQgPCBpICsgdmFsQXJyLmxlbmd0aDsgaW5kKyspXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoaW5kID49IHN0YXJ0ICYmIGluZCA8PSBlbmQpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy50YXBwZWQuc3BsaWNlKGluZCArIDEsIDAsIFwiY29tbWVudFwiKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMudGFwcGVkLnNwbGljZShpbmQgKyAxLCAwLCBcImFkZFwiKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc29sZS5sb2cocy50ZXh0KTtcclxuXHRcdGNvbnNvbGUubG9nKFwiZW50ZXJlZFwiKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMudGFwcGVkKTtcclxuXHRcdC8vIHRoaXMuZGlzcGxheUFycmF5LnNwbGljZShpICsgMSwgMCwgXCJ0ZXN0XCIpO1xyXG5cdFx0Ly8gdGhpcy50YXBwZWQuc3BsaWNlKGkgKyAxLCAwLCBcImFkZFwiKTtcclxuXHRcdHRoaXMuc2F2ZUFycmF5VG9TdHJpbmcodGhpcy5kaXNwbGF5QXJyYXkpO1xyXG5cdFx0dGhpcy5zYXZlVGFwVG9TdHJpbmcodGhpcy50YXBwZWQpO1xyXG5cdFx0dGhpcy5zZWxlY3RlZFdvcmRJbmRleCA9IC0xO1xyXG5cdH1cclxuXHJcblx0aW5zZXJ0Q29tbWVudChpOiBudW1iZXIpXHJcblx0eyBcclxuXHRcdGxldCBzID0gdGhpcy5wYWdlLmdldFZpZXdCeUlkPFRleHRGaWVsZD4oXCJteUFkZFwiKTtcclxuXHRcdHMudGV4dCArPSBcIltjXVsvY11cIjsgXHJcblxyXG5cdH1cclxuXHJcblxyXG5cclxufSAiXX0=