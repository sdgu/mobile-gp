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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3AuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ3AuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esc0NBQTBDO0FBQzFDLDBDQUEwRTtBQUUxRSxzREFBOEQ7QUFFOUQsZ0NBQStCO0FBRS9CLDZEQVU4QjtBQVc5QjtJQW9EQyx1Q0FBdUM7SUFDdkMsSUFBSTtJQUNKLHNEQUFzRDtJQUN0RCxpQkFBaUI7SUFDakIsY0FBYztJQUNkLHdEQUF3RDtJQUN4RCx1QkFBdUI7SUFDdkIscURBQXFEO0lBQ3JELHNCQUFzQjtJQUN0QiwyREFBMkQ7SUFDM0QsS0FBSztJQUNMLHlDQUF5QztJQUN6QyxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxNQUFNO0lBQ04sZUFBZTtJQUNmLElBQUk7SUFHSixxQkFBMkIsS0FBcUIsRUFBVSxNQUFjLEVBQVUsZ0JBQWtDLEVBQVUsSUFBVTtRQUF4SSxpQkFxQ0M7UUFyQzBCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBckVqSSxVQUFLLEdBQWtCLEVBQUUsQ0FBQztRQUMxQixpQkFBWSxHQUFrQixFQUFFLENBQUM7UUFHakMsZ0JBQVcsR0FBRyw2QkFBNkIsQ0FBQztRQUM1QyxpQkFBWSxHQUFHLGtCQUFrQixDQUFDO1FBQ2xDLG1CQUFjLEdBQUcsaUNBQWlDLENBQUM7UUFDbkQsb0JBQWUsR0FBRyx3QkFBd0IsQ0FBQztRQW9HakQsU0FBUztRQUNULElBQUk7UUFDSixrQ0FBa0M7UUFDbEMsOENBQThDO1FBQzlDLE1BQU07UUFDTixtQkFBbUI7UUFDbkIsUUFBUTtRQUNSLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIsUUFBUTtRQUVSLE9BQU87UUFDUCxrREFBa0Q7UUFDbEQsSUFBSTtRQUNGLFdBQU0sR0FB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LE9BQU8sQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDO0lBRXJCLENBQUM7SUF6UlcsV0FBVztRQVR2QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLElBQUk7WUFDZCx1QkFBdUI7WUFDdkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxxQkFBcUIsQ0FBQztTQUM1RCxDQUFDO3lDQTRFaUMsdUJBQWMsRUFBa0IsZUFBTSxFQUE0Qix5QkFBZ0IsRUFBZ0IsV0FBSTtPQXhFNUgsV0FBVyxDQTZSdkI7SUFBRCxrQkFBQztDQUFBLEFBN1JELElBNlJDO0FBN1JZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkV4dHJhcywgQWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVGV4dFZpZXcgfSBmcm9tIFwidWkvdGV4dC12aWV3XCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCJcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgZ2V0Qm9vbGVhbixcclxuICAgIHNldEJvb2xlYW4sXHJcbiAgICBnZXROdW1iZXIsXHJcbiAgICBzZXROdW1iZXIsXHJcbiAgICBnZXRTdHJpbmcsXHJcbiAgICBzZXRTdHJpbmcsXHJcbiAgICBoYXNLZXksXHJcbiAgICByZW1vdmUsXHJcbiAgICBjbGVhclxyXG59IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiZ3BcIixcclxuICAvLyBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vZ3AvZ3AuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vZ3AvZ3AuY29tcG9uZW50LmNzc1wiLCBcIi4vYXBwLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEdwQ29tcG9uZW50XHJcbntcclxuXHRwdWJsaWMgdGV4dDogc3RyaW5nO1xyXG5cdHB1YmxpYyB3b3JkczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG5cdHB1YmxpYyBkaXNwbGF5QXJyYXk6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuXHJcblxyXG5cdHB1YmxpYyBodG1sQWRkT3BlbiA9IFwiPHN0cm9uZz48Zm9udCBjb2xvcj0nYmx1ZSc+XCI7XHJcblx0cHVibGljIGh0bWxBZGRDbG9zZSA9IFwiPC9mb250Pjwvc3Ryb25nPlwiO1xyXG5cdHB1YmxpYyBodG1sUmVtb3ZlT3BlbiA9IFwiPGRlbD48c3Ryb25nPjxmb250IGNvbG9yPSdyZWQnPlwiO1xyXG5cdHB1YmxpYyBodG1sUmVtb3ZlQ2xvc2UgPSBcIjwvZm9udD48L3N0cm9uZz48L2RlbD5cIjtcclxuXHJcblx0c2F2ZUFycmF5VG9TdHJpbmcoYXJyOiBBcnJheTxzdHJpbmc+KVxyXG5cdHtcclxuXHRcdGxldCBzID0gYXJyLmpvaW4oXCIkI0BcIik7Ly8ucmVwbGFjZSgvPGJyPi9nLCBcIlxcblwiKTtcclxuXHRcdHNldFN0cmluZyhcImRpc3BTdHJcIiwgcyk7XHJcblx0XHQvLyBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKylcclxuXHRcdC8vIHtcclxuXHRcdC8vIFx0c2V0U3RyaW5nKFwiZGlzcGxheVN0clwiICsgaSwgYXJyW2ldKTtcclxuXHRcdC8vIFx0Ly8gY29uc29sZS5sb2coZ2V0U3RyaW5nKFwiZGlzcGxheVN0cjBcIikpO1xyXG5cdFx0Ly8gfVxyXG5cdH1cclxuXHRzYXZlVGFwVG9TdHJpbmcoYXJyOiBBcnJheTxzdHJpbmc+KVxyXG5cdHtcclxuXHRcdGxldCBzID0gYXJyLmpvaW4oXCIkJSVcIik7XHJcblx0XHRzZXRTdHJpbmcoXCJ0YXBTdHJcIiwgcyk7XHJcblx0fVxyXG5cclxuXHRnb0JhY2soKVxyXG5cdHtcclxuXHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XHJcblx0fVxyXG5cclxuXHRnZXRCQigpXHJcblx0e1xyXG5cdCAgbGV0IGRpc3BBcnIgPSB0aGlzLmRpc3BsYXlBcnJheTtcclxuXHQgIGxldCB0YXBBcnIgPSB0aGlzLnRhcHBlZDtcclxuICAgICAgXHJcbiAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0gXHJcbiAgICAgIHtcclxuICAgICAgICBxdWVyeVBhcmFtczpcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcIm5ld1wiOiB0cnVlLFxyXG4gICAgICAgICAgXCJkaXNwQXJyXCI6IGRpc3BBcnIsXHJcbiAgICAgICAgICBcInRhcEFyclwiOiB0YXBBcnJcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJiYlwiXSwgbmF2aWdhdGlvbkV4dHJhcyk7XHJcbiAgICB9XHJcblx0XHJcblxyXG5cdC8vIGdldEFycmF5RnJvbVN0cmluZ3MoKTogQXJyYXk8c3RyaW5nPlxyXG5cdC8vIHtcclxuXHQvLyBcdGNvbnNvbGUubG9nKFwiZW50ZXJlZCBnZXRhcnJheWZyb21zdHJpbmdzIGZyb20gZ3BcIilcclxuXHQvLyBcdGxldCBhcnIgPSBbXTtcclxuXHQvLyBcdGxldCBpID0gMDtcclxuXHQvLyBcdC8vIGxldCBzMiA9IGdldFN0cmluZyhcImRpc3BsYXlTdHIwXCIsIFwibm90IHByZXNlbnRcIik7XHJcblx0Ly8gXHQvLyBjb25zb2xlLmxvZyhzMik7XHJcblx0Ly8gXHQvLyBsZXQgczMgPSBnZXRTdHJpbmcoXCJkaWxhb2VzdFwiLCBcIm5vdCBwcmVzZW50XCIpO1xyXG5cdC8vIFx0Ly8gY29uc29sZS5sb2coczMpXHJcblx0Ly8gXHR3aGlsZShnZXRTdHJpbmcoXCJkaXNwbGF5U3RyXCIgKyBpLCBcImZhbHNlXCIpICE9PSBcImZhbHNlXCIpXHJcblx0Ly8gXHR7XHJcblx0Ly8gXHRcdGxldCBzID0gZ2V0U3RyaW5nKFwiZGlzcGxheVN0clwiICsgaSk7XHJcblx0Ly8gXHRcdGNvbnNvbGUubG9nKHMpO1xyXG5cdC8vIFx0XHRhcnIucHVzaChzKTtcclxuXHQvLyBcdFx0aSsrO1xyXG5cdC8vIFx0fTtcclxuXHQvLyBcdHJldHVybiBhcnI7XHJcblx0Ly8gfVxyXG5cclxuXHJcblx0cHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcGFnZTogUGFnZSlcclxuXHR7XHJcblx0XHR0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShcclxuXHRcdFx0cGFyYW1zID0+XHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBpZiAocGFyYW1zW1wibmV3XCJdKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMudGV4dCA9IHBhcmFtc1tcInRleHRcIl07XHJcblx0XHRcdFx0XHR0aGlzLndvcmRzID0gdGhpcy50ZXh0LnNwbGl0KFwiJCNAXCIpOy8vLnJlcGxhY2UoL1xcbi9nLCBcIjxicj5cIikuc3BsaXQoXCIkI0BcIik7XHJcblx0XHRcdFx0XHQvLyB0aGlzLmRpc3BsYXlBcnJheSA9IHRoaXMud29yZHM7XHJcblx0XHRcdFx0XHQvLyB0aGlzLndvcmRzLm1hcCh4ID0+IFwiPGZvbnQgc2l6ZT0nMjAnPlwiICsgeCArIFwiPC9mb250PlwiKTtcclxuXHRcdFx0XHRcdHRoaXMudGFwcGVkID0gcGFyYW1zW1widGFwXCJdLnNwbGl0KFwiJCUlXCIpO1xyXG5cdFx0XHRcdFx0dGhpcy5kaXNwbGF5QXJyYXkgPSB0aGlzLndvcmRzOy8vLm1hcCh4ID0+IFwiIFwiICsgeCArIFwiIFwiKTtcclxuXHRcdFx0XHRcdGNsZWFyKCk7XHJcblx0XHRcdFx0XHR0aGlzLnNhdmVBcnJheVRvU3RyaW5nKHRoaXMuZGlzcGxheUFycmF5KTtcclxuXHRcdFx0XHRcdHRoaXMuc2F2ZVRhcFRvU3RyaW5nKHRoaXMudGFwcGVkKTtcclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGdldFN0cmluZyhcImRpc3BsYXlTdHIwXCIpKTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwicGFyYW1zIG5ld1wiKVxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5kaXNwbGF5QXJyYXkpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIGVsc2VcclxuXHRcdFx0XHQvLyB7XHJcblx0XHRcdFx0Ly8gXHRjb25zb2xlLmxvZyhcInBhcmFtcyBub3QgbmV3XCIpXHJcblx0XHRcdFx0Ly8gXHQvLyBjb25zb2xlLmxvZyhnZXRTdHJpbmcoXCJkaXNwbGF5U3RyMFwiKSk7XHJcblx0XHRcdFx0Ly8gXHR0aGlzLmRpc3BsYXlBcnJheSA9IHRoaXMuZ2V0QXJyYXlGcm9tU3RyaW5ncygpO1xyXG5cdFx0XHRcdC8vIFx0Ly8gY29uc29sZS5sb2codGhpcy5kaXNwbGF5QXJyYXkpO1xyXG5cdFx0XHRcdC8vIH1cclxuXHRcdFx0XHRcclxuXHRcdFx0fSlcclxuXHRcdC8vIHRoaXMucm91dGUucVBhcnMuc3Vic2NyaWJlKFxyXG5cdFx0Ly8gXHRwID0+XHJcblx0XHQvLyBcdHtcclxuXHRcdC8vIFx0XHRjb25zb2xlLmxvZyhcIm5vdCBuZXdcIik7XHJcblx0XHQvLyBcdFx0dGhpcy5kaXNwbGF5QXJyYXkgPSB0aGlzLmdldEFycmF5RnJvbVN0cmluZ3MoKTtcclxuXHRcdC8vIFx0XHRjb25zb2xlLmxvZyh0aGlzLmRpc3BsYXlBcnJheSk7XHJcblx0XHQvLyBcdH0pXHJcblx0fVxyXG4gIC8vIGJhY2soKVxyXG4gIC8vIHtcclxuICAvLyAgIC8vIGFsZXJ0KHRoaXMudGV4dFRvUHJlcGFyZSk7XHJcbiAgLy8gICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IFxyXG4gIC8vICAge1xyXG4gIC8vICAgICBxdWVyeVBhcmFtczpcclxuICAvLyAgICAge1xyXG4gIC8vICAgICAgIFwibmV3XCI6IHRydWUsXHJcbiAgLy8gICAgICAgXCJ0ZXh0XCI6IFwiXCJcclxuICAvLyAgICAgfVxyXG5cclxuICAvLyAgIH07XHJcbiAgLy8gICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJcIl0sIG5hdmlnYXRpb25FeHRyYXMpO1xyXG4gIC8vIH1cclxuICAgIHRhcHBlZDogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gIFx0Z2V0Q29sKGk6IG51bWJlcik6IHN0cmluZ1xyXG4gIFx0e1xyXG4gIFx0XHRpZiAodGhpcy50YXBwZWRbaV0gPT09IFwicmVtb3ZlXCIpXHJcbiAgXHRcdHtcclxuICBcdFx0XHRyZXR1cm4gXCJyZWRcIjtcclxuICBcdFx0fVxyXG4gIFx0XHRlbHNlIGlmICh0aGlzLnRhcHBlZFtpXSA9PT0gXCJhZGRcIilcclxuICBcdFx0e1xyXG4gIFx0XHRcdHJldHVybiBcImJsdWVcIjtcclxuICBcdFx0fVxyXG4gIFx0XHRlbHNlIGlmICh0aGlzLnRhcHBlZFtpXSA9PT0gXCJjb21tZW50XCIpXHJcbiAgXHRcdHtcclxuICBcdFx0XHRyZXR1cm4gXCJncmVlblwiO1xyXG4gIFx0XHR9XHJcbiAgXHRcdGVsc2VcclxuICBcdFx0e1xyXG4gIFx0XHRcdHJldHVybiBcImJsYWNrXCI7XHJcbiAgXHRcdH1cclxuICBcdFx0XHJcbiAgXHR9XHJcblx0cHJvY2Vzc1dvcmQoaTogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnRhcHBlZFtpXSA9PT0gXCJyZW1vdmVcIilcclxuXHRcdHtcclxuXHRcdFx0dGhpcy50YXBwZWRbaV0gPSBcIm5ldXRyYWxcIjtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHRoaXMudGFwcGVkW2ldID09PSBcImFkZFwiKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmRpc3BsYXlBcnJheS5zcGxpY2UoaSwgMSk7XHJcblx0XHRcdHRoaXMudGFwcGVkLnNwbGljZShpLCAxKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHRoaXMudGFwcGVkW2ldID09PSBcImNvbW1lbnRcIilcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5kaXNwbGF5QXJyYXkuc3BsaWNlKGksIDEpO1xyXG5cdFx0XHR0aGlzLnRhcHBlZC5zcGxpY2UoaSwgMSk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHRoaXMudGFwcGVkW2ldID0gXCJyZW1vdmVcIjtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Ly8gYWxlcnQoaSk7XHJcblx0XHQvLyBhbGVydChnZXRTdHJpbmcoXCJ0ZXN0MVwiLCBcIm5vdCBwcmVzZW50XCIpKVxyXG5cdFx0Ly8gaWYgKHRoaXMuZGlzcGxheUFycmF5W2ldLmluZGV4T2YodGhpcy5odG1sUmVtb3ZlT3BlbikgPiAtMSlcclxuXHRcdC8vIHtcclxuXHRcdC8vIFx0dGhpcy5kaXNwbGF5QXJyYXlbaV0gPSB0aGlzLmRpc3BsYXlBcnJheVtpXS5yZXBsYWNlKG5ldyBSZWdFeHAodGhpcy5odG1sUmVtb3ZlT3BlbiwgXCJnXCIpLCBcIlwiKTtcclxuXHRcdC8vIFx0dGhpcy5kaXNwbGF5QXJyYXlbaV0gPSB0aGlzLmRpc3BsYXlBcnJheVtpXS5yZXBsYWNlKG5ldyBSZWdFeHAodGhpcy5odG1sUmVtb3ZlQ2xvc2UsIFwiZ1wiKSwgXCJcIik7XHJcblx0XHQvLyB9XHJcblx0XHQvLyBlbHNlIGlmICh0aGlzLmRpc3BsYXlBcnJheVtpXS5pbmRleE9mKHRoaXMuaHRtbEFkZE9wZW4pID4gLTEpXHJcblx0XHQvLyB7XHJcblx0XHQvLyBcdHRoaXMuZGlzcGxheUFycmF5W2ldID0gdGhpcy5kaXNwbGF5QXJyYXlbaV0ucmVwbGFjZShuZXcgUmVnRXhwKHRoaXMuaHRtbEFkZE9wZW4sIFwiZ1wiKSwgXCJcIik7XHJcblx0XHQvLyBcdHRoaXMuZGlzcGxheUFycmF5W2ldID0gdGhpcy5kaXNwbGF5QXJyYXlbaV0ucmVwbGFjZShuZXcgUmVnRXhwKHRoaXMuaHRtbEFkZENsb3NlLCBcImdcIiksIFwiXCIpO1xyXG5cclxuXHRcdC8vIH1cclxuXHRcdC8vIGVsc2VcclxuXHRcdC8vIHtcclxuXHRcdC8vIFx0dGhpcy5kaXNwbGF5QXJyYXlbaV0gPSB0aGlzLmh0bWxSZW1vdmVPcGVuICsgdGhpcy5kaXNwbGF5QXJyYXlbaV0gKyB0aGlzLmh0bWxSZW1vdmVDbG9zZTtcclxuXHJcblx0XHQvLyB9XHJcblx0XHR0aGlzLnNhdmVBcnJheVRvU3RyaW5nKHRoaXMuZGlzcGxheUFycmF5KTtcclxuXHRcdHRoaXMuc2F2ZVRhcFRvU3RyaW5nKHRoaXMudGFwcGVkKTtcclxuXHR9XHJcblxyXG5cdHNlbGVjdGVkV29yZEluZGV4OiBudW1iZXIgPSAtMTtcclxuXHJcblx0cHJvY2Vzc1N3aXBlKGk6IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5zZWxlY3RlZFdvcmRJbmRleCA9PT0gLTEpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRXb3JkSW5kZXggPSBpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+XHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8VGV4dEZpZWxkPihcIm15QWRkXCIpLmZvY3VzKClcclxuXHRcdFx0fSwgMTAwKVxyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkV29yZEluZGV4ID0gaTtcclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+XHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgcyA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxUZXh0RmllbGQ+KFwibXlBZGRcIik7XHJcblx0XHRcdFx0cy50ZXh0ID0gXCJcIjtcclxuXHRcdFx0XHRzLmZvY3VzKClcclxuXHRcdFx0fSwgMTAwKVxyXG5cdFx0fVxyXG5cclxuXHRcdFxyXG5cdFx0Ly8gY29uc29sZS5sb2coaSk7XHJcblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGVkV29yZEluZGV4KTtcclxuXHJcblx0XHQvLyBsZXQgbXlBZGQ6IFRleHRGaWVsZCA9IDxUZXh0RmllbGQ+IHRoaXMucGFnZS5nZXRWaWV3QnlJZChcIm15QWRkXCIpO1xyXG5cdFx0Ly8gbXlBZGQuZm9jdXMoKTtcclxuXHJcblxyXG5cdFx0Ly8gYWxlcnQoaSk7XHJcblx0XHQvLyB0aGlzLmRpc3BsYXlBcnJheS5zcGxpY2UoaSArIDEsIDAsIFwidGVzdFwiKTtcclxuXHRcdC8vIHRoaXMudGFwcGVkLnNwbGljZShpICsgMSwgMCwgXCJhZGRcIik7XHJcblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLnRhcHBlZClcclxuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMuZGlzcGxheUFycmF5KVxyXG5cdFx0Ly8gdGhpcy5zYXZlQXJyYXlUb1N0cmluZyh0aGlzLmRpc3BsYXlBcnJheSk7XHJcblx0XHQvLyB0aGlzLnNhdmVUYXBUb1N0cmluZyh0aGlzLnRhcHBlZCk7XHJcblx0fVxyXG5cdGlucHV0VGV4dDogc3RyaW5nID0gXCJcIjtcclxuXHRvblJldHVybihpOiBudW1iZXIpXHJcblx0e1xyXG5cdFx0bGV0IHMgPSB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8VGV4dEZpZWxkPihcIm15QWRkXCIpO1xyXG5cdFx0bGV0IHZhbCA9IHMudGV4dDtcclxuXHJcblx0XHRsZXQgdmFsQXJyID0gdmFsLnNwbGl0KFwiIFwiKTtcclxuXHRcdGxldCBzdGFydCA9IC0xO1xyXG5cdFx0bGV0IGVuZCA9IC0xO1xyXG5cdFx0aWYgKHZhbEFyclswXSAhPT0gXCJcIilcclxuXHRcdHtcclxuXHRcdFx0Zm9yIChsZXQgaW5kID0gaTsgaW5kIDwgaSArIHZhbEFyci5sZW5ndGg7IGluZCsrKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5kaXNwbGF5QXJyYXkuc3BsaWNlKGluZCArIDEsIDAsIHZhbEFycltpbmQgLSBpXSk7XHJcblxyXG5cdFx0XHRcdGlmICh2YWxBcnJbaW5kIC0gaV0uaW5kZXhPZihcIltjXVwiKSA+IC0xKSBzdGFydCA9IGluZDtcclxuXHRcdFx0XHRpZiAodmFsQXJyW2luZCAtIGldLmluZGV4T2YoXCJbL2NdXCIpID4gLTEpIGVuZCA9IGluZDtcclxuXHJcblx0XHRcdFx0Ly8gdGhpcy50YXBwZWQuc3BsaWNlKGluZCArIDEsIDAsIFwiYWRkXCIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnNvbGUubG9nKHN0YXJ0KTtcclxuXHRcdFx0Y29uc29sZS5sb2coZW5kKTtcclxuXHRcdFx0Zm9yIChsZXQgaW5kID0gaTsgaW5kIDwgaSArIHZhbEFyci5sZW5ndGg7IGluZCsrKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKGluZCA+PSBzdGFydCAmJiBpbmQgPD0gZW5kKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMudGFwcGVkLnNwbGljZShpbmQgKyAxLCAwLCBcImNvbW1lbnRcIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLnRhcHBlZC5zcGxpY2UoaW5kICsgMSwgMCwgXCJhZGRcIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnNvbGUubG9nKHMudGV4dCk7XHJcblx0XHRjb25zb2xlLmxvZyhcImVudGVyZWRcIik7XHJcblx0XHRjb25zb2xlLmxvZyh0aGlzLnRhcHBlZCk7XHJcblx0XHQvLyB0aGlzLmRpc3BsYXlBcnJheS5zcGxpY2UoaSArIDEsIDAsIFwidGVzdFwiKTtcclxuXHRcdC8vIHRoaXMudGFwcGVkLnNwbGljZShpICsgMSwgMCwgXCJhZGRcIik7XHJcblx0XHR0aGlzLnNhdmVBcnJheVRvU3RyaW5nKHRoaXMuZGlzcGxheUFycmF5KTtcclxuXHRcdHRoaXMuc2F2ZVRhcFRvU3RyaW5nKHRoaXMudGFwcGVkKTtcclxuXHRcdHRoaXMuc2VsZWN0ZWRXb3JkSW5kZXggPSAtMTtcclxuXHR9XHJcblxyXG5cdGluc2VydENvbW1lbnQoaTogbnVtYmVyKVxyXG5cdHsgXHJcblx0XHRsZXQgcyA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxUZXh0RmllbGQ+KFwibXlBZGRcIik7XHJcblx0XHRzLnRleHQgKz0gXCJbY11bL2NdXCI7IFxyXG5cclxuXHR9XHJcblxyXG5cclxuXHJcbn0gIl19