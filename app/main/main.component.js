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
            var t = this.textToPrepare.replace(/\n/g, " ========> ").split(" ").join("$#@");
            var p = Array(t.length).fill("neutral").join("$%%");
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
                // console.log(result);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBMkU7QUFDM0UsMkRBQXlEO0FBR3pELGdDQUErQjtBQUMvQiw2REFVOEI7QUFFOUIsc0NBQXFDO0FBWXJDO0lBSUksc0RBQXNEO0lBRXhELHdDQUF3QztJQUN4QyxJQUFJO0lBQ0oseUNBQXlDO0lBQ3pDLE1BQU07SUFDTiwyQ0FBMkM7SUFDM0MsZ0RBQWdEO0lBQ2hELE1BQU07SUFDTixJQUFJO0lBRUosdUNBQXVDO0lBQ3ZDLElBQUk7SUFDSix5REFBeUQ7SUFDekQsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix5REFBeUQ7SUFDekQsd0JBQXdCO0lBQ3hCLHNEQUFzRDtJQUN0RCx1QkFBdUI7SUFDdkIsNERBQTREO0lBQzVELE1BQU07SUFDTixpRUFBaUU7SUFDakUsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsTUFBTTtJQUNOLGdCQUFnQjtJQUNoQixJQUFJO0lBRUosdUJBQTJCLE1BQWMsRUFBVSxJQUFVO1FBQWxDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBaEM3RCxtQ0FBbUM7UUFDbkMsa0JBQWEsR0FBRyxFQUFFLENBQUMsQ0FBQSw0aUNBQTRpQztJQStCLy9CLENBQUM7SUFFakUsZ0NBQVEsR0FBUjtRQUVFLElBQUksRUFBRSxHQUF1QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUM5RCxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsK0JBQU8sR0FBUDtRQUFBLGlCQXFEQztRQW5EQyw2QkFBNkI7UUFDN0Isd0JBQXdCO1FBQ3hCLGtGQUFrRjtRQUNsRixDQUFDO1lBQ0MsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDL0UsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BELElBQUksa0JBQWdCLEdBQ3BCO2dCQUNFLFdBQVcsRUFDWDtvQkFDRSxLQUFLLEVBQUUsSUFBSTtvQkFDWCxNQUFNLEVBQUUsQ0FBQztvQkFDVCxLQUFLLEVBQUUsQ0FBQztpQkFDVDthQUVGLENBQUM7WUFFSixJQUFJLE9BQU8sR0FBRztnQkFDVixLQUFLLEVBQUUsV0FBVztnQkFDbEIsT0FBTyxFQUFFLGlFQUFpRTtnQkFDMUUsWUFBWSxFQUFFLEtBQUs7Z0JBQ25CLGdCQUFnQixFQUFFLElBQUk7Z0JBQ3RCLGlCQUFpQixFQUFFLFFBQVE7YUFDOUIsQ0FBQztZQUVGLGlCQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBZTtnQkFDbEMsdUJBQXVCO2dCQUN2QixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FDWCxDQUFDO29CQUNDLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsa0JBQWdCLENBQUMsQ0FBQztnQkFDakQsQ0FBQztZQUVMLENBQUMsQ0FBQyxDQUFDO1lBRUQsa0ZBQWtGO1lBQ2xGLElBQUk7WUFDSixvQkFBb0I7WUFDcEIsTUFBTTtZQUVOLFlBQVk7WUFDWixJQUFJO1lBQ0osT0FBTztZQUNQLElBQUk7WUFFSixJQUFJO1FBRUosQ0FBQztRQUNILE9BQU87UUFDUCxDQUFDO1FBRUQsQ0FBQztJQUNILENBQUM7SUFFRCxrQ0FBVSxHQUFWO1FBRUUsSUFBSSxnQkFBZ0IsR0FDcEI7WUFDRSxXQUFXLEVBQ1g7Z0JBQ0UsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osTUFBTSxFQUFFLGdDQUFTLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztnQkFDaEMsS0FBSyxFQUFFLGdDQUFTLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQzthQUUvQjtTQUVGLENBQUM7UUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDakQsQ0FBQztJQS9HVSxhQUFhO1FBVnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixjQUFjO1lBQ2QsOERBQThEO1lBQzlELHdDQUF3QztZQUN4QyxJQUFJO1lBQ0osV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsRUFBRSxxQkFBcUIsQ0FBQztZQUMvRCxTQUFTLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1NBQzNCLENBQUM7eUNBbUNtQyxlQUFNLEVBQWdCLFdBQUk7T0FsQ2xELGFBQWEsQ0FvSXpCO0lBQUQsb0JBQUM7Q0FBQSxBQXBJRCxJQW9JQztBQXBJWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgR3BzZXJ2U2VydmljZSB9IGZyb20gXCIuLi9ncHNlcnYvZ3BzZXJ2LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcclxuaW1wb3J0IHsgVGV4dFZpZXcgfSBmcm9tIFwidWkvdGV4dC12aWV3XCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQge1xyXG4gICAgZ2V0Qm9vbGVhbixcclxuICAgIHNldEJvb2xlYW4sXHJcbiAgICBnZXROdW1iZXIsXHJcbiAgICBzZXROdW1iZXIsXHJcbiAgICBnZXRTdHJpbmcsXHJcbiAgICBzZXRTdHJpbmcsXHJcbiAgICBoYXNLZXksXHJcbiAgICByZW1vdmUsXHJcbiAgICBjbGVhclxyXG59IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5cclxuaW1wb3J0IHsgY29uZmlybSB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICAvLyB0ZW1wbGF0ZTogYFxyXG4gIC8vICAgPEFjdGlvbkJhciB0aXRsZT1cIk15IEFwcFwiIGNsYXNzPVwiYWN0aW9uLWJhclwiPjwvQWN0aW9uQmFyPlxyXG4gIC8vICAgPCEtLSBZb3VyIFVJIGNvbXBvbmVudHMgZ28gaGVyZSAtLT5cclxuICAvLyBgXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9tYWluL21haW4uY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vbWFpbi9tYWluLmNvbXBvbmVudC5jc3NcIiwgXCIuL2FwcC5jb21wb25lbnQuY3NzXCJdLFxyXG4gIHByb3ZpZGVyczogW0dwc2VydlNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYWluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0XHJcbntcclxuICAvLyBZb3VyIFR5cGVTY3JpcHQgbG9naWMgZ29lcyBoZXJlIFxyXG4gIHRleHRUb1ByZXBhcmUgPSBcIlwiOy8vXCJ0aGlzIGlzIGEgZmlyc3QgdGVzdCBzdHJpbmcgdGhpcyBpcyBhIGZpcnN0IHRlc3Qgc3RyaW5nIHRoaXMgaXMgYSBmaXJzdCB0ZXN0IHN0cmluZyB0aGlzIGlzIGEgZmlyc3QgdGVzdCBzdHJpbmcgdGhpcyBpcyBhIGZpcnN0IHRlc3Qgc3RyaW5nIHRoaXMgaXMgYSBmaXJzdCB0ZXN0IHN0cmluZyB0aGlzIGlzIGEgZmlyc3QgdGVzdCBzdHJpbmcgdGhpcyBpcyBhIGZpcnN0IHRlc3Qgc3RyaW5nIHRoaXMgaXMgYSBmaXJzdCB0ZXN0IHN0cmluZyB0aGlzIGlzIGEgZmlyc3QgdGVzdCBzdHJpbmcgdGhpcyBpcyBhIGZpcnN0IHRlc3Qgc3RyaW5nIHRoaXMgaXMgYSBmaXJzdCB0ZXN0IHN0cmluZyB0aGlzIGlzIGEgZmlyc3QgdGVzdCBzdHJpbmcgdGhpcyBpcyBhIGZpcnN0IHRlc3Qgc3RyaW5nIHRoaXMgaXMgYSBmaXJzdCB0ZXN0IHN0cmluZyB0aGlzIGlzIGEgZmlyc3QgdGVzdCBzdHJpbmcgdGhpcyBpcyBhIGZpcnN0IHRlc3Qgc3RyaW5nIHRoaXMgaXMgYSBmaXJzdCB0ZXN0IHN0cmluZyB0aGlzIGlzIGEgZmlyc3QgdGVzdCBzdHJpbmcgdGhpcyBpcyBhIGZpcnN0IHRlc3Qgc3RyaW5nIHRoaXMgaXMgYSBmaXJzdCB0ZXN0IHN0cmluZyB0aGlzIGlzIGEgZmlyc3QgdGVzdCBzdHJpbmcgdGhpcyBpcyBhIGZpcnN0IHRlc3Qgc3RyaW5nIHRoaXMgaXMgYSBmaXJzdCB0ZXN0IHN0cmluZyB0aGlzIGlzIGEgZmlyc3QgdGVzdCBzdHJpbmcgdGhpcyBpcyBhIGZpcnN0IHRlc3Qgc3RyaW5nIHRoaXMgaXMgYSBmaXJzdCB0ZXN0IHN0cmluZyB0aGlzIGlzIGEgZmlyc3QgdGVzdCBzdHJpbmcgdGhpcyBpcyBhIGZpcnN0IHRlc3Qgc3RyaW5nIHRoaXMgaXMgYSBmaXJzdCB0ZXN0IHN0cmluZyB0aGlzIGlzIGEgZmlyc3QgdGVzdCBzdHJpbmcgdGhpcyBpcyBhIGZpcnN0IHRlc3Qgc3RyaW5nIHRoaXMgaXMgYSBmaXJzdCB0ZXN0IHN0cmluZyB0aGlzIGlzIGEgZmlyc3QgdGVzdCBzdHJpbmcgdGhpcyBpcyBhIGZpcnN0IHRlc3Qgc3RyaW5nIHRoaXMgaXMgYSBmaXJzdCB0ZXN0IHN0cmluZyB0aGlzIGlzIGEgZmlyc3QgdGVzdCBzdHJpbmcgdGhpcyBpcyBhIGZpcnN0IHRlc3Qgc3RyaW5nIFwiXHJcbiAgICAvLyB0ZXN0VGV4dCA9IGdldFN0cmluZyhcImRpc3BsYXlTdHIwXCIsIFwibm90IHByZXNlbnRcIik7XHJcblxyXG4gIC8vIHNhdmVBcnJheVRvU3RyaW5nKGFycjogQXJyYXk8c3RyaW5nPilcclxuICAvLyB7XHJcbiAgLy8gICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKylcclxuICAvLyAgIHtcclxuICAvLyAgICAgc2V0U3RyaW5nKFwiZGlzcGxheVN0clwiICsgaSwgYXJyW2ldKTtcclxuICAvLyAgICAgLy8gY29uc29sZS5sb2coZ2V0U3RyaW5nKFwiZGlzcGxheVN0cjBcIikpO1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuXHJcbiAgLy8gZ2V0QXJyYXlGcm9tU3RyaW5ncygpOiBBcnJheTxzdHJpbmc+XHJcbiAgLy8ge1xyXG4gIC8vICAgY29uc29sZS5sb2coXCJlbnRlcmVkIGdldGFycmF5ZnJvbXN0cmluZ3MgZnJvbSBtYWluXCIpXHJcbiAgLy8gICBsZXQgYXJyID0gW107XHJcbiAgLy8gICBsZXQgaSA9IDA7XHJcbiAgLy8gICAvLyBsZXQgczIgPSBnZXRTdHJpbmcoXCJkaXNwbGF5U3RyMFwiLCBcIm5vdCBwcmVzZW50XCIpO1xyXG4gIC8vICAgLy8gY29uc29sZS5sb2coczIpO1xyXG4gIC8vICAgLy8gbGV0IHMzID0gZ2V0U3RyaW5nKFwiZGlsYW9lc3RcIiwgXCJub3QgcHJlc2VudFwiKTtcclxuICAvLyAgIC8vIGNvbnNvbGUubG9nKHMzKVxyXG4gIC8vICAgd2hpbGUoZ2V0U3RyaW5nKFwiZGlzcGxheVN0clwiICsgaSwgXCJmYWxzZVwiKSAhPT0gXCJmYWxzZVwiKVxyXG4gIC8vICAge1xyXG4gIC8vICAgICBsZXQgcyA9IGdldFN0cmluZyhcImRpc3BsYXlTdHJcIiArIGkpOyAvLy5yZXBsYWNlKC8gL2csIFwiXCIpO1xyXG4gIC8vICAgICBjb25zb2xlLmxvZyhzKTtcclxuICAvLyAgICAgYXJyLnB1c2gocyk7XHJcbiAgLy8gICAgIGkrKztcclxuICAvLyAgIH1cclxuICAvLyAgIHJldHVybiBhcnI7XHJcbiAgLy8gfVxyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpXHJcbiAge1xyXG4gICAgdmFyIHR2OiBUZXh0VmlldyA9IDxUZXh0Vmlldz50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQoXCJwcmVwVGV4dFwiKVxyXG4gICAgdHYuZGlzbWlzc1NvZnRJbnB1dCgpO1xyXG4gIH1cclxuXHJcbiAgcHJlcGFyZSgpXHJcbiAge1xyXG4gICAgLy8gYWxlcnQodGhpcy50ZXh0VG9QcmVwYXJlKTtcclxuICAgIC8vIGFsZXJ0KHRoaXMudGVzdFRleHQpO1xyXG4gICAgLy8gaWYgKGNvbmZpcm0oXCJBcmUgeW91IHJlYWR5IHRvIHN0YXJ0IGEgbmV3IGNoZWNrPyBQcmV2aW91cyBkYXRhIHdpbGwgYmUgbG9zdC5cIikpXHJcbiAgICB7XHJcbiAgICAgIGxldCB0ID0gdGhpcy50ZXh0VG9QcmVwYXJlLnJlcGxhY2UoL1xcbi9nLCBcIiA9PT09PT09PT4gXCIpLnNwbGl0KFwiIFwiKS5qb2luKFwiJCNAXCIpXHJcbiAgICAgIGxldCBwID0gQXJyYXkodC5sZW5ndGgpLmZpbGwoXCJuZXV0cmFsXCIpLmpvaW4oXCIkJSVcIik7XHJcbiAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0gXHJcbiAgICAgIHtcclxuICAgICAgICBxdWVyeVBhcmFtczpcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcIm5ld1wiOiB0cnVlLFxyXG4gICAgICAgICAgXCJ0ZXh0XCI6IHQsXHJcbiAgICAgICAgICBcInRhcFwiOiBwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfTtcclxuXHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICB0aXRsZTogXCJOZXcgY2hlY2tcIixcclxuICAgICAgICBtZXNzYWdlOiBcIkFyZSB5b3UgcmVhZHkgdG8gc3RhcnQgYSBuZXcgY2hlY2s/IFByZXZpb3VzIGRhdGEgd2lsbCBiZSBsb3N0LlwiLFxyXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJZZXNcIixcclxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5vXCIsXHJcbiAgICAgICAgbmV1dHJhbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcclxuICAgIH07XHJcblxyXG4gICAgY29uZmlybShvcHRpb25zKS50aGVuKChyZXN1bHQ6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIGlmIChyZXN1bHQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiZ3BcIl0sIG5hdmlnYXRpb25FeHRyYXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0pO1xyXG5cclxuICAgICAgLy8gaWYgKGNvbmZpcm0oXCJBcmUgeW91IHJlYWR5IHRvIHN0YXJ0IGEgbmV3IGNoZWNrPyBQcmV2aW91cyBkYXRhIHdpbGwgYmUgbG9zdC5cIikpXHJcbiAgICAgIC8vIHtcclxuICAgICAgLy8gICBzZXRUaW1lb3V0KCgpPT5cclxuICAgICAgLy8gICB7XHJcbiAgICAgICAgICBcclxuICAgICAgLy8gICB9LCAxMDApXHJcbiAgICAgIC8vIH1cclxuICAgICAgLy8gZWxzZVxyXG4gICAgICAvLyB7XHJcblxyXG4gICAgICAvLyB9XHJcbiAgICAgIFxyXG4gICAgICB9XHJcbiAgICAvLyBlbHNlXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ29Ub0VkaXRvcigpXHJcbiAge1xyXG4gICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSBcclxuICAgIHtcclxuICAgICAgcXVlcnlQYXJhbXM6XHJcbiAgICAgIHtcclxuICAgICAgICBcIm5ld1wiOiBmYWxzZSxcclxuICAgICAgICBcInRleHRcIjogZ2V0U3RyaW5nKFwiZGlzcFN0clwiLCBcIlwiKSxcclxuICAgICAgICBcInRhcFwiOiBnZXRTdHJpbmcoXCJ0YXBTdHJcIiwgXCJcIilcclxuICAgIFxyXG4gICAgICB9XHJcblxyXG4gICAgfTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImdwXCJdLCBuYXZpZ2F0aW9uRXh0cmFzKTtcclxuICB9XHJcblxyXG4vLyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGdwc2VydlNlcnZpY2U6IEdwc2VydlNlcnZpY2UpIFxyXG4vLyB7XHJcbi8vICAgcHJlcGFyZSgpXHJcbi8vICAge1xyXG4vLyAgICAgYWxlcnQodGhpcy50ZXh0VG9QcmVwYXJlKTtcclxuLy8gICAgIHRoaXMuZ3BzZXJ2U2VydmljZS5wcmVwYXJlKHN0cjogU3RyaW5nKVxyXG4vLyAgICAgICAuc3Vic2NyaWJlKFxyXG4vLyAgICAgICAgICgpID0+IHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9ncFwiXSksXHJcbi8vICAgICAgICAgKGVycm9yKSA9PiBhbGVydChcInNvbWV0aGluZyB3ZW50IHdyb25nXCIpXHJcbi8vICAgICAgICAgKTtcclxuICAgIFxyXG4vLyAgIH1cclxuXHJcblxyXG4vLyB9XHJcblxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ==