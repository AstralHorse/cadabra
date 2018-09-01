"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Registration = (function (_super) {
    __extends(Registration, _super);
    function Registration() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    Registration.prototype.componentWillMount = function () {
    };
    Registration.prototype.render = function () {
        return (React.createElement("div", { className: 'poup_sign' },
            React.createElement("form", null,
                React.createElement("input", { type: "text", name: "name", placeholder: "Name" }),
                React.createElement("input", { type: "text", name: "email", placeholder: "E-Mail" }),
                React.createElement("input", { type: "text", name: "password", placeholder: "Password" }),
                React.createElement("input", { type: "text", name: "confirm", placeholder: "Comfirm" })),
            React.createElement("div", { className: 'add' },
                React.createElement("button", { className: 'base-label-pointing' }, "Sign In"),
                React.createElement("button", { className: 'base-label-pointing active' }, "Sign Up"))));
    };
    return Registration;
}(React.Component));
exports.Registration = Registration;
//# sourceMappingURL=registration.js.map