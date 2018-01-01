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
        this.textToPrepare = "this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string this is a first test string ";
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
            var t = this.textToPrepare.split(" ").join("$#@");
            var p = Array(this.textToPrepare.split(" ").length).fill("neutral").join("$%%");
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
                console.log(result);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBMkU7QUFDM0UsMkRBQXlEO0FBR3pELGdDQUErQjtBQUMvQiw2REFVOEI7QUFFOUIsc0NBQXFDO0FBWXJDO0lBSUksc0RBQXNEO0lBRXhELHdDQUF3QztJQUN4QyxJQUFJO0lBQ0oseUNBQXlDO0lBQ3pDLE1BQU07SUFDTiwyQ0FBMkM7SUFDM0MsZ0RBQWdEO0lBQ2hELE1BQU07SUFDTixJQUFJO0lBRUosdUNBQXVDO0lBQ3ZDLElBQUk7SUFDSix5REFBeUQ7SUFDekQsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix5REFBeUQ7SUFDekQsd0JBQXdCO0lBQ3hCLHNEQUFzRDtJQUN0RCx1QkFBdUI7SUFDdkIsNERBQTREO0lBQzVELE1BQU07SUFDTixpRUFBaUU7SUFDakUsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsTUFBTTtJQUNOLGdCQUFnQjtJQUNoQixJQUFJO0lBRUosdUJBQTJCLE1BQWMsRUFBVSxJQUFVO1FBQWxDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBaEM3RCxtQ0FBbUM7UUFDbkMsa0JBQWEsR0FBRywwaUNBQTBpQyxDQUFBO0lBK0IxL0IsQ0FBQztJQUVqRSxnQ0FBUSxHQUFSO1FBRUUsSUFBSSxFQUFFLEdBQXVCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQzlELEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCwrQkFBTyxHQUFQO1FBQUEsaUJBcURDO1FBbkRDLDZCQUE2QjtRQUM3Qix3QkFBd0I7UUFDeEIsa0ZBQWtGO1FBQ2xGLENBQUM7WUFDQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDakQsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEYsSUFBSSxrQkFBZ0IsR0FDcEI7Z0JBQ0UsV0FBVyxFQUNYO29CQUNFLEtBQUssRUFBRSxJQUFJO29CQUNYLE1BQU0sRUFBRSxDQUFDO29CQUNULEtBQUssRUFBRSxDQUFDO2lCQUNUO2FBRUYsQ0FBQztZQUVKLElBQUksT0FBTyxHQUFHO2dCQUNWLEtBQUssRUFBRSxXQUFXO2dCQUNsQixPQUFPLEVBQUUsaUVBQWlFO2dCQUMxRSxZQUFZLEVBQUUsS0FBSztnQkFDbkIsZ0JBQWdCLEVBQUUsSUFBSTtnQkFDdEIsaUJBQWlCLEVBQUUsUUFBUTthQUM5QixDQUFDO1lBRUYsaUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFlO2dCQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FDWCxDQUFDO29CQUNDLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsa0JBQWdCLENBQUMsQ0FBQztnQkFDakQsQ0FBQztZQUVMLENBQUMsQ0FBQyxDQUFDO1lBRUQsa0ZBQWtGO1lBQ2xGLElBQUk7WUFDSixvQkFBb0I7WUFDcEIsTUFBTTtZQUVOLFlBQVk7WUFDWixJQUFJO1lBQ0osT0FBTztZQUNQLElBQUk7WUFFSixJQUFJO1FBRUosQ0FBQztRQUNILE9BQU87UUFDUCxDQUFDO1FBRUQsQ0FBQztJQUNILENBQUM7SUFFRCxrQ0FBVSxHQUFWO1FBRUUsSUFBSSxnQkFBZ0IsR0FDcEI7WUFDRSxXQUFXLEVBQ1g7Z0JBQ0UsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osTUFBTSxFQUFFLGdDQUFTLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztnQkFDaEMsS0FBSyxFQUFFLGdDQUFTLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQzthQUUvQjtTQUVGLENBQUM7UUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDakQsQ0FBQztJQS9HVSxhQUFhO1FBVnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixjQUFjO1lBQ2QsOERBQThEO1lBQzlELHdDQUF3QztZQUN4QyxJQUFJO1lBQ0osV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsRUFBRSxxQkFBcUIsQ0FBQztZQUMvRCxTQUFTLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1NBQzNCLENBQUM7eUNBbUNtQyxlQUFNLEVBQWdCLFdBQUk7T0FsQ2xELGFBQWEsQ0FvSXpCO0lBQUQsb0JBQUM7Q0FBQSxBQXBJRCxJQW9JQztBQXBJWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgR3BzZXJ2U2VydmljZSB9IGZyb20gXCIuLi9ncHNlcnYvZ3BzZXJ2LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcclxuaW1wb3J0IHsgVGV4dFZpZXcgfSBmcm9tIFwidWkvdGV4dC12aWV3XCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQge1xyXG4gICAgZ2V0Qm9vbGVhbixcclxuICAgIHNldEJvb2xlYW4sXHJcbiAgICBnZXROdW1iZXIsXHJcbiAgICBzZXROdW1iZXIsXHJcbiAgICBnZXRTdHJpbmcsXHJcbiAgICBzZXRTdHJpbmcsXHJcbiAgICBoYXNLZXksXHJcbiAgICByZW1vdmUsXHJcbiAgICBjbGVhclxyXG59IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5cclxuaW1wb3J0IHsgY29uZmlybSB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICAvLyB0ZW1wbGF0ZTogYFxyXG4gIC8vICAgPEFjdGlvbkJhciB0aXRsZT1cIk15IEFwcFwiIGNsYXNzPVwiYWN0aW9uLWJhclwiPjwvQWN0aW9uQmFyPlxyXG4gIC8vICAgPCEtLSBZb3VyIFVJIGNvbXBvbmVudHMgZ28gaGVyZSAtLT5cclxuICAvLyBgXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9tYWluL21haW4uY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vbWFpbi9tYWluLmNvbXBvbmVudC5jc3NcIiwgXCIuL2FwcC5jb21wb25lbnQuY3NzXCJdLFxyXG4gIHByb3ZpZGVyczogW0dwc2VydlNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYWluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0XHJcbntcclxuICAvLyBZb3VyIFR5cGVTY3JpcHQgbG9naWMgZ29lcyBoZXJlIFxyXG4gIHRleHRUb1ByZXBhcmUgPSBcInRoaXMgaXMgYSBmaXJzdCB0ZXN0IHN0cmluZyB0aGlzIGlzIGEgZmlyc3QgdGVzdCBzdHJpbmcgdGhpcyBpcyBhIGZpcnN0IHRlc3Qgc3RyaW5nIHRoaXMgaXMgYSBmaXJzdCB0ZXN0IHN0cmluZyB0aGlzIGlzIGEgZmlyc3QgdGVzdCBzdHJpbmcgdGhpcyBpcyBhIGZpcnN0IHRlc3Qgc3RyaW5nIHRoaXMgaXMgYSBmaXJzdCB0ZXN0IHN0cmluZyB0aGlzIGlzIGEgZmlyc3QgdGVzdCBzdHJpbmcgdGhpcyBpcyBhIGZpcnN0IHRlc3Qgc3RyaW5nIHRoaXMgaXMgYSBmaXJzdCB0ZXN0IHN0cmluZyB0aGlzIGlzIGEgZmlyc3QgdGVzdCBzdHJpbmcgdGhpcyBpcyBhIGZpcnN0IHRlc3Qgc3RyaW5nIHRoaXMgaXMgYSBmaXJzdCB0ZXN0IHN0cmluZyB0aGlzIGlzIGEgZmlyc3QgdGVzdCBzdHJpbmcgdGhpcyBpcyBhIGZpcnN0IHRlc3Qgc3RyaW5nIHRoaXMgaXMgYSBmaXJzdCB0ZXN0IHN0cmluZyB0aGlzIGlzIGEgZmlyc3QgdGVzdCBzdHJpbmcgdGhpcyBpcyBhIGZpcnN0IHRlc3Qgc3RyaW5nIHRoaXMgaXMgYSBmaXJzdCB0ZXN0IHN0cmluZyB0aGlzIGlzIGEgZmlyc3QgdGVzdCBzdHJpbmcgdGhpcyBpcyBhIGZpcnN0IHRlc3Qgc3RyaW5nIHRoaXMgaXMgYSBmaXJzdCB0ZXN0IHN0cmluZyB0aGlzIGlzIGEgZmlyc3QgdGVzdCBzdHJpbmcgdGhpcyBpcyBhIGZpcnN0IHRlc3Qgc3RyaW5nIHRoaXMgaXMgYSBmaXJzdCB0ZXN0IHN0cmluZyB0aGlzIGlzIGEgZmlyc3QgdGVzdCBzdHJpbmcgdGhpcyBpcyBhIGZpcnN0IHRlc3Qgc3RyaW5nIHRoaXMgaXMgYSBmaXJzdCB0ZXN0IHN0cmluZyB0aGlzIGlzIGEgZmlyc3QgdGVzdCBzdHJpbmcgdGhpcyBpcyBhIGZpcnN0IHRlc3Qgc3RyaW5nIHRoaXMgaXMgYSBmaXJzdCB0ZXN0IHN0cmluZyB0aGlzIGlzIGEgZmlyc3QgdGVzdCBzdHJpbmcgdGhpcyBpcyBhIGZpcnN0IHRlc3Qgc3RyaW5nIHRoaXMgaXMgYSBmaXJzdCB0ZXN0IHN0cmluZyB0aGlzIGlzIGEgZmlyc3QgdGVzdCBzdHJpbmcgdGhpcyBpcyBhIGZpcnN0IHRlc3Qgc3RyaW5nIHRoaXMgaXMgYSBmaXJzdCB0ZXN0IHN0cmluZyB0aGlzIGlzIGEgZmlyc3QgdGVzdCBzdHJpbmcgXCJcclxuICAgIC8vIHRlc3RUZXh0ID0gZ2V0U3RyaW5nKFwiZGlzcGxheVN0cjBcIiwgXCJub3QgcHJlc2VudFwiKTtcclxuXHJcbiAgLy8gc2F2ZUFycmF5VG9TdHJpbmcoYXJyOiBBcnJheTxzdHJpbmc+KVxyXG4gIC8vIHtcclxuICAvLyAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKVxyXG4gIC8vICAge1xyXG4gIC8vICAgICBzZXRTdHJpbmcoXCJkaXNwbGF5U3RyXCIgKyBpLCBhcnJbaV0pO1xyXG4gIC8vICAgICAvLyBjb25zb2xlLmxvZyhnZXRTdHJpbmcoXCJkaXNwbGF5U3RyMFwiKSk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG5cclxuICAvLyBnZXRBcnJheUZyb21TdHJpbmdzKCk6IEFycmF5PHN0cmluZz5cclxuICAvLyB7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhcImVudGVyZWQgZ2V0YXJyYXlmcm9tc3RyaW5ncyBmcm9tIG1haW5cIilcclxuICAvLyAgIGxldCBhcnIgPSBbXTtcclxuICAvLyAgIGxldCBpID0gMDtcclxuICAvLyAgIC8vIGxldCBzMiA9IGdldFN0cmluZyhcImRpc3BsYXlTdHIwXCIsIFwibm90IHByZXNlbnRcIik7XHJcbiAgLy8gICAvLyBjb25zb2xlLmxvZyhzMik7XHJcbiAgLy8gICAvLyBsZXQgczMgPSBnZXRTdHJpbmcoXCJkaWxhb2VzdFwiLCBcIm5vdCBwcmVzZW50XCIpO1xyXG4gIC8vICAgLy8gY29uc29sZS5sb2coczMpXHJcbiAgLy8gICB3aGlsZShnZXRTdHJpbmcoXCJkaXNwbGF5U3RyXCIgKyBpLCBcImZhbHNlXCIpICE9PSBcImZhbHNlXCIpXHJcbiAgLy8gICB7XHJcbiAgLy8gICAgIGxldCBzID0gZ2V0U3RyaW5nKFwiZGlzcGxheVN0clwiICsgaSk7IC8vLnJlcGxhY2UoLyAvZywgXCJcIik7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKHMpO1xyXG4gIC8vICAgICBhcnIucHVzaChzKTtcclxuICAvLyAgICAgaSsrO1xyXG4gIC8vICAgfVxyXG4gIC8vICAgcmV0dXJuIGFycjtcclxuICAvLyB9XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KClcclxuICB7XHJcbiAgICB2YXIgdHY6IFRleHRWaWV3ID0gPFRleHRWaWV3PnRoaXMucGFnZS5nZXRWaWV3QnlJZChcInByZXBUZXh0XCIpXHJcbiAgICB0di5kaXNtaXNzU29mdElucHV0KCk7XHJcbiAgfVxyXG5cclxuICBwcmVwYXJlKClcclxuICB7XHJcbiAgICAvLyBhbGVydCh0aGlzLnRleHRUb1ByZXBhcmUpO1xyXG4gICAgLy8gYWxlcnQodGhpcy50ZXN0VGV4dCk7XHJcbiAgICAvLyBpZiAoY29uZmlybShcIkFyZSB5b3UgcmVhZHkgdG8gc3RhcnQgYSBuZXcgY2hlY2s/IFByZXZpb3VzIGRhdGEgd2lsbCBiZSBsb3N0LlwiKSlcclxuICAgIHtcclxuICAgICAgbGV0IHQgPSB0aGlzLnRleHRUb1ByZXBhcmUuc3BsaXQoXCIgXCIpLmpvaW4oXCIkI0BcIilcclxuICAgICAgbGV0IHAgPSBBcnJheSh0aGlzLnRleHRUb1ByZXBhcmUuc3BsaXQoXCIgXCIpLmxlbmd0aCkuZmlsbChcIm5ldXRyYWxcIikuam9pbihcIiQlJVwiKTtcclxuICAgICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSBcclxuICAgICAge1xyXG4gICAgICAgIHF1ZXJ5UGFyYW1zOlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwibmV3XCI6IHRydWUsXHJcbiAgICAgICAgICBcInRleHRcIjogdCxcclxuICAgICAgICAgIFwidGFwXCI6IHBcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9O1xyXG5cclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgIHRpdGxlOiBcIk5ldyBjaGVja1wiLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiQXJlIHlvdSByZWFkeSB0byBzdGFydCBhIG5ldyBjaGVjaz8gUHJldmlvdXMgZGF0YSB3aWxsIGJlIGxvc3QuXCIsXHJcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIlllc1wiLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTm9cIixcclxuICAgICAgICBuZXV0cmFsQnV0dG9uVGV4dDogXCJDYW5jZWxcIlxyXG4gICAgfTtcclxuXHJcbiAgICBjb25maXJtKG9wdGlvbnMpLnRoZW4oKHJlc3VsdDogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJncFwiXSwgbmF2aWdhdGlvbkV4dHJhcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcblxyXG4gICAgICAvLyBpZiAoY29uZmlybShcIkFyZSB5b3UgcmVhZHkgdG8gc3RhcnQgYSBuZXcgY2hlY2s/IFByZXZpb3VzIGRhdGEgd2lsbCBiZSBsb3N0LlwiKSlcclxuICAgICAgLy8ge1xyXG4gICAgICAvLyAgIHNldFRpbWVvdXQoKCk9PlxyXG4gICAgICAvLyAgIHtcclxuICAgICAgICAgIFxyXG4gICAgICAvLyAgIH0sIDEwMClcclxuICAgICAgLy8gfVxyXG4gICAgICAvLyBlbHNlXHJcbiAgICAgIC8vIHtcclxuXHJcbiAgICAgIC8vIH1cclxuICAgICAgXHJcbiAgICAgIH1cclxuICAgIC8vIGVsc2VcclxuICAgIHtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnb1RvRWRpdG9yKClcclxuICB7XHJcbiAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IFxyXG4gICAge1xyXG4gICAgICBxdWVyeVBhcmFtczpcclxuICAgICAge1xyXG4gICAgICAgIFwibmV3XCI6IGZhbHNlLFxyXG4gICAgICAgIFwidGV4dFwiOiBnZXRTdHJpbmcoXCJkaXNwU3RyXCIsIFwiXCIpLFxyXG4gICAgICAgIFwidGFwXCI6IGdldFN0cmluZyhcInRhcFN0clwiLCBcIlwiKVxyXG4gICAgXHJcbiAgICAgIH1cclxuXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiZ3BcIl0sIG5hdmlnYXRpb25FeHRyYXMpO1xyXG4gIH1cclxuXHJcbi8vIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZ3BzZXJ2U2VydmljZTogR3BzZXJ2U2VydmljZSkgXHJcbi8vIHtcclxuLy8gICBwcmVwYXJlKClcclxuLy8gICB7XHJcbi8vICAgICBhbGVydCh0aGlzLnRleHRUb1ByZXBhcmUpO1xyXG4vLyAgICAgdGhpcy5ncHNlcnZTZXJ2aWNlLnByZXBhcmUoc3RyOiBTdHJpbmcpXHJcbi8vICAgICAgIC5zdWJzY3JpYmUoXHJcbi8vICAgICAgICAgKCkgPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2dwXCJdKSxcclxuLy8gICAgICAgICAoZXJyb3IpID0+IGFsZXJ0KFwic29tZXRoaW5nIHdlbnQgd3JvbmdcIilcclxuLy8gICAgICAgICApO1xyXG4gICAgXHJcbi8vICAgfVxyXG5cclxuXHJcbi8vIH1cclxuXHJcblxyXG5cclxuXHJcbn1cclxuIl19