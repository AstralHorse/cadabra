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
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            input: '',
        };
        return _this;
    }
    Main.prototype.componentWillMount = function () {
    };
    Main.prototype.render = function () {
        return (React.createElement("section", null,
            React.createElement("div", { className: 'header' },
                React.createElement("h1", null, " Notes"),
                React.createElement("span", { className: 'user' }, "Danil")),
            React.createElement("div", { className: 'sub_header' },
                React.createElement("div", { className: 'left__nav' },
                    React.createElement("select", null,
                        React.createElement("option", null, "All"),
                        React.createElement("option", null, "Active"),
                        React.createElement("option", null, "Archived")),
                    React.createElement("label", null,
                        React.createElement("input", { type: "text", name: "Search", placeholder: "Search" }))),
                React.createElement("div", { className: 'right__nav' },
                    React.createElement("div", { className: "note__btn" },
                        React.createElement("img", { src: "img/New.svg", title: "" }),
                        React.createElement("span", null, "New note")),
                    React.createElement("div", { className: "note__btn" },
                        React.createElement("img", { src: "img/I.svg", title: "" }),
                        React.createElement("span", null, "Due date")),
                    React.createElement("div", { className: "note__btn" },
                        React.createElement("img", { src: "img/Can.svg", title: "" }),
                        React.createElement("span", null, "Delete")),
                    React.createElement("div", { className: "note__btn" },
                        React.createElement("label", null,
                            React.createElement("input", { type: "checkbox" }),
                            React.createElement("span", null, "archived"))))),
            React.createElement("div", { className: 'main' },
                React.createElement("div", { className: 'left_note' },
                    React.createElement("div", { className: 'nav_note' },
                        React.createElement("div", { className: 'note_title' }, "Note title"),
                        React.createElement("div", { className: 'note__description' }, "lorem ipsum of zhe ipsum lalalallorem"),
                        React.createElement("span", { className: 'date' }, "not_date"))),
                React.createElement("div", { className: 'rignt_note' },
                    React.createElement("div", { className: 'note_title' }, "Note Name"),
                    React.createElement("div", { className: 'note__description' },
                        React.createElement("p", null, "lorem ipsum of zhe ipsum lalalallorem ipsum of zhe ipsum lalalallorem ipsum of zhe ipsum lalalal lorem ipsum of zhe ipsum lalalal lorem ipsum of zhe ipsum lalalal lorem ipsum of zhe ipsum lalalal"),
                        React.createElement("p", null, "lorem ipsum of zhe ipsum lalalallorem ipsum of zhe ipsum lalalallorem ipsum of zhe ipsum lalalal lorem ipsum of zhe ipsum lalalal lorem ipsum of zhe ipsum lalalal lorem ipsum of zhe ipsum lalalal"))))));
    };
    return Main;
}(React.Component));
exports.Main = Main;
//# sourceMappingURL=main.js.map