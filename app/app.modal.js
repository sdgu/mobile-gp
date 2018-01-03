"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var ModalComponent = (function () {
    function ModalComponent(params) {
        this.params = params;
        this.frameworks = [
            "NativeScript",
            "Xamarin",
            "Onsen UI",
            "Ionic Framework",
            "React Native"
        ];
    }
    ModalComponent.prototype.close = function (res) {
        this.params.closeCallback(res);
    };
    ModalComponent.prototype.addCommentTags = function () {
        this.enteredText += "[c]  [/c] ";
    };
    ModalComponent = __decorate([
        core_1.Component({
            selector: "my-modal",
            templateUrl: "./app.modal.html",
        }),
        __metadata("design:paramtypes", [dialogs_1.ModalDialogParams])
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLm1vZGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLG1FQUE0RTtBQU01RTtJQUlJLHdCQUEyQixNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUNoRCxJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ2QsY0FBYztZQUNkLFNBQVM7WUFDVCxVQUFVO1lBQ1YsaUJBQWlCO1lBQ2pCLGNBQWM7U0FDakIsQ0FBQztJQUNOLENBQUM7SUFFTSw4QkFBSyxHQUFaLFVBQWEsR0FBVztRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsdUNBQWMsR0FBZDtRQUVJLElBQUksQ0FBQyxXQUFXLElBQUksWUFBWSxDQUFDO0lBQ3JDLENBQUM7SUFyQlEsY0FBYztRQUoxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLGtCQUFrQjtTQUNsQyxDQUFDO3lDQUtxQywyQkFBaUI7T0FKM0MsY0FBYyxDQXNCMUI7SUFBRCxxQkFBQztDQUFBLEFBdEJELElBc0JDO0FBdEJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm15LW1vZGFsXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FwcC5tb2RhbC5odG1sXCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBvbmVudCB7XHJcblxyXG4gICAgcHVibGljIGZyYW1ld29ya3M6IEFycmF5PHN0cmluZz47XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykge1xyXG4gICAgICAgIHRoaXMuZnJhbWV3b3JrcyA9IFtcclxuICAgICAgICAgICAgXCJOYXRpdmVTY3JpcHRcIixcclxuICAgICAgICAgICAgXCJYYW1hcmluXCIsXHJcbiAgICAgICAgICAgIFwiT25zZW4gVUlcIixcclxuICAgICAgICAgICAgXCJJb25pYyBGcmFtZXdvcmtcIixcclxuICAgICAgICAgICAgXCJSZWFjdCBOYXRpdmVcIlxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbiAgICBlbnRlcmVkVGV4dDogc3RyaW5nO1xyXG4gICAgcHVibGljIGNsb3NlKHJlczogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhyZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZENvbW1lbnRUYWdzKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmVudGVyZWRUZXh0ICs9IFwiW2NdICBbL2NdIFwiO1xyXG4gICAgfVxyXG59Il19