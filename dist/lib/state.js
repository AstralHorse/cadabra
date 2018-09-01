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
var event_1 = require("./event");
var ComponentUpdater = (function () {
    function ComponentUpdater() {
        this.updateEvent = new event_1.Event;
    }
    ComponentUpdater.prototype.subscribe = function (component) {
        var orig = component.componentWillUnmount;
        var idx = this.updateEvent.on(component.forceUpdate.bind(component));
        var self = this;
        component.componentWillUnmount = function () {
            self.updateEvent.off(idx);
            if (orig)
                orig.apply(this, arguments);
        };
    };
    ComponentUpdater.prototype.update = function () {
        this.updateEvent.trigger();
    };
    return ComponentUpdater;
}());
exports.ComponentUpdater = ComponentUpdater;
var State = (function (_super) {
    __extends(State, _super);
    function State() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    State.prototype.setState = function (state) {
        this.assign(state);
        this.update();
    };
    State.create = function (defaultState) {
        var rv = new State();
        rv.assign(defaultState);
        return rv;
    };
    State.prototype.assign = function (state) {
        Object.assign(this, state);
    };
    return State;
}(ComponentUpdater));
exports.State = State;
var PropState = (function () {
    function PropState(data) {
        this.data = data;
        this.components = {};
    }
    PropState.create = function (defaultState) {
        var rv = new PropState(defaultState);
        var _loop_1 = function (n) {
            rv[n] = function (component) {
                return rv.get(n, component);
            };
            rv[n].set = function (val) {
                return rv.set(n, val);
            };
        };
        for (var n in defaultState) {
            _loop_1(n);
        }
        return rv;
    };
    PropState.prototype.get = function (name, component) {
        if (component)
            this.subscribe(name, component);
        return this.data[name];
    };
    PropState.prototype.set = function (name, val) {
        if (this.data[name] !== val) {
            this.data[name] = val;
            if (this.components[name]) {
                this.components[name].forEach(function (c) { return c.forceUpdate(); });
            }
        }
    };
    PropState.prototype.setState = function (newstate) {
        Object.assign(this, newstate);
        for (var name_1 in newstate) {
            var val = newstate[name_1];
            if (this.data[name_1] !== val) {
                if (this.components[name_1]) {
                    this.components[name_1].forEach(function (c) { return c.forceUpdate(); });
                }
            }
        }
    };
    PropState.prototype.subscribe = function (name, component) {
        var arr = this.components[name];
        if (!arr)
            arr = this.components[name] = [];
        if (arr.indexOf(component) < 0) {
            var unmount_1 = component.componentWillUnmount;
            arr.push(component);
            component.componentWillUnmount = function () {
                arr.splice(arr.indexOf(this), 1);
                if (unmount_1)
                    unmount_1.apply(this, arguments);
            };
        }
    };
    return PropState;
}());
exports.PropState = PropState;
//# sourceMappingURL=state.js.map