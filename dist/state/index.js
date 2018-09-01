"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("@/lib");
var log_1 = require("@uk/log");
var log = new log_1.Log("CASH:STATE");
exports.state = lib_1.PropState.create({
    user: undefined,
    page: 0
});
//# sourceMappingURL=index.js.map