"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("!style-loader!css-loader?module=false!@/style/index.css");
var log_1 = require("@uk/log");
var lib_1 = require("@/lib");
var log = new log_1.Log("CASH:MAIN");
log.info("Loading...");
lib_1.history.listen(function (e) {
    log.info('Navigate', { path: e.pathname });
});
require("./app");
//# sourceMappingURL=index.js.map