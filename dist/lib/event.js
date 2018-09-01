"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Event = (function () {
    function Event() {
        this.handlers = new Map();
        this.counter = 0;
    }
    Event.prototype.on = function (handler) {
        this.handlers.set(this.counter, { handler: handler });
        return this.counter++;
    };
    Event.prototype.once = function (handler) {
        this.handlers.set(this.counter, { handler: handler, once: true });
        return this.counter++;
    };
    Event.prototype.off = function (handlerOrIndex) {
        var _this = this;
        if (handlerOrIndex instanceof Function) {
            this.handlers.forEach(function (handler, key) {
                if (handler.handler === handlerOrIndex) {
                    _this.handlers.delete(key);
                }
            });
        }
        else {
            this.handlers.delete(handlerOrIndex);
        }
    };
    Event.prototype.trigger = function (arg) {
        var _this = this;
        if (this.scheduled)
            this.scheduled = false;
        this.handlers.forEach(function (handler, key) {
            handler.handler(arg);
            if (handler.once) {
                _this.handlers.delete(key);
            }
        });
    };
    Event.prototype.scheduleTrigger = function (arg) {
        var _this = this;
        if (this.scheduled)
            return;
        this.scheduled = true;
        setTimeout(function () { return _this.trigger(arg); }, 0);
    };
    return Event;
}());
exports.Event = Event;
//# sourceMappingURL=event.js.map