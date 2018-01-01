"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var gpserv_service_1 = require("../gpserv/gpserv.service");
var page_1 = require("ui/page");
var clipboard = require("nativescript-clipboard");
var Toast = require("nativescript-toasts");
var BbComponent = (function () {
    function BbComponent(route, router, routerExtensions, page) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.page = page;
        this.dispArr = [];
        this.tapped = [];
        this.bbStr = "";
        this.route.queryParams.subscribe(function (params) {
            _this.dispArr = params["dispArr"];
            _this.tapped = params["tapArr"];
            var bbArr = _this.dispArr;
            var adds = [];
            var rems = [];
            var coms = [];
            var start = -1;
            var end = -1;
            var prev = _this.tapped[0];
            for (var i = 1; i < _this.dispArr.length; i++) {
                if (prev !== "add" && _this.tapped[i] === "add") {
                    start = i;
                    adds.push(start);
                }
                if (_this.tapped[i] !== "add" && prev === "add") {
                    end = i - 1;
                    adds.push(end);
                }
                prev = _this.tapped[i];
            }
            console.log(adds);
            for (var i = 1; i < _this.dispArr.length; i++) {
                if (prev !== "remove" && _this.tapped[i] === "remove") {
                    start = i;
                    rems.push(start);
                }
                if (_this.tapped[i] !== "remove" && prev === "remove") {
                    end = i - 1;
                    rems.push(end);
                }
                prev = _this.tapped[i];
            }
            console.log(rems);
            for (var i = 1; i < _this.dispArr.length; i++) {
                if (prev !== "comment" && _this.tapped[i] === "comment") {
                    start = i;
                    coms.push(start);
                }
                if (_this.tapped[i] !== "comment" && prev === "comment") {
                    end = i - 1;
                    coms.push(end);
                }
                prev = _this.tapped[i];
            }
            console.log(coms);
            for (var i = 0; i < adds.length; i += 2) {
                bbArr[adds[i]] = "[b][color='blue']" + bbArr[adds[i]];
                bbArr[adds[i + 1]] = bbArr[adds[i + 1]] + "[/color][/b]";
            }
            for (var i = 0; i < rems.length; i += 2) {
                bbArr[rems[i]] = "[b][color='red'][s]" + bbArr[rems[i]];
                bbArr[rems[i + 1]] = bbArr[rems[i + 1]] + "[/s][/color][/b]";
            }
            for (var i = 0; i < coms.length; i += 2) {
                bbArr[coms[i]] = "[b][color='green']" + bbArr[coms[i]].replace("[c]", "");
                bbArr[coms[i + 1]] = bbArr[coms[i + 1]].replace("[/c]", "") + "[/color][/b]";
            }
            // for (let i = 0; i < this.dispArr.length; i++)
            // {
            // }
            _this.bbStr = bbArr.join(" ");
        });
    }
    BbComponent.prototype.arrToBB = function (d, t) {
    };
    BbComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    BbComponent.prototype.copyToClipboard = function () {
        clipboard.setText(this.bbStr).then(function () {
            console.log("OK, copied to the clipboard");
        });
        var toastOptions = { text: "copied!", duration: Toast.DURATION.SHORT };
        Toast.show(toastOptions);
    };
    BbComponent = __decorate([
        core_1.Component({
            selector: "bb",
            // template: `
            //   <ActionBar title="My App" class="action-bar"></ActionBar>
            //   <!-- Your UI components go here -->
            // `
            templateUrl: "./bb/bb.component.html",
            styleUrls: ["./bb/bb.component.css", "./app.component.css"],
            providers: [gpserv_service_1.GpservService]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, router_2.RouterExtensions, page_1.Page])
    ], BbComponent);
    return BbComponent;
}());
exports.BbComponent = BbComponent;
