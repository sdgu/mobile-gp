"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var page_1 = require("ui/page");
// import { RadListView } from "nativescript-pro-ui/listview";
var application_settings_1 = require("application-settings");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var GpComponent = (function () {
    function GpComponent(route, modal, vcRef, router, routerExtensions, page) {
        var _this = this;
        this.route = route;
        this.modal = modal;
        this.vcRef = vcRef;
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
        this.numToSpell = { "one": 0, "two": 1, "three": 2 };
        this.selectedWordIndex = -1;
        this.selectedCol = "";
        this.inputText = "";
        this.route.queryParams.subscribe(function (params) {
            // if (params["new"])
            {
                // this.testArr = [{"one": "hi", "two": "4", "three": "aou"}, {"one": "hai", "two": "e4", "three": "aoou"}]
                // this.testArr = [["hi", "4", "aou"], ["cool", "2", "3"]]
                _this.text = params["text"];
                _this.words = _this.text.split("$#@"); //.replace(/\n/g, "<br>").split("$#@");
                // this.displayArray = this.words;
                // this.words.map(x => "<font size='20'>" + x + "</font>");
                _this.tapped = params["tap"].split("$%%");
                _this.displayArray = _this.words; //.map(x => " " + x + " ");
                var oarr = _this.reshapeForCol(_this.displayArray, 3, "");
                _this.displayArray = oarr[0];
                _this.testArr = oarr[1];
                var tarr = _this.reshapeForCol(_this.tapped, 3, "neutral");
                _this.tapped = tarr[0];
                _this.testTap = tarr[1];
                // console.dir(this.testTap[789]);
                // console.dir(this.testTap.slice(790, 800));
                // console.log(this.tapped.slice(790*3));
                // console.log(this.displayArray.slice(790*3))
                // console.dir(this.testTap[791]);
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
        var da = this.displayArray;
        var ta = this.tapped;
        var navigationExtras = {
            queryParams: {
                "new": true,
                "dispArr": da,
                "tapArr": ta
            }
        };
        this.router.navigate(["bb"], navigationExtras);
    };
    GpComponent.prototype.increaseLimit = function () {
        this.showLimit += 200;
    };
    GpComponent.prototype.ngOnInit = function () {
        // this.testArr = [["hi", "4", "aou"], ["cool", "2", "3"]]
        // this.testArr = [{"text": "test"}, {"text": "hi"}]
    };
    GpComponent.prototype.reshapeArr = function (arr, n, s) {
        var newarr = arr;
        if (arr.length % n === 1) {
            newarr.push(s, s);
        }
        else if (arr.length % n === 2) {
            newarr.push(s);
        }
        return newarr;
    };
    GpComponent.prototype.reshapeForCol = function (arr, n, s) {
        var outarr = [];
        var newarr = this.reshapeArr(arr, n, s);
        for (var i = 0; i < newarr.length; i += 3) {
            outarr.push({ "one": newarr[i], "two": newarr[i + 1], "three": newarr[i + 2] });
            if (newarr[i] === "Practice") {
                // console.log(i);
                // console.dir(outarr);
            }
        }
        if (newarr[0] === "neutral") {
            // console.dir(outarr);
        }
        return [newarr, outarr];
    };
    GpComponent.prototype.getCol = function (i, n) {
        if (this.testTap[i] === undefined) {
            // console.log(i);
            // console.dir(this.testTap[790]);
            // console.dir(this.testArr[790]);
        }
        // console.dir(this.testTap[i]["one"]);
        if (this.testTap[i][n] === "remove") {
            return "red";
        }
        else if (this.testTap[i][n] === "add") {
            return "blue";
        }
        else if (this.testTap[i][n] === "comment") {
            return "green";
        }
        else {
            return "black";
        }
    };
    GpComponent.prototype.processWord = function (i, n) {
        var i2 = i * 3 + this.numToSpell[n];
        if (this.testTap[i][n] === "remove") {
            this.testTap[i][n] = "neutral";
            this.tapped[i2] = "neutral";
        }
        else if (this.testTap[i][n] === "add") {
            this.displayArray.splice(i2, 1);
            this.tapped.splice(i2, 1);
            var oarr = this.reshapeForCol(this.displayArray, 3, "");
            var tarr = this.reshapeForCol(this.tapped, 3, "neutral");
            this.displayArray = oarr[0];
            this.tapped = tarr[0];
            this.testArr = oarr[1];
            this.testTap = tarr[1];
        }
        else if (this.testTap[i][n] === "comment") {
            this.displayArray.splice(i2, 1);
            this.tapped.splice(i2, 1);
            var oarr = this.reshapeForCol(this.displayArray, 3, "");
            var tarr = this.reshapeForCol(this.tapped, 3, "neutral");
            this.displayArray = oarr[0];
            this.tapped = tarr[0];
            this.testArr = oarr[1];
            this.testTap = tarr[1];
        }
        else {
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
    };
    GpComponent.prototype.processSwipe = function (i, n) {
        var _this = this;
        if (this.selectedWordIndex === -1) {
            this.selectedWordIndex = i;
            this.selectedCol = n;
            setTimeout(function () {
                _this.page.getViewById("myAdd").focus();
            }, 100);
        }
        else {
            this.selectedWordIndex = i;
            this.selectedCol = n;
            setTimeout(function () {
                var s = _this.page.getViewById("myAdd");
                s.text = "";
                s.focus();
            }, 100);
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
    };
    GpComponent.prototype.onReturn = function (i, n) {
        var i2 = i * 3 + this.numToSpell[n];
        var s = this.page.getViewById("myAdd");
        var val = s.text;
        var valArr = val.split(" ");
        var start = -1;
        var end = -1;
        if (valArr[0] !== "") {
            (_a = this.displayArray).splice.apply(_a, [i2 + 1, 0].concat(valArr));
            for (var ind = i2; ind < i2 + valArr.length; ind++) {
                // this.displayArray.splice(ind + 1, 0, valArr[ind - i]);
                if (valArr[ind - i2].indexOf("[c]") > -1)
                    start = ind;
                if (valArr[ind - i2].indexOf("[/c]") > -1)
                    end = ind;
                // this.tapped.splice(ind + 1, 0, "add");
            }
            console.log(start);
            console.log(end);
            for (var ind = i2; ind < i2 + valArr.length; ind++) {
                if (ind >= start && ind <= end) {
                    this.tapped.splice(ind + 1, 0, "comment");
                }
                else {
                    this.tapped.splice(ind + 1, 0, "add");
                }
            }
            var oarr = this.reshapeForCol(this.displayArray, 3, "");
            var tarr = this.reshapeForCol(this.tapped, 3, "neutral");
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
        var _a;
    };
    GpComponent.prototype.showInputs = function (i, n) {
        return this.selectedWordIndex === i && this.selectedCol === n;
    };
    GpComponent.prototype.insertComment = function (i) {
        var s = this.page.getViewById("myAdd");
        s.text += "[c]  [/c] ";
    };
    GpComponent = __decorate([
        core_1.Component({
            selector: "gp",
            // moduleId: module.id,
            templateUrl: "./gp/gp.component.html",
            styleUrls: ["./gp/gp.component.css", "./app.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, dialogs_1.ModalDialogService, core_1.ViewContainerRef, router_1.Router, router_2.RouterExtensions, page_1.Page])
    ], GpComponent);
    return GpComponent;
}());
exports.GpComponent = GpComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3AuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ3AuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9FO0FBQ3BFLDBDQUEwRTtBQUUxRSxzREFBOEQ7QUFFOUQsZ0NBQStCO0FBRS9CLDhEQUE4RDtBQUM5RCw2REFVOEI7QUFJOUIsbUVBQTZFO0FBVzdFO0lBbUlDLHFCQUEyQixLQUFxQixFQUFVLEtBQXlCLEVBQVUsS0FBdUIsRUFBVSxNQUFjLEVBQVUsZ0JBQWtDLEVBQVUsSUFBVTtRQUE1TSxpQkEwREM7UUExRDBCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBb0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQTlIck0sVUFBSyxHQUFrQixFQUFFLENBQUM7UUFDMUIsaUJBQVksR0FBa0IsRUFBRSxDQUFDO1FBR2pDLGdCQUFXLEdBQUcsNkJBQTZCLENBQUM7UUFDNUMsaUJBQVksR0FBRyxrQkFBa0IsQ0FBQztRQUNsQyxtQkFBYyxHQUFHLGlDQUFpQyxDQUFDO1FBQ25ELG9CQUFlLEdBQUcsd0JBQXdCLENBQUM7UUFnRGxELHVDQUF1QztRQUN2QyxJQUFJO1FBQ0osc0RBQXNEO1FBQ3RELGlCQUFpQjtRQUNqQixjQUFjO1FBQ2Qsd0RBQXdEO1FBQ3hELHVCQUF1QjtRQUN2QixxREFBcUQ7UUFDckQsc0JBQXNCO1FBQ3RCLDJEQUEyRDtRQUMzRCxLQUFLO1FBQ0wseUNBQXlDO1FBQ3pDLG9CQUFvQjtRQUNwQixpQkFBaUI7UUFDakIsU0FBUztRQUNULE1BQU07UUFDTixlQUFlO1FBQ2YsSUFBSTtRQUNKLGNBQVMsR0FBRyxHQUFHLENBQUM7UUFnSGYsU0FBUztRQUNULElBQUk7UUFDSixrQ0FBa0M7UUFD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SSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDOztJQUN2QixDQUFDO0lBRUQsZ0NBQVUsR0FBVixVQUFXLENBQVMsRUFBRSxDQUFTO1FBRTlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxtQ0FBYSxHQUFiLFVBQWMsQ0FBUztRQUV0QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBWSxPQUFPLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUMsSUFBSSxJQUFJLFlBQVksQ0FBQztJQUV4QixDQUFDO0lBdGFXLFdBQVc7UUFUdkIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxJQUFJO1lBQ2QsdUJBQXVCO1lBQ3ZCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLEVBQUUscUJBQXFCLENBQUM7U0FDNUQsQ0FBQzt5Q0F1SWlDLHVCQUFjLEVBQWlCLDRCQUFrQixFQUFpQix1QkFBZ0IsRUFBa0IsZUFBTSxFQUE0Qix5QkFBZ0IsRUFBZ0IsV0FBSTtPQW5JaE0sV0FBVyxDQTBhdkI7SUFBRCxrQkFBQztDQUFBLEFBMWFELElBMGFDO0FBMWFZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXMsIEFjdGl2YXRlZFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFRleHRWaWV3IH0gZnJvbSBcInVpL3RleHQtdmlld1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiXHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiOyBcclxuaW1wb3J0IHsgR3AgfSBmcm9tIFwiLi9ncFwiO1xyXG4vLyBpbXBvcnQgeyBSYWRMaXN0VmlldyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL2xpc3R2aWV3XCI7XHJcbmltcG9ydCB7XHJcbiAgICBnZXRCb29sZWFuLFxyXG4gICAgc2V0Qm9vbGVhbixcclxuICAgIGdldE51bWJlcixcclxuICAgIHNldE51bWJlcixcclxuICAgIGdldFN0cmluZyxcclxuICAgIHNldFN0cmluZyxcclxuICAgIGhhc0tleSxcclxuICAgIHJlbW92ZSxcclxuICAgIGNsZWFyXHJcbn0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcblxyXG5pbXBvcnQgeyBUZXN0RmlsZSB9IGZyb20gXCIuLi90ZXN0RmlsZVwiO1xyXG5pbXBvcnQgeyBNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuLi9hcHAubW9kYWxcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiZ3BcIixcclxuICAvLyBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vZ3AvZ3AuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vZ3AvZ3AuY29tcG9uZW50LmNzc1wiLCBcIi4vYXBwLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEdwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0XHJcbntcclxuXHRwcml2YXRlIHRlc3Q6IEFycmF5PEdwPjtcclxuXHJcblx0cHVibGljIHRleHQ6IHN0cmluZztcclxuXHRwdWJsaWMgd29yZHM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuXHRwdWJsaWMgZGlzcGxheUFycmF5OiBBcnJheTxzdHJpbmc+ID0gW107XHJcblxyXG5cclxuXHRwdWJsaWMgaHRtbEFkZE9wZW4gPSBcIjxzdHJvbmc+PGZvbnQgY29sb3I9J2JsdWUnPlwiO1xyXG5cdHB1YmxpYyBodG1sQWRkQ2xvc2UgPSBcIjwvZm9udD48L3N0cm9uZz5cIjtcclxuXHRwdWJsaWMgaHRtbFJlbW92ZU9wZW4gPSBcIjxkZWw+PHN0cm9uZz48Zm9udCBjb2xvcj0ncmVkJz5cIjtcclxuXHRwdWJsaWMgaHRtbFJlbW92ZUNsb3NlID0gXCI8L2ZvbnQ+PC9zdHJvbmc+PC9kZWw+XCI7XHJcblxyXG5cclxuXHRwdWJsaWMgZ2V0IF9kaXNwbGF5QXJyYXkoKTogQXJyYXk8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzcGxheUFycmF5O1xyXG4gICAgfVxyXG5cclxuXHJcblx0c2F2ZUFycmF5VG9TdHJpbmcoYXJyOiBBcnJheTxzdHJpbmc+KVxyXG5cdHtcclxuXHRcdGxldCBzID0gYXJyLmpvaW4oXCIkI0BcIik7Ly8ucmVwbGFjZSgvPGJyPi9nLCBcIlxcblwiKTtcclxuXHRcdHNldFN0cmluZyhcImRpc3BTdHJcIiwgcyk7XHJcblx0XHQvLyBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKylcclxuXHRcdC8vIHtcclxuXHRcdC8vIFx0c2V0U3RyaW5nKFwiZGlzcGxheVN0clwiICsgaSwgYXJyW2ldKTtcclxuXHRcdC8vIFx0Ly8gY29uc29sZS5sb2coZ2V0U3RyaW5nKFwiZGlzcGxheVN0cjBcIikpO1xyXG5cdFx0Ly8gfVxyXG5cdH1cclxuXHRzYXZlVGFwVG9TdHJpbmcoYXJyOiBBcnJheTxzdHJpbmc+KVxyXG5cdHtcclxuXHRcdGxldCBzID0gYXJyLmpvaW4oXCIkJSVcIik7XHJcblx0XHRzZXRTdHJpbmcoXCJ0YXBTdHJcIiwgcyk7XHJcblx0fVxyXG5cclxuXHRnb0JhY2soKVxyXG5cdHtcclxuXHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XHJcblx0fVxyXG5cclxuXHRnZXRCQigpXHJcblx0e1xyXG5cdCAgbGV0IGRhID0gdGhpcy5kaXNwbGF5QXJyYXk7XHJcblx0ICBsZXQgdGEgPSB0aGlzLnRhcHBlZDtcclxuICAgICAgXHJcbiAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0gXHJcbiAgICAgIHtcclxuICAgICAgICBxdWVyeVBhcmFtczpcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcIm5ld1wiOiB0cnVlLFxyXG4gICAgICAgICAgXCJkaXNwQXJyXCI6IGRhLFxyXG4gICAgICAgICAgXCJ0YXBBcnJcIjogdGFcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJiYlwiXSwgbmF2aWdhdGlvbkV4dHJhcyk7XHJcbiAgICB9XHJcblx0XHJcblxyXG5cdC8vIGdldEFycmF5RnJvbVN0cmluZ3MoKTogQXJyYXk8c3RyaW5nPlxyXG5cdC8vIHtcclxuXHQvLyBcdGNvbnNvbGUubG9nKFwiZW50ZXJlZCBnZXRhcnJheWZyb21zdHJpbmdzIGZyb20gZ3BcIilcclxuXHQvLyBcdGxldCBhcnIgPSBbXTtcclxuXHQvLyBcdGxldCBpID0gMDtcclxuXHQvLyBcdC8vIGxldCBzMiA9IGdldFN0cmluZyhcImRpc3BsYXlTdHIwXCIsIFwibm90IHByZXNlbnRcIik7XHJcblx0Ly8gXHQvLyBjb25zb2xlLmxvZyhzMik7XHJcblx0Ly8gXHQvLyBsZXQgczMgPSBnZXRTdHJpbmcoXCJkaWxhb2VzdFwiLCBcIm5vdCBwcmVzZW50XCIpO1xyXG5cdC8vIFx0Ly8gY29uc29sZS5sb2coczMpXHJcblx0Ly8gXHR3aGlsZShnZXRTdHJpbmcoXCJkaXNwbGF5U3RyXCIgKyBpLCBcImZhbHNlXCIpICE9PSBcImZhbHNlXCIpXHJcblx0Ly8gXHR7XHJcblx0Ly8gXHRcdGxldCBzID0gZ2V0U3RyaW5nKFwiZGlzcGxheVN0clwiICsgaSk7XHJcblx0Ly8gXHRcdGNvbnNvbGUubG9nKHMpO1xyXG5cdC8vIFx0XHRhcnIucHVzaChzKTtcclxuXHQvLyBcdFx0aSsrO1xyXG5cdC8vIFx0fTtcclxuXHQvLyBcdHJldHVybiBhcnI7XHJcblx0Ly8gfVxyXG5cdHNob3dMaW1pdCA9IDIwMDtcclxuXHRpbmNyZWFzZUxpbWl0KClcclxuXHR7XHJcblx0XHR0aGlzLnNob3dMaW1pdCArPSAyMDA7XHJcblx0fVxyXG5cclxuXHR0ZXN0QXJyOiBBcnJheTxUZXN0RmlsZT47XHJcblx0bmdPbkluaXQoKTogdm9pZFxyXG5cdHtcclxuXHJcblx0XHQvLyB0aGlzLnRlc3RBcnIgPSBbW1wiaGlcIiwgXCI0XCIsIFwiYW91XCJdLCBbXCJjb29sXCIsIFwiMlwiLCBcIjNcIl1dXHJcblx0XHQvLyB0aGlzLnRlc3RBcnIgPSBbe1widGV4dFwiOiBcInRlc3RcIn0sIHtcInRleHRcIjogXCJoaVwifV1cclxuXHR9XHJcblxyXG5cclxuXHRyZXNoYXBlQXJyKGFycjogQXJyYXk8c3RyaW5nPiwgbjogbnVtYmVyLCBzOiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0bGV0IG5ld2FyciA9IGFycjtcclxuXHRcdGlmIChhcnIubGVuZ3RoICUgbiA9PT0gMSlcclxuXHRcdHtcclxuXHRcdFx0bmV3YXJyLnB1c2gocywgcyk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChhcnIubGVuZ3RoICUgbiA9PT0gMilcclxuXHRcdHtcclxuXHRcdFx0bmV3YXJyLnB1c2gocyk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbmV3YXJyO1xyXG5cdH1cclxuXHJcblx0cmVzaGFwZUZvckNvbChhcnI6IEFycmF5PHN0cmluZz4sIG46IG51bWJlciwgczogc3RyaW5nKVxyXG5cdHtcclxuXHRcdGxldCBvdXRhcnIgPSBbXTtcclxuXHRcdGxldCBuZXdhcnIgPSB0aGlzLnJlc2hhcGVBcnIoYXJyLCBuLCBzKTtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbmV3YXJyLmxlbmd0aDsgaSArPSAzKVxyXG5cdFx0e1xyXG5cclxuXHRcdFx0b3V0YXJyLnB1c2goe1wib25lXCI6IG5ld2FycltpXSwgXCJ0d29cIjogbmV3YXJyW2krMV0sIFwidGhyZWVcIjogbmV3YXJyW2krMl19KTtcclxuXHRcdFx0aWYgKG5ld2FycltpXSA9PT0gXCJQcmFjdGljZVwiKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coaSk7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5kaXIob3V0YXJyKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKG5ld2FyclswXSA9PT0gXCJuZXV0cmFsXCIpXHJcblx0XHR7XHJcblx0XHRcdC8vIGNvbnNvbGUuZGlyKG91dGFycik7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHJldHVybiBbbmV3YXJyLCBvdXRhcnJdO1xyXG5cdH1cclxuXHJcblxyXG5cdHRlc3RUYXA6IEFycmF5PFRlc3RGaWxlPjtcclxuXHRwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSwgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHBhZ2U6IFBhZ2UpXHJcblx0e1xyXG5cdFx0dGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoXHJcblx0XHRcdHBhcmFtcyA9PlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gaWYgKHBhcmFtc1tcIm5ld1wiXSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyB0aGlzLnRlc3RBcnIgPSBbe1wib25lXCI6IFwiaGlcIiwgXCJ0d29cIjogXCI0XCIsIFwidGhyZWVcIjogXCJhb3VcIn0sIHtcIm9uZVwiOiBcImhhaVwiLCBcInR3b1wiOiBcImU0XCIsIFwidGhyZWVcIjogXCJhb291XCJ9XVxyXG5cdFx0XHRcdFx0XHJcblxyXG5cdFx0XHRcdFx0Ly8gdGhpcy50ZXN0QXJyID0gW1tcImhpXCIsIFwiNFwiLCBcImFvdVwiXSwgW1wiY29vbFwiLCBcIjJcIiwgXCIzXCJdXVxyXG5cdFx0XHRcdFx0dGhpcy50ZXh0ID0gcGFyYW1zW1widGV4dFwiXTtcclxuXHRcdFx0XHRcdHRoaXMud29yZHMgPSB0aGlzLnRleHQuc3BsaXQoXCIkI0BcIik7Ly8ucmVwbGFjZSgvXFxuL2csIFwiPGJyPlwiKS5zcGxpdChcIiQjQFwiKTtcclxuXHRcdFx0XHRcdC8vIHRoaXMuZGlzcGxheUFycmF5ID0gdGhpcy53b3JkcztcclxuXHRcdFx0XHRcdC8vIHRoaXMud29yZHMubWFwKHggPT4gXCI8Zm9udCBzaXplPScyMCc+XCIgKyB4ICsgXCI8L2ZvbnQ+XCIpO1xyXG5cdFx0XHRcdFx0dGhpcy50YXBwZWQgPSBwYXJhbXNbXCJ0YXBcIl0uc3BsaXQoXCIkJSVcIik7XHJcblx0XHRcdFx0XHR0aGlzLmRpc3BsYXlBcnJheSA9IHRoaXMud29yZHM7Ly8ubWFwKHggPT4gXCIgXCIgKyB4ICsgXCIgXCIpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgb2FyciA9IHRoaXMucmVzaGFwZUZvckNvbCh0aGlzLmRpc3BsYXlBcnJheSwgMywgXCJcIik7XHJcblx0XHRcdFx0XHR0aGlzLmRpc3BsYXlBcnJheSA9IG9hcnJbMF1cclxuXHRcdFx0XHRcdHRoaXMudGVzdEFyciA9IG9hcnJbMV07XHJcblxyXG5cdFx0XHRcdFx0bGV0IHRhcnIgPSB0aGlzLnJlc2hhcGVGb3JDb2wodGhpcy50YXBwZWQsIDMsIFwibmV1dHJhbFwiKTtcclxuXHRcdFx0XHRcdHRoaXMudGFwcGVkID0gdGFyclswXVxyXG5cdFx0XHRcdFx0dGhpcy50ZXN0VGFwID0gdGFyclsxXTtcclxuXHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmRpcih0aGlzLnRlc3RUYXBbNzg5XSk7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmRpcih0aGlzLnRlc3RUYXAuc2xpY2UoNzkwLCA4MDApKTtcclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHRoaXMudGFwcGVkLnNsaWNlKDc5MCozKSk7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLmRpc3BsYXlBcnJheS5zbGljZSg3OTAqMykpXHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmRpcih0aGlzLnRlc3RUYXBbNzkxXSk7XHJcblx0XHRcdFx0XHRjbGVhcigpOyBcclxuXHRcdFx0XHRcdHRoaXMuc2F2ZUFycmF5VG9TdHJpbmcodGhpcy5kaXNwbGF5QXJyYXkpO1xyXG5cdFx0XHRcdFx0dGhpcy5zYXZlVGFwVG9TdHJpbmcodGhpcy50YXBwZWQpO1xyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZ2V0U3RyaW5nKFwiZGlzcGxheVN0cjBcIikpO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJwYXJhbXMgbmV3XCIpXHJcblxyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhpcy5kaXNwbGF5QXJyYXkpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0Ly8gXHRcdC8vIGVsc2VcclxuXHRcdC8vIFx0XHQvLyB7XHJcblx0XHQvLyBcdFx0Ly8gXHRjb25zb2xlLmxvZyhcInBhcmFtcyBub3QgbmV3XCIpXHJcblx0XHQvLyBcdFx0Ly8gXHQvLyBjb25zb2xlLmxvZyhnZXRTdHJpbmcoXCJkaXNwbGF5U3RyMFwiKSk7XHJcblx0XHQvLyBcdFx0Ly8gXHR0aGlzLmRpc3BsYXlBcnJheSA9IHRoaXMuZ2V0QXJyYXlGcm9tU3RyaW5ncygpO1xyXG5cdFx0Ly8gXHRcdC8vIFx0Ly8gY29uc29sZS5sb2codGhpcy5kaXNwbGF5QXJyYXkpO1xyXG5cdFx0Ly8gXHRcdC8vIH1cclxuXHRcdFx0XHRcclxuXHRcdFx0fSlcclxuXHJcblxyXG5cdFx0Ly8gdGhpcy5yb3V0ZS5xUGFycy5zdWJzY3JpYmUoXHJcblx0XHQvLyBcdHAgPT5cclxuXHRcdC8vIFx0e1xyXG5cdFx0Ly8gXHRcdGNvbnNvbGUubG9nKFwibm90IG5ld1wiKTtcclxuXHRcdC8vIFx0XHR0aGlzLmRpc3BsYXlBcnJheSA9IHRoaXMuZ2V0QXJyYXlGcm9tU3RyaW5ncygpO1xyXG5cdFx0Ly8gXHRcdGNvbnNvbGUubG9nKHRoaXMuZGlzcGxheUFycmF5KTtcclxuXHRcdC8vIFx0fSlcclxuXHR9XHJcbiAgLy8gYmFjaygpXHJcbiAgLy8ge1xyXG4gIC8vICAgLy8gYWxlcnQodGhpcy50ZXh0VG9QcmVwYXJlKTtcclxuICAvLyAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0gXHJcbiAgLy8gICB7XHJcbiAgLy8gICAgIHF1ZXJ5UGFyYW1zOlxyXG4gIC8vICAgICB7XHJcbiAgLy8gICAgICAgXCJuZXdcIjogdHJ1ZSxcclxuICAvLyAgICAgICBcInRleHRcIjogXCJcIlxyXG4gIC8vICAgICB9XHJcblxyXG4gIC8vICAgfTsgXHJcbiAgLy8gICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJcIl0sIG5hdmlnYXRpb25FeHRyYXMpO1xyXG4gIC8vIH1cclxuICAgIHRhcHBlZDogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gIFx0Z2V0Q29sKGk6IG51bWJlciwgbjogc3RyaW5nKTogc3RyaW5nXHJcbiAgXHR7XHJcbiAgXHRcdFxyXG4gIFx0XHRpZiAodGhpcy50ZXN0VGFwW2ldID09PSB1bmRlZmluZWQpXHJcbiAgXHRcdHtcclxuICBcdFx0XHQvLyBjb25zb2xlLmxvZyhpKTtcclxuICBcdFx0XHQvLyBjb25zb2xlLmRpcih0aGlzLnRlc3RUYXBbNzkwXSk7XHJcbiAgXHRcdFx0Ly8gY29uc29sZS5kaXIodGhpcy50ZXN0QXJyWzc5MF0pO1xyXG4gIFx0XHR9XHJcbiAgXHRcdC8vIGNvbnNvbGUuZGlyKHRoaXMudGVzdFRhcFtpXVtcIm9uZVwiXSk7XHJcbiAgXHRcdGlmICh0aGlzLnRlc3RUYXBbaV1bbl0gPT09IFwicmVtb3ZlXCIpXHJcbiAgXHRcdHtcclxuICBcdFx0XHRyZXR1cm4gXCJyZWRcIjtcclxuICBcdFx0fVxyXG4gIFx0XHRlbHNlIGlmICh0aGlzLnRlc3RUYXBbaV1bbl0gPT09IFwiYWRkXCIpXHJcbiAgXHRcdHtcclxuICBcdFx0XHRyZXR1cm4gXCJibHVlXCI7XHJcbiAgXHRcdH1cclxuICBcdFx0ZWxzZSBpZiAodGhpcy50ZXN0VGFwW2ldW25dID09PSBcImNvbW1lbnRcIilcclxuICBcdFx0e1xyXG4gIFx0XHRcdHJldHVybiBcImdyZWVuXCI7XHJcbiAgXHRcdH1cclxuICBcdFx0ZWxzZVxyXG4gIFx0XHR7XHJcbiAgXHRcdFx0cmV0dXJuIFwiYmxhY2tcIjtcclxuICBcdFx0fVxyXG4gIFx0XHRcclxuICBcdH1cclxuXHJcbiAgXHRwcml2YXRlIG51bVRvU3BlbGwgPSB7XCJvbmVcIjogMCwgXCJ0d29cIjogMSwgXCJ0aHJlZVwiOiAyfTtcclxuXHJcblx0cHJvY2Vzc1dvcmQoaTogbnVtYmVyLCBuOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cclxuXHRcdGxldCBpMiA9IGkgKiAzICsgdGhpcy5udW1Ub1NwZWxsW25dO1xyXG5cclxuXHRcdGlmICh0aGlzLnRlc3RUYXBbaV1bbl0gPT09IFwicmVtb3ZlXCIpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMudGVzdFRhcFtpXVtuXSA9IFwibmV1dHJhbFwiO1xyXG5cdFx0XHR0aGlzLnRhcHBlZFtpMl0gPSBcIm5ldXRyYWxcIjtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHRoaXMudGVzdFRhcFtpXVtuXSA9PT0gXCJhZGRcIilcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5kaXNwbGF5QXJyYXkuc3BsaWNlKGkyLCAxKTtcclxuXHRcdFx0dGhpcy50YXBwZWQuc3BsaWNlKGkyLCAxKTtcclxuXHRcdFx0bGV0IG9hcnIgPSB0aGlzLnJlc2hhcGVGb3JDb2wodGhpcy5kaXNwbGF5QXJyYXksIDMsIFwiXCIpO1xyXG5cdFx0XHRsZXQgdGFyciA9IHRoaXMucmVzaGFwZUZvckNvbCh0aGlzLnRhcHBlZCwgMywgXCJuZXV0cmFsXCIpO1xyXG5cdFx0XHR0aGlzLmRpc3BsYXlBcnJheSA9IG9hcnJbMF07XHJcblx0XHRcdHRoaXMudGFwcGVkID0gdGFyclswXTtcclxuXHRcdFx0dGhpcy50ZXN0QXJyID0gb2FyclsxXTtcclxuXHRcdFx0dGhpcy50ZXN0VGFwID0gdGFyclsxXTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodGhpcy50ZXN0VGFwW2ldW25dID09PSBcImNvbW1lbnRcIilcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5kaXNwbGF5QXJyYXkuc3BsaWNlKGkyLCAxKTtcclxuXHRcdFx0dGhpcy50YXBwZWQuc3BsaWNlKGkyLCAxKTtcclxuXHRcdFx0bGV0IG9hcnIgPSB0aGlzLnJlc2hhcGVGb3JDb2wodGhpcy5kaXNwbGF5QXJyYXksIDMsIFwiXCIpO1xyXG5cdFx0XHRsZXQgdGFyciA9IHRoaXMucmVzaGFwZUZvckNvbCh0aGlzLnRhcHBlZCwgMywgXCJuZXV0cmFsXCIpO1xyXG5cdFx0XHR0aGlzLmRpc3BsYXlBcnJheSA9IG9hcnJbMF07XHJcblx0XHRcdHRoaXMudGFwcGVkID0gdGFyclswXTtcclxuXHRcdFx0dGhpcy50ZXN0QXJyID0gb2FyclsxXTtcclxuXHRcdFx0dGhpcy50ZXN0VGFwID0gdGFyclsxXTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0dGhpcy50ZXN0VGFwW2ldW25dID0gXCJyZW1vdmVcIjtcclxuXHRcdFx0dGhpcy50YXBwZWRbaTJdID0gXCJyZW1vdmVcIjtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Ly8gYWxlcnQoaSk7XHJcblx0XHQvLyBhbGVydChnZXRTdHJpbmcoXCJ0ZXN0MVwiLCBcIm5vdCBwcmVzZW50XCIpKVxyXG5cdFx0Ly8gaWYgKHRoaXMuZGlzcGxheUFycmF5W2ldLmluZGV4T2YodGhpcy5odG1sUmVtb3ZlT3BlbikgPiAtMSlcclxuXHRcdC8vIHtcclxuXHRcdC8vIFx0dGhpcy5kaXNwbGF5QXJyYXlbaV0gPSB0aGlzLmRpc3BsYXlBcnJheVtpXS5yZXBsYWNlKG5ldyBSZWdFeHAodGhpcy5odG1sUmVtb3ZlT3BlbiwgXCJnXCIpLCBcIlwiKTtcclxuXHRcdC8vIFx0dGhpcy5kaXNwbGF5QXJyYXlbaV0gPSB0aGlzLmRpc3BsYXlBcnJheVtpXS5yZXBsYWNlKG5ldyBSZWdFeHAodGhpcy5odG1sUmVtb3ZlQ2xvc2UsIFwiZ1wiKSwgXCJcIik7XHJcblx0XHQvLyB9XHJcblx0XHQvLyBlbHNlIGlmICh0aGlzLmRpc3BsYXlBcnJheVtpXS5pbmRleE9mKHRoaXMuaHRtbEFkZE9wZW4pID4gLTEpXHJcblx0XHQvLyB7XHJcblx0XHQvLyBcdHRoaXMuZGlzcGxheUFycmF5W2ldID0gdGhpcy5kaXNwbGF5QXJyYXlbaV0ucmVwbGFjZShuZXcgUmVnRXhwKHRoaXMuaHRtbEFkZE9wZW4sIFwiZ1wiKSwgXCJcIik7XHJcblx0XHQvLyBcdHRoaXMuZGlzcGxheUFycmF5W2ldID0gdGhpcy5kaXNwbGF5QXJyYXlbaV0ucmVwbGFjZShuZXcgUmVnRXhwKHRoaXMuaHRtbEFkZENsb3NlLCBcImdcIiksIFwiXCIpO1xyXG5cclxuXHRcdC8vIH1cclxuXHRcdC8vIGVsc2VcclxuXHRcdC8vIHtcclxuXHRcdC8vIFx0dGhpcy5kaXNwbGF5QXJyYXlbaV0gPSB0aGlzLmh0bWxSZW1vdmVPcGVuICsgdGhpcy5kaXNwbGF5QXJyYXlbaV0gKyB0aGlzLmh0bWxSZW1vdmVDbG9zZTtcclxuXHJcblx0XHQvLyB9XHJcblx0XHR0aGlzLnNhdmVBcnJheVRvU3RyaW5nKHRoaXMuZGlzcGxheUFycmF5KTtcclxuXHRcdHRoaXMuc2F2ZVRhcFRvU3RyaW5nKHRoaXMudGFwcGVkKTtcclxuXHR9XHJcblxyXG5cdHNlbGVjdGVkV29yZEluZGV4OiBudW1iZXIgPSAtMTtcclxuXHRzZWxlY3RlZENvbDogc3RyaW5nID0gXCJcIjtcclxuXHJcblx0cHJvY2Vzc1N3aXBlKGk6IG51bWJlciwgbjogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnNlbGVjdGVkV29yZEluZGV4ID09PSAtMSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZFdvcmRJbmRleCA9IGk7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRDb2wgPSBuO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+XHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8VGV4dEZpZWxkPihcIm15QWRkXCIpLmZvY3VzKClcclxuXHRcdFx0fSwgMTAwKVxyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkV29yZEluZGV4ID0gaTtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZENvbCA9IG47XHJcblx0XHRcdFxyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+XHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgcyA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxUZXh0RmllbGQ+KFwibXlBZGRcIik7XHJcblx0XHRcdFx0cy50ZXh0ID0gXCJcIjtcclxuXHRcdFx0XHRzLmZvY3VzKClcclxuXHRcdFx0fSwgMTAwKVxyXG5cdFx0fVxyXG5cclxuICAgICAgICAvLyBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAvLyAgICAgY29udGV4dDoge30sXHJcbiAgICAgICAgLy8gICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxyXG4gICAgICAgIC8vICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgICAvLyB0aGlzLm1vZGFsLnNob3dNb2RhbChNb2RhbENvbXBvbmVudCwgb3B0aW9ucykudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIC8vICAgICBpZiAocmVzKVxyXG4gICAgICAgIC8vICAgICB7XHJcbiAgICAgICAgLy8gICAgICAgdGhpcy5vblJldHVybihpLCBuLCByZXMpO1xyXG4gICAgICAgIC8vICAgICB9XHJcblxyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuXHRcdFxyXG5cdFx0Ly8gY29uc29sZS5sb2coaSk7XHJcblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGVkV29yZEluZGV4KTtcclxuXHJcblx0XHQvLyBsZXQgbXlBZGQ6IFRleHRGaWVsZCA9IDxUZXh0RmllbGQ+IHRoaXMucGFnZS5nZXRWaWV3QnlJZChcIm15QWRkXCIpO1xyXG5cdFx0Ly8gbXlBZGQuZm9jdXMoKTtcclxuXHJcblxyXG5cdFx0Ly8gYWxlcnQoaSk7XHJcblx0XHQvLyB0aGlzLmRpc3BsYXlBcnJheS5zcGxpY2UoaSArIDEsIDAsIFwidGVzdFwiKTtcclxuXHRcdC8vIHRoaXMudGFwcGVkLnNwbGljZShpICsgMSwgMCwgXCJhZGRcIik7XHJcblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLnRhcHBlZClcclxuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMuZGlzcGxheUFycmF5KVxyXG5cdFx0Ly8gdGhpcy5zYXZlQXJyYXlUb1N0cmluZyh0aGlzLmRpc3BsYXlBcnJheSk7XHJcblx0XHQvLyB0aGlzLnNhdmVUYXBUb1N0cmluZyh0aGlzLnRhcHBlZCk7XHJcblx0fVxyXG5cdGlucHV0VGV4dDogc3RyaW5nID0gXCJcIjsgXHJcblx0b25SZXR1cm4oaTogbnVtYmVyLCBuOiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0bGV0IGkyID0gaSAqIDMgKyB0aGlzLm51bVRvU3BlbGxbbl07XHJcblx0XHRsZXQgcyA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxUZXh0RmllbGQ+KFwibXlBZGRcIik7XHJcblx0XHRsZXQgdmFsID0gcy50ZXh0O1xyXG5cclxuXHRcdGxldCB2YWxBcnIgPSB2YWwuc3BsaXQoXCIgXCIpO1xyXG5cdFx0bGV0IHN0YXJ0ID0gLTE7XHJcblx0XHRsZXQgZW5kID0gLTE7XHJcblx0XHRpZiAodmFsQXJyWzBdICE9PSBcIlwiKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmRpc3BsYXlBcnJheS5zcGxpY2UoaTIgKyAxLCAwLCAuLi52YWxBcnIpO1xyXG5cclxuXHRcdFx0Zm9yIChsZXQgaW5kID0gaTI7IGluZCA8IGkyICsgdmFsQXJyLmxlbmd0aDsgaW5kKyspXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyB0aGlzLmRpc3BsYXlBcnJheS5zcGxpY2UoaW5kICsgMSwgMCwgdmFsQXJyW2luZCAtIGldKTtcclxuXHJcblx0XHRcdFx0aWYgKHZhbEFycltpbmQgLSBpMl0uaW5kZXhPZihcIltjXVwiKSA+IC0xKSBzdGFydCA9IGluZDtcclxuXHRcdFx0XHRpZiAodmFsQXJyW2luZCAtIGkyXS5pbmRleE9mKFwiWy9jXVwiKSA+IC0xKSBlbmQgPSBpbmQ7XHJcblxyXG5cdFx0XHRcdC8vIHRoaXMudGFwcGVkLnNwbGljZShpbmQgKyAxLCAwLCBcImFkZFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zb2xlLmxvZyhzdGFydCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKGVuZCk7XHJcblx0XHRcdGZvciAobGV0IGluZCA9IGkyOyBpbmQgPCBpMiArIHZhbEFyci5sZW5ndGg7IGluZCsrKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKGluZCA+PSBzdGFydCAmJiBpbmQgPD0gZW5kKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMudGFwcGVkLnNwbGljZShpbmQgKyAxLCAwLCBcImNvbW1lbnRcIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLnRhcHBlZC5zcGxpY2UoaW5kICsgMSwgMCwgXCJhZGRcIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9XHJcblx0XHRcdGxldCBvYXJyID0gdGhpcy5yZXNoYXBlRm9yQ29sKHRoaXMuZGlzcGxheUFycmF5LCAzLCBcIlwiKTtcclxuXHRcdFx0bGV0IHRhcnIgPSB0aGlzLnJlc2hhcGVGb3JDb2wodGhpcy50YXBwZWQsIDMsIFwibmV1dHJhbFwiKTtcclxuXHRcdFx0dGhpcy5kaXNwbGF5QXJyYXkgPSBvYXJyWzBdO1xyXG5cdFx0XHR0aGlzLnRhcHBlZCA9IHRhcnJbMF07XHJcblx0XHRcdHRoaXMudGVzdEFyciA9IG9hcnJbMV07XHJcblx0XHRcdHRoaXMudGVzdFRhcCA9IHRhcnJbMV07XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdFx0Ly8gY29uc29sZS5sb2coaSk7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhuKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKHMudGV4dCk7XHJcblx0XHRjb25zb2xlLmxvZyhcImVudGVyZWRcIik7XHJcblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLnRhcHBlZCk7XHJcblx0XHQvLyB0aGlzLmRpc3BsYXlBcnJheS5zcGxpY2UoaSArIDEsIDAsIFwidGVzdFwiKTtcclxuXHRcdC8vIHRoaXMudGFwcGVkLnNwbGljZShpICsgMSwgMCwgXCJhZGRcIik7XHJcblx0XHR0aGlzLnNhdmVBcnJheVRvU3RyaW5nKHRoaXMuZGlzcGxheUFycmF5KTtcclxuXHRcdHRoaXMuc2F2ZVRhcFRvU3RyaW5nKHRoaXMudGFwcGVkKTtcclxuXHRcdHRoaXMuc2VsZWN0ZWRXb3JkSW5kZXggPSAtMTtcclxuXHRcdHRoaXMuc2VsZWN0ZWRDb2wgPSBcIlwiO1xyXG5cdH1cclxuXHJcblx0c2hvd0lucHV0cyhpOiBudW1iZXIsIG46IHN0cmluZylcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5zZWxlY3RlZFdvcmRJbmRleCA9PT0gaSAmJiB0aGlzLnNlbGVjdGVkQ29sID09PSBuO1xyXG5cdH1cclxuXHJcblx0aW5zZXJ0Q29tbWVudChpOiBudW1iZXIpXHJcblx0eyBcclxuXHRcdGxldCBzID0gdGhpcy5wYWdlLmdldFZpZXdCeUlkPFRleHRGaWVsZD4oXCJteUFkZFwiKTtcclxuXHRcdHMudGV4dCArPSBcIltjXSAgWy9jXSBcIjsgXHJcblxyXG5cdH1cclxuXHJcblxyXG5cclxufSAiXX0=