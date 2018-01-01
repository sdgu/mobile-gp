"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var GpservService = (function () {
    function GpservService() {
    }
    GpservService.prototype.prepare = function (str) {
        return str;
    };
    GpservService = __decorate([
        core_1.Injectable()
    ], GpservService);
    return GpservService;
}());
exports.GpservService = GpservService;
