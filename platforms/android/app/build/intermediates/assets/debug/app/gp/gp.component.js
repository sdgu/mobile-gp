"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var GpComponent = (function () {
    function GpComponent(route) {
        var _this = this;
        this.route = route;
        this.words = [];
        this.displayArray = [];
        this.htmlAddOpen = "<strong><font color='blue'>";
        this.htmlAddClose = "</font></strong>";
        this.htmlRemoveOpen = "<del><strong><font color='red'>";
        this.htmlRemoveClose = this.htmlAddClose + "</del>";
        this.route.queryParams.subscribe(function (params) {
            _this.text = params["text"];
            _this.words = _this.text.split(" ");
            // this.displayArray = this.words;
            // this.words.map(x => "<font size='20'>" + x + "</font>");
            _this.displayArray = _this.words.map(function (x) { return " " + x + " "; });
            console.log(_this.displayArray);
        });
    }
    GpComponent.prototype.processWord = function (i) {
        // alert(i);
        if (this.displayArray[i].indexOf(this.htmlRemoveOpen) > -1) {
            this.displayArray[i] = this.displayArray[i].replace(new RegExp(this.htmlRemoveOpen, "g"), "");
            this.displayArray[i] = this.displayArray[i].replace(new RegExp(this.htmlRemoveClose, "g"), "");
        }
        else if (this.displayArray[i].indexOf(this.htmlAddOpen) > -1) {
            this.displayArray[i] = this.displayArray[i].replace(new RegExp(this.htmlAddOpen, "g"), "");
            this.displayArray[i] = this.displayArray[i].replace(new RegExp(this.htmlAddClose, "g"), "");
        }
        else {
            this.displayArray[i] = this.htmlRemoveOpen + this.displayArray[i] + this.htmlRemoveClose;
        }
    };
    GpComponent = __decorate([
        core_1.Component({
            selector: "gp",
            // moduleId: module.id,
            templateUrl: "./gp/gp.component.html",
            styleUrls: ["./gp/gp.component.css", "./app.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], GpComponent);
    return GpComponent;
}());
exports.GpComponent = GpComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3AuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ3AuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esc0NBQTBDO0FBQzFDLDBDQUErQztBQVcvQztJQVlDLHFCQUEyQixLQUFxQjtRQUFoRCxpQkFhQztRQWIwQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQVR6QyxVQUFLLEdBQWtCLEVBQUUsQ0FBQztRQUMxQixpQkFBWSxHQUFrQixFQUFFLENBQUM7UUFHakMsZ0JBQVcsR0FBRyw2QkFBNkIsQ0FBQztRQUM1QyxpQkFBWSxHQUFHLGtCQUFrQixDQUFDO1FBQ2xDLG1CQUFjLEdBQUcsaUNBQWlDLENBQUM7UUFDbkQsb0JBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztRQUlyRCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQy9CLFVBQUEsTUFBTTtZQUVMLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEMsa0NBQWtDO1lBQ2xDLDJEQUEyRDtZQUMzRCxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEVBQWIsQ0FBYSxDQUFDLENBQUM7WUFFdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsaUNBQVcsR0FBWCxVQUFZLENBQVM7UUFFcEIsWUFBWTtRQUVaLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUMzRCxDQUFDO1lBQ0EsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzlGLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNoRyxDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUM3RCxDQUFDO1lBQ0EsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzNGLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUU3RixDQUFDO1FBQ0QsSUFBSSxDQUNKLENBQUM7WUFDQSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBRTFGLENBQUM7SUFJRixDQUFDO0lBbERXLFdBQVc7UUFUdkIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxJQUFJO1lBQ2QsdUJBQXVCO1lBQ3ZCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLEVBQUUscUJBQXFCLENBQUM7U0FDNUQsQ0FBQzt5Q0FnQmlDLHVCQUFjO09BWnBDLFdBQVcsQ0FvRHZCO0lBQUQsa0JBQUM7Q0FBQSxBQXBERCxJQW9EQztBQXBEWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJncFwiLFxyXG4gIC8vIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9ncC9ncC5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9ncC9ncC5jb21wb25lbnQuY3NzXCIsIFwiLi9hcHAuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgR3BDb21wb25lbnRcclxue1xyXG5cdHB1YmxpYyB0ZXh0OiBzdHJpbmc7XHJcblx0cHVibGljIHdvcmRzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcblx0cHVibGljIGRpc3BsYXlBcnJheTogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG5cclxuXHJcblx0cHVibGljIGh0bWxBZGRPcGVuID0gXCI8c3Ryb25nPjxmb250IGNvbG9yPSdibHVlJz5cIjtcclxuXHRwdWJsaWMgaHRtbEFkZENsb3NlID0gXCI8L2ZvbnQ+PC9zdHJvbmc+XCI7XHJcblx0cHVibGljIGh0bWxSZW1vdmVPcGVuID0gXCI8ZGVsPjxzdHJvbmc+PGZvbnQgY29sb3I9J3JlZCc+XCI7XHJcblx0cHVibGljIGh0bWxSZW1vdmVDbG9zZSA9IHRoaXMuaHRtbEFkZENsb3NlICsgXCI8L2RlbD5cIjtcclxuXHJcblx0cHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKVxyXG5cdHtcclxuXHRcdHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKFxyXG5cdFx0XHRwYXJhbXMgPT5cclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMudGV4dCA9IHBhcmFtc1tcInRleHRcIl07XHJcblx0XHRcdFx0dGhpcy53b3JkcyA9IHRoaXMudGV4dC5zcGxpdChcIiBcIik7XHJcblx0XHRcdFx0Ly8gdGhpcy5kaXNwbGF5QXJyYXkgPSB0aGlzLndvcmRzO1xyXG5cdFx0XHRcdC8vIHRoaXMud29yZHMubWFwKHggPT4gXCI8Zm9udCBzaXplPScyMCc+XCIgKyB4ICsgXCI8L2ZvbnQ+XCIpO1xyXG5cdFx0XHRcdHRoaXMuZGlzcGxheUFycmF5ID0gdGhpcy53b3Jkcy5tYXAoeCA9PiBcIiBcIiArIHggKyBcIiBcIik7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMuZGlzcGxheUFycmF5KTtcclxuXHRcdFx0fSlcclxuXHR9XHJcblxyXG5cdHByb2Nlc3NXb3JkKGk6IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBhbGVydChpKTtcclxuXHJcblx0XHRpZiAodGhpcy5kaXNwbGF5QXJyYXlbaV0uaW5kZXhPZih0aGlzLmh0bWxSZW1vdmVPcGVuKSA+IC0xKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmRpc3BsYXlBcnJheVtpXSA9IHRoaXMuZGlzcGxheUFycmF5W2ldLnJlcGxhY2UobmV3IFJlZ0V4cCh0aGlzLmh0bWxSZW1vdmVPcGVuLCBcImdcIiksIFwiXCIpO1xyXG5cdFx0XHR0aGlzLmRpc3BsYXlBcnJheVtpXSA9IHRoaXMuZGlzcGxheUFycmF5W2ldLnJlcGxhY2UobmV3IFJlZ0V4cCh0aGlzLmh0bWxSZW1vdmVDbG9zZSwgXCJnXCIpLCBcIlwiKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHRoaXMuZGlzcGxheUFycmF5W2ldLmluZGV4T2YodGhpcy5odG1sQWRkT3BlbikgPiAtMSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5kaXNwbGF5QXJyYXlbaV0gPSB0aGlzLmRpc3BsYXlBcnJheVtpXS5yZXBsYWNlKG5ldyBSZWdFeHAodGhpcy5odG1sQWRkT3BlbiwgXCJnXCIpLCBcIlwiKTtcclxuXHRcdFx0dGhpcy5kaXNwbGF5QXJyYXlbaV0gPSB0aGlzLmRpc3BsYXlBcnJheVtpXS5yZXBsYWNlKG5ldyBSZWdFeHAodGhpcy5odG1sQWRkQ2xvc2UsIFwiZ1wiKSwgXCJcIik7XHJcblxyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmRpc3BsYXlBcnJheVtpXSA9IHRoaXMuaHRtbFJlbW92ZU9wZW4gKyB0aGlzLmRpc3BsYXlBcnJheVtpXSArIHRoaXMuaHRtbFJlbW92ZUNsb3NlO1xyXG5cclxuXHRcdH1cclxuXHJcblxyXG5cclxuXHR9XHJcblxyXG59ICJdfQ==