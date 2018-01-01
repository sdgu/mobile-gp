"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var gpserv_service_1 = require("../gpserv/gpserv.service");
var MainComponent = (function () {
    function MainComponent(router) {
        this.router = router;
        // Your TypeScript logic goes here
        this.textToPrepare = "this is a first test string ez";
    }
    MainComponent.prototype.prepare = function () {
        // alert(this.textToPrepare);
        var navigationExtras = {
            queryParams: {
                "text": this.textToPrepare
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
        __metadata("design:paramtypes", [router_1.Router])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBMkQ7QUFDM0QsMkRBQXlEO0FBY3pEO0lBS0UsdUJBQTJCLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSHpDLGtDQUFrQztRQUNsQyxrQkFBYSxHQUFHLGdDQUFnQyxDQUFDO0lBRUwsQ0FBQztJQUU3QywrQkFBTyxHQUFQO1FBRUUsNkJBQTZCO1FBQzdCLElBQUksZ0JBQWdCLEdBQ3BCO1lBQ0UsV0FBVyxFQUNYO2dCQUNFLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYTthQUMzQjtTQUVGLENBQUM7UUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDakQsQ0FBQztJQW5CVSxhQUFhO1FBVnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixjQUFjO1lBQ2QsOERBQThEO1lBQzlELHdDQUF3QztZQUN4QyxJQUFJO1lBQ0osV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsRUFBRSxxQkFBcUIsQ0FBQztZQUMvRCxTQUFTLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1NBQzNCLENBQUM7eUNBTW1DLGVBQU07T0FMOUIsYUFBYSxDQXdDekI7SUFBRCxvQkFBQztDQUFBLEFBeENELElBd0NDO0FBeENZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBHcHNlcnZTZXJ2aWNlIH0gZnJvbSBcIi4uL2dwc2Vydi9ncHNlcnYuc2VydmljZVwiO1xyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICAvLyB0ZW1wbGF0ZTogYFxyXG4gIC8vICAgPEFjdGlvbkJhciB0aXRsZT1cIk15IEFwcFwiIGNsYXNzPVwiYWN0aW9uLWJhclwiPjwvQWN0aW9uQmFyPlxyXG4gIC8vICAgPCEtLSBZb3VyIFVJIGNvbXBvbmVudHMgZ28gaGVyZSAtLT5cclxuICAvLyBgXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9tYWluL21haW4uY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vbWFpbi9tYWluLmNvbXBvbmVudC5jc3NcIiwgXCIuL2FwcC5jb21wb25lbnQuY3NzXCJdLFxyXG4gIHByb3ZpZGVyczogW0dwc2VydlNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYWluQ29tcG9uZW50IFxyXG57XHJcbiAgLy8gWW91ciBUeXBlU2NyaXB0IGxvZ2ljIGdvZXMgaGVyZVxyXG4gIHRleHRUb1ByZXBhcmUgPSBcInRoaXMgaXMgYSBmaXJzdCB0ZXN0IHN0cmluZyBlelwiO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cclxuXHJcbiAgcHJlcGFyZSgpXHJcbiAge1xyXG4gICAgLy8gYWxlcnQodGhpcy50ZXh0VG9QcmVwYXJlKTtcclxuICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0gXHJcbiAgICB7XHJcbiAgICAgIHF1ZXJ5UGFyYW1zOlxyXG4gICAgICB7XHJcbiAgICAgICAgXCJ0ZXh0XCI6IHRoaXMudGV4dFRvUHJlcGFyZVxyXG4gICAgICB9XHJcblxyXG4gICAgfTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImdwXCJdLCBuYXZpZ2F0aW9uRXh0cmFzKTtcclxuICB9XHJcblxyXG4vLyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGdwc2VydlNlcnZpY2U6IEdwc2VydlNlcnZpY2UpIFxyXG4vLyB7XHJcbi8vICAgcHJlcGFyZSgpXHJcbi8vICAge1xyXG4vLyAgICAgYWxlcnQodGhpcy50ZXh0VG9QcmVwYXJlKTtcclxuLy8gICAgIHRoaXMuZ3BzZXJ2U2VydmljZS5wcmVwYXJlKHN0cjogU3RyaW5nKVxyXG4vLyAgICAgICAuc3Vic2NyaWJlKFxyXG4vLyAgICAgICAgICgpID0+IHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9ncFwiXSksXHJcbi8vICAgICAgICAgKGVycm9yKSA9PiBhbGVydChcInNvbWV0aGluZyB3ZW50IHdyb25nXCIpXHJcbi8vICAgICAgICAgKTtcclxuICAgIFxyXG4vLyAgIH1cclxuXHJcblxyXG4vLyB9XHJcblxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ==