"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_component_1 = require("./main/main.component");
var gp_component_1 = require("./gp/gp.component");
var bb_component_1 = require("./bb/bb.component");
exports.routes = [
    { path: "", component: main_component_1.MainComponent },
    { path: "gp", component: gp_component_1.GpComponent },
    { path: "bb", component: bb_component_1.BbComponent }
];
exports.navigatableComponents = [
    main_component_1.MainComponent,
    gp_component_1.GpComponent,
    bb_component_1.BbComponent
];
